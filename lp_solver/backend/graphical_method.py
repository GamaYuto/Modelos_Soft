"""Implementación del método gráfico para programación lineal con 2 variables."""

from typing import List, Tuple, Dict, Optional
from math import isclose

TOL = 1e-9


def _es_cero(valor: float) -> bool:
    """Verifica si un valor es aproximadamente cero."""
    return abs(valor) <= TOL


def _son_iguales(a: float, b: float) -> bool:
    """Verifica si dos números son aproximadamente iguales."""
    return isclose(a, b, abs_tol=TOL)


def _punto_satisface_restricciones(
    punto: Tuple[float, float], restricciones: List[Dict], tipo_restriccion: str = 'all'
) -> bool:
    """
    Verifica si un punto satisface todas las restricciones.
    
    Args:
        punto: (x1, x2)
        restricciones: Lista de restricciones con formato [c1, c2, operador, rhs]
        tipo_restriccion: 'all' para todas, 'positivity' solo no-negatividad
    
    Returns:
        True si el punto satisface las restricciones
    """
    x1, x2 = punto
    
    # Verificar no-negatividad
    if x1 < -TOL or x2 < -TOL:
        return False
    
    if tipo_restriccion == 'positivity':
        return True
    
    # Verificar restricciones
    for restriccion in restricciones:
        coef1, coef2, operador, rhs = restriccion
        valor = coef1 * x1 + coef2 * x2
        
        if operador == '<=':
            if valor > rhs + TOL:
                return False
        elif operador == '>=':
            if valor < rhs - TOL:
                return False
        elif operador == '=':
            if not _son_iguales(valor, rhs):
                return False
    
    return True


def _encontrar_intersecciones(
    restricciones: List[List[float]]
) -> List[Tuple[float, float]]:
    """
    Encuentra todos los puntos de intersección relevantes.
    
    Args:
        restricciones: Lista de [c1, c2, operador, rhs]
    
    Returns:
        Lista de puntos (x1, x2)
    """
    intersecciones = []
    
    # Agregar origen
    intersecciones.append((0.0, 0.0))
    
    # Intersecciones con ejes
    for i, restriccion in enumerate(restricciones):
        c1, c2, operador, rhs = restriccion
        
        # Intersección con eje x1 (x2 = 0)
        if not _es_cero(c1):
            x1 = rhs / c1
            if x1 >= -TOL:
                intersecciones.append((x1, 0.0))
        
        # Intersección con eje x2 (x1 = 0)
        if not _es_cero(c2):
            x2 = rhs / c2
            if x2 >= -TOL:
                intersecciones.append((0.0, x2))
    
    # Intersecciones entre pares de restricciones
    for i in range(len(restricciones)):
        for j in range(i + 1, len(restricciones)):
            c1_i, c2_i, _, rhs_i = restricciones[i]
            c1_j, c2_j, _, rhs_j = restricciones[j]
            
            # Resolver sistema de ecuaciones
            # c1_i * x1 + c2_i * x2 = rhs_i
            # c1_j * x1 + c2_j * x2 = rhs_j
            
            det = c1_i * c2_j - c1_j * c2_i
            
            if not _es_cero(det):
                x1 = (rhs_i * c2_j - rhs_j * c2_i) / det
                x2 = (c1_i * rhs_j - c1_j * rhs_i) / det
                
                if x1 >= -TOL and x2 >= -TOL:
                    intersecciones.append((x1, x2))
    
    return intersecciones


def _remover_duplicados(puntos: List[Tuple[float, float]]) -> List[Tuple[float, float]]:
    """Elimina puntos duplicados (dentro de tolerancia)."""
    unicos = []
    for p in puntos:
        es_duplicado = False
        for u in unicos:
            if _son_iguales(p[0], u[0]) and _son_iguales(p[1], u[1]):
                es_duplicado = True
                break
        if not es_duplicado:
            unicos.append(p)
    return unicos


def _evaluar_objetivo(punto: Tuple[float, float], objetivo: List[float]) -> float:
    """Evalúa la función objetivo en un punto."""
    return objetivo[0] * punto[0] + objetivo[1] * punto[1]


def resolver_grafico(tipo: str, c: List[float], restricciones: List[List[float]]) -> Dict:
    """
    Resuelve un problema de programación lineal con 2 variables usando el método gráfico.
    
    Args:
        tipo: 'max' o 'min'
        c: Vector de costos objetivo [c1, c2]
        restricciones: Lista de restricciones, cada una [c1, c2, operador, rhs]
    
    Returns:
        Dict con resultado similar a resolver_simplex
    """
    
    # Validaciones básicas
    if len(c) != 2:
        raise ValueError('El método gráfico solo funciona con exactamente 2 variables.')
    
    tipo_str = str(tipo).strip().lower()
    if tipo_str not in ('max', 'min'):
        raise ValueError("El tipo debe ser 'max' o 'min'.")
    
    c = [float(x) for x in c]
    
    # Normalizar restricciones
    restricciones_normalizadas = []
    for i, r in enumerate(restricciones):
        if len(r) < 4:
            raise ValueError(f'La restricción {i+1} debe tener coeficientes, operador y rhs.')
        c1, c2 = float(r[0]), float(r[1])
        operador = str(r[2]).strip()
        rhs = float(r[3])
        
        if operador not in ('<=', '>=', '='):
            raise ValueError(f'Operador inválido en restricción {i+1}: {operador}')
        
        restricciones_normalizadas.append([c1, c2, operador, rhs])
    
    # Encontrar puntos extremos (vértices de la región factible)
    intersecciones = _encontrar_intersecciones(restricciones_normalizadas)
    intersecciones = _remover_duplicados(intersecciones)
    
    # Filtrar puntos factibles
    puntos_factibles = []
    for punto in intersecciones:
        if _punto_satisface_restricciones(punto, restricciones_normalizadas):
            puntos_factibles.append(punto)
    
    # Resultado básico
    resultado = {
        'status': 'optimal',
        'method': 'graphical',
        'valor_optimo': None,
        'solucion': None,
        'variables_opt': [0.0, 0.0],
        'conclusion': '',
        'graph': {
            'vertices': [{'x': round(p[0], 9), 'y': round(p[1], 9)} for p in puntos_factibles],
            'optimalPoint': None,
            'lines': [
                {
                    'label': f"{r[0]:.0f}x1 + {r[1]:.0f}x2 {r[2]} {r[3]:.0f}",
                    'a': float(r[0]),
                    'b': float(r[1]),
                    'rhs': float(r[3]),
                    'operator': r[2],
                }
                for r in restricciones_normalizadas
            ],
        },
    }
    
    # Si no hay puntos factibles
    if not puntos_factibles:
        resultado['status'] = 'infeasible'
        resultado['conclusion'] = 'El problema es infactible; no hay región factible.'
        return resultado
    
    # Evaluar función objetivo en todos los puntos factibles
    evaluaciones = []
    for punto in puntos_factibles:
        valor = _evaluar_objetivo(punto, c)
        evaluaciones.append((valor, punto))
    
    # Buscar óptimo
    if tipo_str == 'max':
        valor_optimo, punto_optimo = max(evaluaciones, key=lambda x: x[0])
    else:
        valor_optimo, punto_optimo = min(evaluaciones, key=lambda x: x[0])
    
    # Detectar múltiples soluciones
    multiple_solutions = False
    contador_optimo = sum(1 for v, p in evaluaciones if _son_iguales(v, valor_optimo))
    if contador_optimo > 1:
        multiple_solutions = True
        resultado['conclusion'] = (
            f"Se encontró una solución óptima en x1 = {round(punto_optimo[0], 9)}, "
            f"x2 = {round(punto_optimo[1], 9)} con Z = {round(valor_optimo, 9)}. "
            f"Existen múltiples soluciones óptimas alternativas."
        )
    else:
        resultado['conclusion'] = (
            f"El modelo tiene una solución óptima en "
            f"x1 = {round(punto_optimo[0], 9)}, x2 = {round(punto_optimo[1], 9)} "
            f"con Z = {round(valor_optimo, 9)}."
        )
    
    # Llenar resultado
    resultado['valor_optimo'] = round(valor_optimo, 9)
    resultado['solucion'] = {
        'x1': round(punto_optimo[0], 9),
        'x2': round(punto_optimo[1], 9),
    }
    resultado['variables_opt'] = [round(punto_optimo[0], 9), round(punto_optimo[1], 9)]
    resultado['graph']['optimalPoint'] = {
        'x': round(punto_optimo[0], 9),
        'y': round(punto_optimo[1], 9),
    }
    resultado['multiple_solutions'] = multiple_solutions
    
    return resultado
