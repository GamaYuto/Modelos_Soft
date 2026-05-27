#!/usr/bin/env python3
"""Test simple del método gráfico."""

from graphical_method import resolver_grafico

# Test 1: Problema simple de maximización
print("Test 1: Maximización simple")
tipo = "max"
c = [3, 5]
restricciones = [
    [1, 0, "<=", 4],      # x1 <= 4
    [0, 2, "<=", 12],     # 2*x2 <= 12
    [3, 2, "<=", 18],     # 3*x1 + 2*x2 <= 18
]

try:
    resultado = resolver_grafico(tipo, c, restricciones)
    print(f"Status: {resultado['status']}")
    print(f"Valor óptimo: {resultado['valor_optimo']}")
    print(f"Solución: {resultado['solucion']}")
    print(f"Conclusion: {resultado['conclusion']}")
    print()
except Exception as e:
    print(f"Error: {e}")
    print()

# Test 2: Problema infactible
print("Test 2: Problema infactible")
tipo = "max"
c = [1, 1]
restricciones = [
    [1, 1, "<=", 1],
    [1, 1, ">=", 2],
]

try:
    resultado = resolver_grafico(tipo, c, restricciones)
    print(f"Status: {resultado['status']}")
    print(f"Conclusion: {resultado['conclusion']}")
    print()
except Exception as e:
    print(f"Error: {e}")
    print()

# Test 3: Múltiples soluciones
print("Test 3: Múltiples soluciones")
tipo = "max"
c = [1, 1]
restricciones = [
    [1, 1, "<=", 1],
    [1, 0, ">=", 0],
    [0, 1, ">=", 0],
]

try:
    resultado = resolver_grafico(tipo, c, restricciones)
    print(f"Status: {resultado['status']}")
    print(f"Valor óptimo: {resultado['valor_optimo']}")
    print(f"Multiple solutions: {resultado['multiple_solutions']}")
    print(f"Conclusion: {resultado['conclusion']}")
    print()
except Exception as e:
    print(f"Error: {e}")
    print()

# Test 4: No acotado con restricción >= y no negatividad
print("Test 4: Problema no acotado")
tipo = "max"
c = [3, 2]
restricciones = [
    [1, -1, ">=", 2],
]

try:
    resultado = resolver_grafico(tipo, c, restricciones)
    print(f"Status: {resultado['status']}")
    print(f"Valor óptimo: {resultado['valor_optimo']}")
    print(f"Conclusion: {resultado['conclusion']}")
    assert resultado['status'] == 'unbounded'
    print()
except Exception as e:
    print(f"Error: {e}")
    print()

print("Todos los tests completados!")
