# LP Solver

Proyecto de aplicación web para resolver problemas de Programación Lineal mediante el método Simplex con Big M.

## Estructura del proyecto

```
lp_solver/
  backend/
    api.py
    ejemplos.py
    main.py
    requirements.txt
    simplex.py
    test_simplex.py
  frontend/
    index.html
    package.json
    postcss.config.js
    tailwind.config.js
    vite.config.js
    src/
      App.jsx
      api.js
      index.css
      main.jsx
      Restricciones.jsx
  README.md
  REPORTE.md
  SUSTENTACION.md
```

## Backend

### Archivos principales

- `backend/api.py`: implementa el servidor FastAPI, los modelos Pydantic, el endpoint `/solve` y `/ping`.
- `backend/main.py`: exporta la aplicación FastAPI para ejecutar con Uvicorn.
- `backend/simplex.py`: contiene la implementación del método Simplex con Big M.
- `backend/test_simplex.py`: pruebas automáticas de los casos solicitados.
- `backend/ejemplos.py`: ejemplos de llamadas al endpoint usando `requests`.
- `backend/requirements.txt`: dependencias Python.

### Instalar y ejecutar

```bash
cd /workspaces/Modelos_Soft/lp_solver/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

En Windows PowerShell:

```powershell
cd /workspaces/Modelos_Soft/lp_solver/backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Probar el backend

```bash
python test_simplex.py
python ejemplos.py
```

## Frontend

### Archivos principales

- `frontend/src/App.jsx`: interfaz principal de React.
- `frontend/src/Restricciones.jsx`: componente hijo para administrar restricciones.
- `frontend/src/api.js`: centraliza la llamada a `POST /solve`.
- `frontend/src/index.css`: estilos con Tailwind.
- `frontend/src/main.jsx`: punto de entrada de la app.
- `frontend/package.json`: dependencias y scripts.

### Instalar y ejecutar

```bash
cd /workspaces/Modelos_Soft/lp_solver/frontend
npm install
npm run dev
```

Después de iniciar el servidor, abrir la URL que indique Vite, normalmente `http://localhost:5173`.

## Uso

1. Iniciar backend.
2. Iniciar frontend.
3. Ingresar el tipo de problema, la función objetivo y las restricciones.
4. Presionar `Resolver`.
5. Revisar resultados y, si está disponible, desplegar las tablas del Simplex.