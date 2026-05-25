import json

import requests

BASE_URL = 'http://127.0.0.1:8000'
CASES_PATH = 'test_cases.json'

SUGERENCIAS = {
    'optimal': 'Revisa la construcción de la tabla Simplex y la lógica de selección de pivote en backend/simplex.py.',
    'infeasible': 'Verifica la detección de variables artificiales activas y la condición de infactibilidad en backend/simplex.py.',
    'unbounded': 'Revisa la regla de razón mínima y la detección de no acotamiento en backend/simplex.py.',
}


def cargar_casos():
    with open(CASES_PATH, 'r', encoding='utf-8') as handle:
        return json.load(handle)


def run_test(caso):
    print(f"\n--- Caso: {caso['name']} ---")
    try:
        respuesta = requests.post(f'{BASE_URL}/solve', json={
            'tipo': caso['tipo'],
            'objetivo': caso['objetivo'],
            'restricciones': caso['restricciones'],
        }, timeout=10)
    except requests.RequestException as exc:
        print(f'Error de conexión: {exc}')
        return False

    print(f'HTTP: {respuesta.status_code}')
    try:
        data = respuesta.json()
    except ValueError:
        print('Respuesta no JSON:', respuesta.text)
        return False

    print('Status esperado:', caso['expected_status'])
    print('Status obtenido:', data.get('status'))
    print('Valor óptimo:', data.get('valor_optimo'))
    print('Conclusión:', data.get('conclusion'))

    if data.get('status') != caso['expected_status']:
        sugerencia = SUGERENCIAS.get(caso['expected_status'], 'Revisa el solver Simplex en backend/simplex.py.')
        print('\nFALLÓ: el resultado no coincide con el esperado.')
        print('Sugerencia:', sugerencia)
        return False

    print('OK: el caso pasó correctamente.')
    return True


def main():
    casos = cargar_casos()
    resultados = [run_test(caso) for caso in casos]
    exitos = sum(1 for resultado in resultados if resultado)
    print(f'\nResumen: {exitos}/{len(casos)} casos pasaron.')
    if exitos != len(casos):
        print('Algunos casos fallaron. Revisa las sugerencias arriba.')


if __name__ == '__main__':
    main()
