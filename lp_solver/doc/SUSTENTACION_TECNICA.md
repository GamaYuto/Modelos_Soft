# Sustentación Técnica

## Resumen

Documento técnico que describe la arquitectura, componentes y pasos para ejecutar y validar localmente el proyecto `lp_solver` (backend en FastAPI y frontend en Vite/React).

## Arquitectura

- Backend: Python + FastAPI (carpeta `backend`). Expone endpoints REST para resolver problemas de programación lineal.
- Frontend: React + Vite + Tailwind (carpeta `frontend`). Interfaz para crear modelos, enviar al backend y mostrar resultados.
- Comunicación: HTTP (axios en frontend). El backend permite CORS para desarrollo.

## Backend (detalles técnicos)

- Punto de entrada: `backend/main.py` (exporta `app` para `uvicorn`).
- API principal: `backend/api.py`.
  - Endpoints claves:
    - `GET /ping` — disponibilidad.
    - `POST /solve` — recibe payload con `tipo` ("max"/"min"), `objetivo`, `restricciones` y `metodo` ("graphical" o "simplex").
  - Validación: Pydantic models (`RestriccionInput`, `ProblemaInput`) dentro de `api.py`.
  - CORS: `fastapi.middleware.cors.CORSMiddleware` con `allow_origins=['*']` para facilitar desarrollo local.

- Solvers:
  - `backend/simplex.py`: implementación del método Simplex con Big M. Función principal `resolver_simplex(tipo, c, restricciones)` que devuelve estado, variables óptimas y tablas de iteración.
  - `backend/graphical_method.py`: `resolver_grafico(tipo, c, restricciones)` para problemas de 2 variables; genera vértices factibles y punto óptimo, además de datos para graficar.

## Frontend (detalles técnicos)

- Configuración: Vite + React (carpeta `frontend`). Código en `frontend/src` y componentes en `frontend/src/components`.
- Comunicación con backend: `frontend/src/api.js` crea una instancia `axios` cuya `baseURL` se obtiene de `import.meta.env.VITE_API_BASE_URL` y por defecto apunta a `http://localhost:8000`.
- Variables de entorno: para forzar la URL del API en desarrollo se añadió `frontend/.env` con:

```bash
VITE_API_BASE_URL=http://localhost:8000
```

- Flujo: el frontend construye el payload del problema (función `buildSolverPayload()` en los utils/validators) y hace `POST /solve`. Los componentes renderizan resultados (tablas, gráfica, iteraciones Simplex).

## Ejecución local (pasos mínimos)

1. Backend (desde `lp_solver/backend`):

```bash
# Crear entorno virtual (si PowerShell no detecta `python`, usar `py -3`)
py -3 -m venv .venv
# Activar (PowerShell)
. .venv\Scripts\Activate.ps1
# Activar (CMD)
.venv\Scripts\activate.bat
# Instalar dependencias
pip install -r requirements.txt
# Ejecutar servidor
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

2. Frontend (desde `lp_solver/frontend`):

```bash
cd frontend
npm install
npm run dev
```

3. Verificación básica:

```bash
curl http://localhost:8000/ping
# debe responder: {"message":"pong"}
```

Abrir la UI de Vite (por defecto `http://localhost:5173`) y enviar un caso de prueba; revisar en DevTools las peticiones a `http://localhost:8000/solve`.

## Pruebas y validación

- Tests backend: `backend/test_simplex.py` contiene casos de prueba unitarios; se pueden ejecutar con `pytest` desde `backend`:

```bash
cd backend
python -m pytest test_simplex.py
```

- Ejemplos: `backend/ejemplos.py` contiene llamadas de ejemplo a la API local.

## Notas sobre Windows y problemas comunes

- Si PowerShell muestra "Python was not found": use el lanzador `py` (ej. `py -3 -m venv .venv`) o añada Python al PATH desde el instalador. Desactive el alias de Microsoft Store si interfiere.
- Si al activar el venv PowerShell falla por políticas de ejecución: ejecutar `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` (administrador no siempre requerido) o activar desde CMD con `activate.bat`.
- Si `npm` no se reconoce: instalar Node.js desde https://nodejs.org/ o usar `winget install --id OpenJS.NodeJS`.

## Comprobaciones recomendadas

- Confirmar backend en `http://localhost:8000/ping`.
- Confirmar que `frontend/.env` contiene `VITE_API_BASE_URL=http://localhost:8000` y reiniciar Vite tras cambiarlo.
- En la UI, abrir DevTools → Network para verificar llamadas a `/solve` y revisar respuesta JSON para `valor_optimo`, `variables_opt` o datos de gráfica.

## Referencias

- README.md — instrucciones generales del repo.
- SUSTENTACION.md — guía corta de sustentación (5 minutos).
- Archivos clave: `backend/api.py`, `backend/simplex.py`, `backend/graphical_method.py`, `frontend/src/api.js`.

---

Archivo generado automáticamente por el asistente para la sustentación técnica.
