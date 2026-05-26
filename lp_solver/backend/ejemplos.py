import json

import requests

BASE_URL = 'http://127.0.0.1:8000'


def ejemplo_ping():
    """Consulta el endpoint de salud para validar conectividad básica."""
    response = requests.get(f'{BASE_URL}/ping')
    print('PING:', response.status_code, response.json())


def ejemplo_solve_max():
    """Envía un caso de maximización y muestra la respuesta formateada."""
    payload = {
        'tipo': 'max',
        'objetivo': [3, 5],
        'restricciones': [
            {'coeficientes': [1, 0], 'sentido': '<=', 'lado_derecho': 4},
            {'coeficientes': [0, 2], 'sentido': '<=', 'lado_derecho': 12},
            {'coeficientes': [3, 2], 'sentido': '<=', 'lado_derecho': 18},
        ],
    }
    response = requests.post(f'{BASE_URL}/solve', json=payload)
    print('SOLVE MAX:', response.status_code)
    print(json.dumps(response.json(), indent=2, ensure_ascii=False))


def ejemplo_min():
    """Envía un caso de minimización para validar restricciones mixtas."""
    payload = {
        'tipo': 'min',
        'objetivo': [1, 2],
        'restricciones': [
            {'coeficientes': [1, 1], 'sentido': '>=', 'lado_derecho': 2},
            {'coeficientes': [1, 0], 'sentido': '<=', 'lado_derecho': 1},
            {'coeficientes': [0, 1], 'sentido': '<=', 'lado_derecho': 1},
        ],
    }
    response = requests.post(f'{BASE_URL}/solve', json=payload)
    print('SOLVE MIN:', response.status_code)
    print(json.dumps(response.json(), indent=2, ensure_ascii=False))


def ejemplo_infeasible():
    """Ejecuta un caso infactible para validar detección de inconsistencia."""
    payload = {
        'tipo': 'max',
        'objetivo': [1, 1],
        'restricciones': [
            {'coeficientes': [1, 1], 'sentido': '<=', 'lado_derecho': 1},
            {'coeficientes': [1, 1], 'sentido': '>=', 'lado_derecho': 3},
        ],
    }
    response = requests.post(f'{BASE_URL}/solve', json=payload)
    print('INFECTIBLE:', response.status_code)
    print(json.dumps(response.json(), indent=2, ensure_ascii=False))


def main():
    """Ejecuta la secuencia completa de ejemplos de integración API."""
    print('Ejemplo /ping')
    ejemplo_ping()
    print('\nEjemplo solución maximizacion')
    ejemplo_solve_max()
    print('\nEjemplo solución minimización')
    ejemplo_min()
    print('\nEjemplo infactible')
    ejemplo_infeasible()


if __name__ == '__main__':
    main()
