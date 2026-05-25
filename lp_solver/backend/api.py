from typing import List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, validator

from simplex import resolver_simplex


class RestriccionInput(BaseModel):
    coeficientes: List[float] = Field(..., description='Coeficientes de la restricción')
    sentido: str = Field(..., description='Sentido de la restricción: "<=", ">=", "="')
    lado_derecho: float = Field(..., description='Término independiente (rhs)')

    @validator('sentido')
    def validar_sentido(cls, valor):
        if valor not in ('<=', '>=', '='):
            raise ValueError('El sentido debe ser "<=", ">=", o "=".')
        return valor


class ProblemaInput(BaseModel):
    tipo: str = Field(..., description='Tipo de problema: "max" o "min"')
    objetivo: List[float] = Field(..., description='Vector de costos objetivo')
    restricciones: List[RestriccionInput] = Field(..., description='Lista de restricciones')

    @validator('tipo')
    def validar_tipo(cls, valor):
        valor_str = str(valor).strip().lower()
        if valor_str not in ('max', 'min'):
            raise ValueError('El tipo debe ser "max" o "min".')
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
    return {'message': 'pong'}


@app.post('/solve')
def solve(problema: ProblemaInput):
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

    restricciones_formato = []
    for restriccion in problema.restricciones:
        restricciones_formato.append(
            [*restriccion.coeficientes, restriccion.sentido, restriccion.lado_derecho]
        )

    try:
        resultado = resolver_simplex(problema.tipo, problema.objetivo, restricciones_formato)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f'Error al resolver el problema: {exc}')

    return resultado
