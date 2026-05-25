"""Pruebas básicas para el solucionador Simplex en backend/simplex.py."""

from simplex import resolver_simplex


def approx(a, b, tol=1e-6):
    return a is not None and b is not None and abs(a - b) <= tol


def imprimir_resultado(nombre, resultado):
    print(f"\n== {nombre} ==")
    print(f"Status: {resultado['status']}")
    print(f"Valor óptimo: {resultado['valor_optimo']}")
    print(f"Variables: {resultado['variables_opt']}")
    print(f"Conclusión: {resultado['conclusion']}")


def prueba_max_unica():
    resultado = resolver_simplex(
        'max',
        [3, 5],
        [
            [1, 0, '<=', 4],
            [0, 2, '<=', 12],
            [3, 2, '<=', 18],
        ],
    )
    imprimir_resultado('Maximización solución única', resultado)
    assert resultado['status'] == 'optimal'
    assert approx(resultado['valor_optimo'], 36.0)
    assert approx(resultado['variables_opt'][0], 2.0)
    assert approx(resultado['variables_opt'][1], 6.0)


def prueba_minimizacion():
    resultado = resolver_simplex(
        'min',
        [1, 2],
        [
            [1, 1, '>=', 2],
            [1, 0, '<=', 1],
            [0, 1, '<=', 1],
        ],
    )
    imprimir_resultado('Minimización', resultado)
    assert resultado['status'] == 'optimal'
    assert approx(resultado['valor_optimo'], 3.0)
    assert approx(resultado['variables_opt'][0], 1.0)
    assert approx(resultado['variables_opt'][1], 1.0)


def prueba_infactible():
    resultado = resolver_simplex(
        'max',
        [1, 1],
        [
            [1, 1, '<=', 1],
            [1, 1, '>=', 3],
        ],
    )
    imprimir_resultado('Infactible', resultado)
    assert resultado['status'] == 'infeasible'


def prueba_no_acotado():
    resultado = resolver_simplex(
        'max',
        [1, 1],
        [
            [0, 1, '=', 0],
        ],
    )
    imprimir_resultado('No acotado', resultado)
    assert resultado['status'] == 'unbounded'


def prueba_multiples_soluciones():
    resultado = resolver_simplex(
        'max',
        [1, 1],
        [
            [1, 1, '<=', 4],
            [1, 0, '<=', 4],
            [0, 1, '<=', 4],
        ],
    )
    imprimir_resultado('Múltiples soluciones', resultado)
    assert resultado['status'] == 'optimal'
    assert 'múltiples' in resultado['conclusion'].lower()
    assert approx(resultado['valor_optimo'], 4.0)


def main():
    prueba_max_unica()
    prueba_minimizacion()
    prueba_infactible()
    prueba_no_acotado()
    prueba_multiples_soluciones()
    print('\nTodas las pruebas pasaron correctamente.')


if __name__ == '__main__':
    main()
