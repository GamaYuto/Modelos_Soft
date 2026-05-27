# Guía de sustentación (5 minutos)

## Introducción rápida

1. Mostrar el objetivo: una aplicación web para resolver Programación Lineal con el método Simplex.
2. Indicar la arquitectura:
   - Backend: FastAPI + Python.
   - Frontend: React + Vite + Tailwind.

## 1. Iniciar backend y frontend

### Backend

```bash
cd /workspaces/Modelos_Soft/lp_solver/backend
source venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd /workspaces/Modelos_Soft/lp_solver/frontend
npm install
npm run dev
```

Explicar rápidamente que el frontend llama al endpoint `http://localhost:8000/solve`.

## 2. Cargar un caso de maximización

### Ejemplo

- Tipo: `Maximizar`
- Variables: `2`
- Objetivo: `3`, `5`
- Restricciones:
  - `1 0 <= 4`
  - `0 2 <= 12`
  - `3 2 <= 18`

### Demostración

1. Ingresar los coeficientes en la interfaz.
2. Presionar `Resolver`.
3. Mostrar el resultado: `x1 = 2`, `x2 = 6`, valor óptimo `36`.
4. Si están disponibles, desplegar tablas del Simplex.

## 3. Cargar un caso de minimización

### Ejemplo

- Tipo: `Minimizar`
- Variables: `2`
- Objetivo: `1`, `2`
- Restricciones:
  - `1 1 >= 2`
  - `1 0 <= 1`
  - `0 1 <= 1`

### Demostración

1. Cambiar a `Minimizar`.
2. Ingresar los coeficientes y restricciones.
3. Resolver y mostrar el resultado.
4. Explicar que internamente el solver convierte la minimización a maximización multiplicando la función objetivo por `-1`.

## 4. Ejemplo de infactibilidad

### Ejemplo

- Tipo: `Maximizar`
- Variables: `2`
- Objetivo: `1`, `1`
- Restricciones:
  - `1 1 <= 1`
  - `1 1 >= 3`

### Demostración

1. Ingresar el problema.
2. Resolver.
3. Mostrar que el resultado es `infeasible` y explicar que existe una variable artificial en la base con valor positivo.

## 5. Explicar el código del Simplex

1. Abrir `backend/simplex.py`.
2. Mostrar:
   - Conversión de minimización a maximización.
   - Construcción de la tabla con holguras, excesos y artificiales.
   - Selección de columna pivote y fila pivote.
   - Detección de casos especiales:
     - `infeasible`.
     - `unbounded`.
     - `múltiples soluciones`.
3. Indicar que el backend retorna un diccionario con `status`, `variables_opt`, `valor_optimo`, `conclusion` y `tablas`.

## Cierre

1. Resaltar que la aplicación es un prototipo educativo.
2. Mencionar que soporta problemas con hasta 4 restricciones y múltiples variables según la interfaz.
3. Añadir que el desarrollo utilizó Rapto mini como asistente para generar partes del código.
