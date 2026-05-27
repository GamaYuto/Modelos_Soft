# Informe del Proyecto LP Solver

## Objetivo del trabajo

El objetivo de este proyecto es desarrollar una aplicación web que permita resolver problemas de Programación Lineal usando el método Simplex.
La solución debe incluir un backend en Python con FastAPI y un frontend en React para ingresar el modelo, resolverlo y mostrar resultados.

## Descripción del programa

### Tecnologías

- Backend: Python 3, FastAPI, Uvicorn, NumPy, python-dotenv, requests.
- Frontend: React, Vite, Tailwind CSS, Axios.

### Funcionalidades

- Resolver problemas de programación lineal de maximización y minimización.
- Acepta restricciones con signos `<=`, `>=` y `=`.
- Conversión automática de minimización a maximización internamente.
- Detección de casos especiales:
  - Infactibilidad.
  - No acotamiento.
  - Múltiples soluciones óptimas.
- Interfaz dinámica para variable cantidad de variables y hasta 4 restricciones.
- Visualización de resultados con tabla de variables, valor óptimo y conclusión.
- Opción de ver las tablas del Simplex iteración por iteración.

### Limitaciones

- El solver se diseñó para problemas pequeños: máximo 4 restricciones y un número práctico de variables 2-3.
- La implementación usa el método Big M para manejar variables artificiales, por lo que no es una solución industrial para problemas grandes.
- El frontend asume que el backend está disponible en `http://localhost:8000`.

## Método implementado

### Algoritmo Simplex

Se implementó el método Simplex clásico con la adición del método Big M para manejar restricciones mixtas y ecuaciones.
El proceso básico es:

1. Convertir el problema a forma estándar agregando variables de holgura, exceso y artificiales.
2. Construir la tabla Simplex inicial con la función objetivo y las restricciones.
3. Seleccionar la columna pivote según los costos reducidos (buscando la mayor mejora).
4. Determinar la fila pivote mediante la prueba de razón mínima.
5. Pivotar para actualizar la base y repetir hasta que no queden costos reducidos positivos.

### Adaptación a minimización

Para minimizar, se convierte el vector de costos `c` multiplicándolo por `-1`. De este modo, el mismo algoritmo de maximización puede resolver el problema, y al final se devuelve el valor óptimo original con signo ajustado.

### Restricciones mixtas

- `<=`: se agrega una variable de holgura positiva y se toma como variable básica inicial.
- `>=`: se agrega una variable de exceso con coeficiente `-1` y una variable artificial con penalización `-M` en la función objetivo.
- `=`: se agrega una variable artificial con penalización `-M`.

### Detección de casos especiales

- Infactibilidad: si al final una variable artificial queda en la base con valor positivo, se marca el problema como infactible.
- No acotamiento: si en la columna pivote no hay coeficientes positivos para la regla de razón mínima, el problema es no acotado.
- Múltiples soluciones óptimas: si después de alcanzar un óptimo existen costos reducidos cero en variables no básicas, se indica la existencia de soluciones alternativas.

## Ejemplo de prueba

### Problema de maximización de ejemplo

Minimizar el siguiente caso de maximización utilizado en la fase 1 del proyecto:

- Objetivo: maximizar `3x1 + 5x2`
- Restricciones:
  - `x1 <= 4`
  - `2x2 <= 12`
  - `3x1 + 2x2 <= 18`

### Paso a paso

1. Iniciar backend con `uvicorn main:app --reload --host 0.0.0.0 --port 8000`.
2. Iniciar frontend con `npm run dev` en `lp_solver/frontend`.
3. Abrir la interfaz web y elegir `Maximizar`.
4. Ingresar `2` variables y los coeficientes de la función objetivo: `3` y `5`.
5. Agregar las restricciones con sus coeficientes, sentido y término independiente.
6. Presionar `Resolver`.

### Resultado esperado

- Valor óptimo: `36`
- Variables óptimas: `x1 = 2`, `x2 = 6`
- Conclusión: `Se encontró una solución óptima.`

### Descripción de la interfaz

- El formulario en la pantalla principal permite elegir tipo, número de variables, función objetivo y restricciones.
- El botón `Resolver` envía los datos al backend.
- El panel de resultados muestra el estado, el valor óptimo, las variables y la conclusión.
- Si existen tablas del Simplex, se despliega un acordeón para ver la iteración por iteración.

## Resultados y conclusiones

El programa cumple los requerimientos del proyecto al ofrecer:

- Un backend funcional en FastAPI con endpoint `/solve` y validación de entradas.
- Un frontend React con formulario dinámico y visualización de resultados.
- Resolución de problemas de PL con hasta 4 restricciones y distintas formas de comparación.
- Detección de infactibilidad, no acotamiento y múltiples soluciones.

### Casos que puede resolver

- Maximización con restricciones `<=`, `>=` y `=`.
- Minimización convertida a maximización internamente.
- Problemas con configuración realista de hasta 4 restricciones y varias variables.

### Conclusión

La herramienta es útil como prototipo educativo para entender el método Simplex y sus adaptaciones al manejo de restricciones mixtas.
Permite practicar entradas reales y observar resultados explicados, lo cual lo convierte en una buena base para aprendizaje de Programación Lineal.

## Declaración de uso de IA

Este proyecto utilizó a Rapto mini como asistente para generar partes del código, siguiendo las indicaciones del equipo.
