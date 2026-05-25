import { useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import GraphicalPlot from './GraphicalPlot.jsx';

const STATUS_MAP = {
  optimal: {
    label: 'Óptimo',
    badge: 'bg-emerald-100 text-emerald-800',
    icon: CheckCircle2,
  },
  infeasible: {
    label: 'Infactible',
    badge: 'bg-rose-100 text-rose-800',
    icon: XCircle,
  },
  unbounded: {
    label: 'No acotado',
    badge: 'bg-orange-100 text-orange-800',
    icon: AlertTriangle,
  },
};

function formatVariableLine(index, value) {
  const formatted = typeof value === 'number' ? value.toFixed(2) : value;
  return `x${index + 1} = ${formatted}`;
}

export default function ResultsPanel({ result }) {
  const [activeTab, setActiveTab] = useState('resumen');

  if (!result) {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-xs text-slate-500">Aún no hay solución. Completa y resuelve el modelo.</p>
      </section>
    );
  }

  const statusKey = result.status || 'optimal';
  const config = STATUS_MAP[statusKey] ?? STATUS_MAP.optimal;
  const Icon = config.icon;
  const hasMultiple = result.multiple_solutions || /múltiples/i.test(result.conclusion || '');
  const isOptimal = statusKey === 'optimal';

  const variables = result.variables_opt ?? [];
  
  // Normalizar datos de gráfica
  const graphData = result.graph || result.grafico || result.graph_data || null;
  const method = result.method || result.metodo || 'simplex';
  const isGraphicalMethod = method === 'grafico' || method === 'graphical';
  const hasIterations = result.iteraciones && result.iteraciones.length > 0;

  // Verificar si hay contenido de modelo
  const hasObjective = result.objetivo && result.objetivo.some(c => c !== 0 && c !== '0');
  const hasConstraints = result.restricciones && result.restricciones.length > 0;

  // Determinar qué tabs mostrar (dinámico)
  const tabs = [
    { id: 'resumen', label: 'Resumen', icon: '📋' },
    ...(graphData && isGraphicalMethod ? [{ id: 'grafica', label: 'Gráfica', icon: '📊' }] : []),
    ...(hasObjective || hasConstraints ? [{ id: 'modelo', label: 'Modelo', icon: '⚙️' }] : []),
    ...(hasIterations ? [{ id: 'iteraciones', label: 'Iteraciones', icon: '🔁' }] : []),
  ];

  // Si el tab activo ya no existe, volver a Resumen
  if (!tabs.find(t => t.id === activeTab)) {
    setActiveTab('resumen');
  }

  return (
    <aside className="xl:sticky xl:top-8 self-start w-full">
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between gap-3">
              <span className={clsx('inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg', config.badge)}>
                <Icon className="h-6 w-6" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">{config.label}</p>
            </div>
            
            {/* Z = valor muy prominente */}
            <div className="mt-6 mb-2">
              <p className="text-sm font-medium text-slate-400">Valor óptimo</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">Z =</span>
                <span className="font-mono text-6xl font-black tracking-tight text-white">
                  {result.valor_optimo !== null && result.valor_optimo !== undefined ? result.valor_optimo.toFixed(0) : 'N/A'}
                </span>
              </div>
            </div>

            {/* Variables óptimas debajo */}
            <div className="mt-5 space-y-1 font-mono text-sm">
              {variables.map((valor, index) => (
                <p key={index} className="text-slate-300">
                  x<sub className="text-xs">{index + 1}</sub>
                  <span className="mx-2 text-slate-500">=</span>
                  <span className="font-semibold text-emerald-300">{typeof valor === 'number' ? valor.toFixed(2) : valor}</span>
                </p>
              ))}
            </div>

            {hasMultiple && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-500/20 px-3 py-2 text-xs font-semibold text-amber-200">
                <Sparkles className="h-3 w-3" /> Múltiples soluciones
              </div>
            )}
          </div>
        </div>

        {/* Sistema de tabs */}
        <div className="border-b border-slate-200 bg-white">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  'flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition',
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                )}
              >
                <span className="text-base">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido del tab activo - flujo natural sin restricciones */}
        <div className="p-4">
          {/* TAB: RESUMEN */}
          {activeTab === 'resumen' && (
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">Información del problema</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-600">Tipo</p>
                    <p className="mt-1 font-mono font-semibold text-slate-900">{method === 'grafico' || method === 'graphical' ? 'Gráfico' : 'Simplex'}</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-600">Estado</p>
                    <p className="mt-1 font-semibold text-slate-900">{config.label}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">Conclusión</p>
                <p className="rounded-lg bg-blue-50 p-3 text-sm leading-relaxed text-slate-700">
                  {statusKey === 'optimal'
                    ? `Solución óptima${hasMultiple ? ' múltiple' : ' única'} encontrada. El modelo está correctamente formulado y acotado.`
                    : statusKey === 'infeasible'
                    ? 'No existe región factible. Revisa las restricciones: pueden ser contradictorias.'
                    : 'Problema no acotado. La solución óptima tiende a infinito.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB: GRÁFICA */}
          {activeTab === 'grafica' && graphData && isGraphicalMethod && (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">Visualización 2D de la región factible</p>
              <GraphicalPlot graph={graphData} solution={result?.solucion} />
            </div>
          )}

          {/* TAB: MODELO */}
          {activeTab === 'modelo' && (hasObjective || hasConstraints) && (
            <div className="space-y-4">
              {hasObjective && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Función objetivo</p>
                  <p className="rounded-lg bg-slate-50 p-3 font-mono text-sm text-slate-900">
                    {result.objetivo ? result.objetivo.map((coef, i) => `${coef}x${i + 1}`).join(' + ') : 'N/A'}
                  </p>
                </div>
              )}

              {hasConstraints && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Restricciones</p>
                  <div className="space-y-1">
                    {result.restricciones.map((restriccion, idx) => (
                      <p key={idx} className="rounded-lg bg-slate-50 p-2 font-mono text-sm text-slate-900">
                        {restriccion.coeficientes?.map((coef, i) => `${coef}x${i + 1}`).join(' + ') || `R${idx + 1}`}
                        <span className="mx-2 text-slate-500">{restriccion.sentido || '='}</span>
                        {restriccion.lado_derecho}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: ITERACIONES */}
          {activeTab === 'iteraciones' && hasIterations && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">Historial del algoritmo Simplex</p>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {result.iteraciones.map((iter, idx) => (
                  <div key={idx} className="rounded-lg bg-slate-50 p-3 text-xs font-mono text-slate-900">
                    <p className="font-semibold text-slate-700">Iteración {idx}</p>
                    <p className="mt-1 text-slate-600">{JSON.stringify(iter).substring(0, 100)}...</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}