from typing import List, Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, validator

from simplex import resolver_simplex
from graphical_method import resolver_grafico


class RestriccionInput(BaseModel):
    """Esquema de una restricción lineal enviada por el frontend."""
    coeficientes: List[float] = Field(..., description='Coeficientes de la restricción')
    sentido: str = Field(..., description='Sentido de la restricción: "<=", ">=", "="')
    lado_derecho: float = Field(..., description='Término independiente (rhs)')

    @validator('sentido')
    def validar_sentido(cls, valor):
        """Valida que el operador de restricción esté en el conjunto permitido."""
        if valor not in ('<=', '>=', '='):
            raise ValueError('El sentido debe ser "<=", ">=", o "=".')
        return valor


class ProblemaInput(BaseModel):
    """Esquema del problema de optimización recibido por la API."""
    tipo: str = Field(..., description='Tipo de problema: "max" o "min"')
    objetivo: List[float] = Field(..., description='Vector de costos objetivo')
    restricciones: List[RestriccionInput] = Field(..., description='Lista de restricciones')
    metodo: Optional[str] = Field('simplex', description='Método: "simplex" o "grafico" (solo para 2 variables)')

    @validator('tipo')
    def validar_tipo(cls, valor):
        """Normaliza y valida el tipo de optimización (max/min)."""
        valor_str = str(valor).strip().lower()
        if valor_str not in ('max', 'min'):
            raise ValueError('El tipo debe ser "max" o "min".')
        return valor_str
    
    @validator('metodo')
    def validar_metodo(cls, valor):
        """Establece el método por defecto y valida el método solicitado."""
        if valor is None:
            return 'simplex'
        valor_str = str(valor).strip().lower()
        if valor_str not in ('simplex', 'grafico'):
            raise ValueError('El método debe ser "simplex" o "grafico".')
        return valor_str


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/ping')
def ping():
    """Endpoint de salud para verificar disponibilidad del backend."""
    return {'message': 'pong'}


@app.post('/solve')
def solve(problema: ProblemaInput):
    """Resuelve el modelo lineal usando simplex o método gráfico según el payload."""
    if not problema.objetivo:
        raise HTTPException(status_code=400, detail='El vector objetivo no puede estar vacío.')

    num_vars = len(problema.objetivo)
    for i, restriccion in enumerate(problema.restricciones, start=1):
        if len(restriccion.coeficientes) != num_vars:
            raise HTTPException(
                status_code=400,
                detail=(
                    f'La restricción {i} tiene {len(restriccion.coeficientes)} coeficientes, '
                    f'pero el vector objetivo tiene {num_vars} variables.'
                ),
            )

    # Convierte restricciones del esquema de entrada al formato del solver interno.
    restricciones_formato = []
    for restriccion in problema.restricciones:
        restricciones_formato.append(
            [*restriccion.coeficientes, restriccion.sentido, restriccion.lado_derecho]
        )

    # Seleccionar método
    metodo = problema.metodo.lower() if problema.metodo else 'simplex'
    
    # Validar que el método gráfico solo se use con 2 variables
    if metodo == 'grafico' and num_vars != 2:
        raise HTTPException(
            status_code=400,
            detail='El método gráfico solo funciona con exactamente 2 variables.',
        )

    try:
        if metodo == 'grafico':
            resultado = resolver_grafico(problema.tipo, problema.objetivo, restricciones_formato)
        else:
            resultado = resolver_simplex(problema.tipo, problema.objetivo, restricciones_formato)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f'Error al resolver el problema: {exc}')

    return resultado
