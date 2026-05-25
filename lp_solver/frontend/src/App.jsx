import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { solveLP } from './api';
import { validarFormulario } from './utils/validaciones';
import EjemplosBotones from './components/EjemplosBotones';
import ResultadoPanel from './components/ResultadoPanel';
import RestriccionCard from './components/RestriccionCard';

const VARIABLE_SUBSCRIPTS = ['₁', '₂', '₃', '₄'];
const DEFAULT_VARIABLES = 2;
const MAX_RESTRICCIONES = 4;

const EJEMPLOS_RAPIDOS = [
  {
    name: 'Max simple',
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
    name: 'Min simple',
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
    name: 'Múltiples sol.',
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

const crearRestriccionVacia = (numVariables) => ({
  coeficientes: Array.from({ length: numVariables }, () => '0'),
  sentido: '<=',
  lado_derecho: '0',
});

function App() {
  const [tipo, setTipo] = useState('max');
  const [numVariables, setNumVariables] = useState(DEFAULT_VARIABLES);
  const [objetivo, setObjetivo] = useState(Array(DEFAULT_VARIABLES).fill('0'));
  const [restricciones, setRestricciones] = useState([
    crearRestriccionVacia(DEFAULT_VARIABLES),
  ]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedExample, setSelectedExample] = useState(null);

  useEffect(() => {
    if (!selectedExample) return;

    const timer = window.setTimeout(async () => {
      try {
        await handleResolver();
      } finally {
        setSelectedExample(null);
      }
    }, 250);

    return () => window.clearTimeout(timer);
  }, [selectedExample]);

  const manejarTipo = (value) => {
    setTipo(value);
  };

  const manejarCambioVariables = (event) => {
    const next = Math.max(2, Math.min(4, Number(event.target.value)));
    setNumVariables(next);
    setObjetivo((prev) =>
      Array.from({ length: next }, (_, index) => prev[index] ?? '0'),
    );
    setRestricciones((prev) =>
      prev.map((restriccion) => ({
        ...restriccion,
        coeficientes: Array.from({ length: next }, (_, index) => restriccion.coeficientes[index] ?? '0'),
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
    if (restricciones.length >= MAX_RESTRICCIONES) {
      toast.error('Solo puedes agregar hasta 4 restricciones.');
      return;
    }
    setRestricciones((prev) => [...prev, crearRestriccionVacia(numVariables)]);
  };

  const eliminarRestriccion = (index) => {
    if (restricciones.length <= 1) {
      toast.error('Debe haber al menos una restricción.');
      return;
    }
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
    setExpanded(false);
    setSelectedExample(ejemplo);
  };

  const handleResolver = async () => {
    setLoading(true);
    setResult(null);
    setExpanded(false);

    try {
      const payload = validarFormulario(tipo, objetivo, restricciones);
      const data = await solveLP(payload);
      setResult(data);
      if (data.iteraciones?.length) {
        setExpanded(true);
      }
      return data;
    } catch (error) {
      const message =
        error.response?.data?.detail || error.message || 'Error de red al conectar con el backend.';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const manejarEnvio = async (event) => {
    event.preventDefault();
    try {
      await handleResolver();
    } catch (err) {
      // El error ya se muestra con toast
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Toaster position="top-right" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-700">+</span>
                Solución Simplex
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Solucionador de Programación Lineal
              </h1>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Ingresa los coeficientes de tu problema y recibe una solución clara, con estado, variables óptimas y iteraciones del Simplex.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-slate-700 shadow-inner">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Backend</p>
              <p className="mt-2 text-base font-semibold text-slate-900">http://localhost:8000</p>
              <p className="mt-2 text-sm text-slate-500">Asegúrate de que el backend esté en ejecución.</p>
            </div>
          </div>
        </header>

        <EjemplosBotones examples={EJEMPLOS_RAPIDOS} onSelect={cargarEjemplo} />

        <form onSubmit={manejarEnvio} className="mt-8 grid gap-8 xl:grid-cols-[1.35fr_0.95fr]">
          <div className="space-y-6">
            <section className="rounded-[1.75rem] bg-white p-6 shadow-lg">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Entrada</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Parámetros del problema</h2>
                  <p className="mt-2 text-sm text-slate-500">Configura el tipo de optimización, variables y la función objetivo.</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-medium text-slate-600">Tipo de problema</p>
                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={() => manejarTipo('max')}
                      className={`rounded-full px-5 py-3 text-sm font-semibold transition ${tipo === 'max' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100'}`}
                    >
                      Maximizar
                    </button>
                    <button
                      type="button"
                      onClick={() => manejarTipo('min')}
                      className={`rounded-full px-5 py-3 text-sm font-semibold transition ${tipo === 'min' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100'}`}
                    >
                      Minimizar
                    </button>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <label className="text-sm font-medium text-slate-600">Número de variables</label>
                  <input
                    type="number"
                    min="2"
                    max="4"
                    step="1"
                    value={numVariables}
                    onChange={manejarCambioVariables}
                    className="mt-4 w-full rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Función objetivo</h3>
                    <p className="text-sm text-slate-500">Ingresa un coeficiente para cada variable.</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700">Z =</span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {objetivo.map((valor, index) => (
                    <label key={index} className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-slate-700">x{VARIABLE_SUBSCRIPTS[index]}</span>
                      <input
                        type="number"
                        step="any"
                        value={valor}
                        onChange={(event) => manejarCambioObjetivo(index, event.target.value)}
                        className="rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[1.75rem] bg-white p-6 shadow-lg">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Restricciones</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Define la matriz de restricciones</h2>
                  <p className="mt-2 text-sm text-slate-500">Cada restricción debe tener el mismo número de coeficientes que variables.</p>
                </div>
                <button
                  type="button"
                  onClick={agregarRestriccion}
                  disabled={restricciones.length >= MAX_RESTRICCIONES}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  + Agregar restricción
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {restricciones.map((restriccion, index) => (
                  <RestriccionCard
                    key={index}
                    index={index}
                    restriccion={restriccion}
                    numVariables={numVariables}
                    onChange={manejarCambioRestriccion}
                    onRemove={eliminarRestriccion}
                    disableRemove={restricciones.length <= 1}
                  />
                ))}
              </div>
            </section>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-lg">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-sky-600 disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-300"
              >
                {loading ? (
                  <>
                    <svg className="mr-2 h-5 w-5 animate-spin text-white" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </svg>
                    Resolviendo...
                  </>
                ) : (
                  'Resolver'
                )}
              </button>
              <p className="mt-4 text-sm text-slate-500">
                El backend debe estar activo en <strong>http://localhost:8000</strong> para resolver el problema.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <ResultadoPanel
              result={result}
              loading={loading}
              expanded={expanded}
              onToggle={() => setExpanded((prev) => !prev)}
            />
          </aside>
        </form>
      </div>
    </div>
  );
}

export default App;
