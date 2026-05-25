import { useState } from 'react';
import { solveLP } from './api';
import Restricciones from './Restricciones';

const DEFAULT_VARIABLES = 2;
const VARIABLE_OPTIONS = [2, 3, 4];
const MAX_RESTRICCIONES = 4;

const crearRestriccionVacia = (numVariables) => ({
  coeficientes: Array.from({ length: numVariables }, () => ''),
  sentido: '<=',
  lado_derecho: '',
});

const EJEMPLOS_RAPIDOS = [
  {
    name: 'Maximización solución única',
    tipo: 'max',
    numVariables: 2,
    objetivo: [3, 5],
    restricciones: [
      { coeficientes: [1, 0], sentido: '<=', lado_derecho: 4 },
      { coeficientes: [0, 2], sentido: '<=', lado_derecho: 12 },
      { coeficientes: [3, 2], sentido: '<=', lado_derecho: 18 },
    ],
  },
  {
    name: 'Minimización solución única',
    tipo: 'min',
    numVariables: 2,
    objetivo: [1, 1],
    restricciones: [
      { coeficientes: [1, 1], sentido: '>=', lado_derecho: 2 },
      { coeficientes: [1, 0], sentido: '<=', lado_derecho: 1 },
      { coeficientes: [0, 1], sentido: '<=', lado_derecho: 1 },
    ],
  },
  {
    name: 'Infactible',
    tipo: 'max',
    numVariables: 2,
    objetivo: [1, 1],
    restricciones: [
      { coeficientes: [1, 1], sentido: '<=', lado_derecho: 1 },
      { coeficientes: [1, 1], sentido: '>=', lado_derecho: 2 },
    ],
  },
  {
    name: 'No acotado',
    tipo: 'max',
    numVariables: 2,
    objetivo: [1, 1],
    restricciones: [
      { coeficientes: [1, -1], sentido: '<=', lado_derecho: 1 },
      { coeficientes: [1, 0], sentido: '>=', lado_derecho: 0 },
      { coeficientes: [0, 1], sentido: '>=', lado_derecho: 0 },
    ],
  },
  {
    name: 'Múltiples soluciones',
    tipo: 'max',
    numVariables: 2,
    objetivo: [1, 1],
    restricciones: [
      { coeficientes: [1, 1], sentido: '<=', lado_derecho: 1 },
      { coeficientes: [1, 0], sentido: '>=', lado_derecho: 0 },
      { coeficientes: [0, 1], sentido: '>=', lado_derecho: 0 },
    ],
  },
];

function App() {
  const [tipo, setTipo] = useState('max');
  const [numVariables, setNumVariables] = useState(DEFAULT_VARIABLES);
  const [objetivo, setObjetivo] = useState(Array(DEFAULT_VARIABLES).fill(''));
  const [restricciones, setRestricciones] = useState([
    crearRestriccionVacia(DEFAULT_VARIABLES),
  ]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const manejarCambioVariables = (event) => {
    const next = Number(event.target.value);
    setNumVariables(next);
    setObjetivo((prev) =>
      Array.from({ length: next }, (_, index) => prev[index] ?? ''),
    );
    setRestricciones((prev) =>
      prev.map((restriccion) => ({
        ...restriccion,
        coeficientes: Array.from({ length: next }, (_, index) => restriccion.coeficientes[index] ?? ''),
      })),
    );
  };

  const manejarCambioObjetivo = (index, value) => {
    setObjetivo((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const manejarCambioRestriccion = (index, campo, valor, coefIndex = null) => {
    setRestricciones((prev) =>
      prev.map((restriccion, fila) => {
        if (fila !== index) return restriccion;
        if (campo === 'coef') {
          const coeficientes = [...restriccion.coeficientes];
          coeficientes[coefIndex] = valor;
          return { ...restriccion, coeficientes };
        }
        return { ...restriccion, [campo]: valor };
      }),
    );
  };

  const agregarRestriccion = () => {
    if (restricciones.length >= MAX_RESTRICCIONES) return;
    setRestricciones((prev) => [...prev, crearRestriccionVacia(numVariables)]);
  };

  const eliminarRestriccion = (index) => {
    if (restricciones.length <= 1) return;
    setRestricciones((prev) => prev.filter((_, fila) => fila !== index));
  };

  const cargarEjemplo = (ejemplo) => {
    setTipo(ejemplo.tipo);
    setNumVariables(ejemplo.numVariables);
    setObjetivo(ejemplo.objetivo.map(String));
    setRestricciones(
      ejemplo.restricciones.map((restriccion) => ({
        coeficientes: restriccion.coeficientes.map(String),
        sentido: restriccion.sentido,
        lado_derecho: String(restriccion.lado_derecho),
      })),
    );
    setResult(null);
    setError(null);
    setExpanded(false);
  };

  const validarNumero = (valor) => {
    const numero = Number(valor);
    if (Number.isNaN(numero)) {
      throw new Error('Todos los coeficientes y lados derechos deben ser números.');
    }
    return numero;
  };

  const manejarEnvio = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    setExpanded(false);

    try {
      const payload = {
        tipo,
        objetivo: objetivo.map(validarNumero),
        restricciones: restricciones.map((restriccion) => ({
          coeficientes: restriccion.coeficientes.map(validarNumero),
          sentido: restriccion.sentido,
          lado_derecho: validarNumero(restriccion.lado_derecho),
        })),
      };

      const data = await solveLP(payload);
      setResult(data);
      if (data.tablas?.length || data.iteraciones?.length) {
        setExpanded(true);
      }
    } catch (err) {
      setError(err.response?.data?.detail || err.message || 'Error de red al conectar con el backend.');
    } finally {
      setLoading(false);
    }
  };

  const tablas = result?.tablas ?? result?.iteraciones ?? [];

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-3xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-slate-900">Solucionador de Programación Lineal - Método Simplex</h1>
          <p className="mt-2 text-sm text-slate-500">
            Ingresa el problema de optimización y resuélvelo contra el backend FastAPI.
          </p>
        </header>

        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Ejemplos rápidos</h2>
              <p className="text-sm text-slate-500">Carga un caso de prueba con un clic.</p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {EJEMPLOS_RAPIDOS.map((ejemplo) => (
              <button
                key={ejemplo.name}
                type="button"
                onClick={() => cargarEjemplo(ejemplo)}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100"
              >
                {ejemplo.name}
              </button>
            ))}
          </div>
        </section>

        <form onSubmit={manejarEnvio} className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-6">
            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Parámetros del problema</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Tipo de problema</span>
                  <select
                    value={tipo}
                    onChange={(event) => setTipo(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  >
                    <option value="max">Maximizar</option>
                    <option value="min">Minimizar</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Número de variables</span>
                  <select
                    value={numVariables}
                    onChange={manejarCambioVariables}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  >
                    {VARIABLE_OPTIONS.map((opcion) => (
                      <option key={opcion} value={opcion}>
                        {opcion}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-900">Función objetivo</h3>
                  <p className="text-sm text-slate-500">Ingrese los coeficientes</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {objetivo.map((valor, index) => (
                    <label key={index} className="block">
                      <span className="text-sm font-medium text-slate-700">x{index + 1}</span>
                      <input
                        type="number"
                        step="any"
                        value={valor}
                        onChange={(event) => manejarCambioObjetivo(index, event.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </section>

            <Restricciones
              restricciones={restricciones}
              numVariables={numVariables}
              onChange={manejarCambioRestriccion}
              onAdd={agregarRestriccion}
              onRemove={eliminarRestriccion}
            />

            <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 text-slate-700 shadow-sm">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {loading ? 'Resolver...' : 'Resolver'}
              </button>
              <p className="text-sm text-slate-500">
                El backend debe estar activo en <strong>http://localhost:8000</strong> para resolver el problema.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Resultados</h2>
              {!result && !error && (
                <p className="mt-4 text-sm text-slate-500">Aún no hay resultados. Completa el formulario y presiona Resolver.</p>
              )}
              {error && (
                <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
                  <p className="font-semibold">Error</p>
                  <p>{error}</p>
                </div>
              )}
              {result && (
                <div className="mt-4 space-y-4">
                  <div className={result.status === 'optimal' ? 'rounded-2xl bg-emerald-50 p-4 text-emerald-900' : 'rounded-2xl bg-amber-50 p-4 text-amber-900'}>
                    <p className="font-semibold">Status:</p>
                    <p>{result.status}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-slate-700">Conclusión</p>
                    <p className="mt-2 text-sm text-slate-600">{result.conclusion}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-slate-700">Valor óptimo</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">{result.valor_optimo ?? 'N/A'}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-slate-700">Variables óptimas</p>
                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full text-left text-sm text-slate-700">
                        <thead>
                          <tr>
                            <th className="border-b border-slate-200 px-3 py-2">Variable</th>
                            <th className="border-b border-slate-200 px-3 py-2">Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.variables_opt.map((valor, index) => (
                            <tr key={index} className="odd:bg-white even:bg-slate-100">
                              <td className="border-b border-slate-200 px-3 py-2">x{index + 1}</td>
                              <td className="border-b border-slate-200 px-3 py-2">{valor}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {tablas.length > 0 && (
                    <div className="rounded-3xl border border-slate-200 bg-white p-4">
                      <button
                        type="button"
                        onClick={() => setExpanded((prev) => !prev)}
                        className="w-full rounded-3xl border border-slate-300 bg-slate-100 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                      >
                        {expanded ? 'Ocultar tablas del Simplex' : 'Ver tablas del Simplex'}
                      </button>
                      {expanded && (
                        <div className="mt-4 space-y-4">
                          {tablas.map((tabla, index) => (
                            <div key={index} className="overflow-x-auto rounded-3xl bg-slate-950 p-4 text-slate-100">
                              <p className="mb-3 text-sm font-semibold">Iteración {index + 1}</p>
                              <pre className="whitespace-pre-wrap text-[0.85rem] leading-relaxed">{tabla}</pre>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

export default App;
