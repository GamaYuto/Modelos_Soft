import { useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import GraphicalPlot from './GraphicalPlot.jsx';
import SimplexIterations from './SimplexIterations.jsx';

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

/**
 * Muestra estado, solución óptima y salidas relevantes del backend.
 */
export default function ResultsPanel({ result }) {
  const [activeTab, setActiveTab] = useState('summary');

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
  const hasFiniteOptimalSolution = statusKey === 'optimal' && result.valor_optimo !== null && result.valor_optimo !== undefined;

  const variables = result.variables_opt ?? [];
  const simplexIterations = result?.iteraciones || result?.iterations || [];
  
  // Normalizar datos de gráfica
  const graphData = result.graph || result.grafico || result.graph_data || null;
  const vertexValues = graphData?.vertexValues || [];
  const activeConstraints = graphData?.activeConstraints || [];
  const objectiveFunction = graphData?.objectiveFunction || null;
  const method = result.method || result.metodo || 'simplex';
  const isGraphicalMethod = method === 'grafico' || method === 'graphical';
  const hasIterations = simplexIterations.length > 0;

  // Verificar si hay contenido de modelo
  const hasObjective = result.objetivo && result.objetivo.some(c => c !== 0 && c !== '0');
  const hasConstraints = result.restricciones && result.restricciones.length > 0;

  // Determinar qué tabs mostrar (dinámico)
  const tabs = [
    { id: 'summary', label: 'Resumen', icon: '📋' },
    ...(graphData && isGraphicalMethod ? [{ id: 'graph', label: 'Gráfica', icon: '📊' }] : []),
    ...(hasObjective || hasConstraints ? [{ id: 'model', label: 'Modelo', icon: '⚙️' }] : []),
    ...(hasIterations ? [{ id: 'iterations', label: 'Iteraciones', icon: '🔁' }] : []),
  ];

  // Si el tab activo ya no existe, volver a Resumen
  if (!tabs.find(t => t.id === activeTab)) {
    setActiveTab('summary');
  }

  return (
    <aside className="self-start w-full xl:sticky xl:top-8">
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
                  <span className="font-semibold text-emerald-300">
                    {hasFiniteOptimalSolution
                      ? typeof valor === 'number'
                        ? valor.toFixed(2)
                        : valor
                      : 'N/A'}
                  </span>
                </p>
              ))}
            </div>

            {!hasFiniteOptimalSolution && (
              <p className="mt-3 rounded-lg border border-amber-400/20 bg-white/5 px-3 py-2 text-xs leading-relaxed text-slate-300">
                Estos valores corresponden al vector que devuelve el solver para mantener la estructura de la respuesta,
                pero no representan una solución óptima real cuando el problema es {statusKey === 'unbounded' ? 'no acotado' : 'infactible'}.
              </p>
            )}

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
        <div>
          {/* TAB: RESUMEN */}
          {activeTab === 'summary' && (
            <div className="space-y-4 p-4">
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
          {activeTab === 'graph' && graphData && isGraphicalMethod && (
            <div className="space-y-4 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-600">Visualización 2D de la región factible</p>
              <GraphicalPlot graph={graphData} solution={result?.solucion} />

              <div className="grid gap-3 lg:grid-cols-2">
                {objectiveFunction && (
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Función objetivo</p>
                    <p className="mt-2 font-mono text-sm font-semibold text-emerald-900">
                      {objectiveFunction.type === 'min' ? 'Min' : 'Max'} Z = {objectiveFunction.coefficients?.[0] ?? 0}x1 + {objectiveFunction.coefficients?.[1] ?? 0}x2
                    </p>
                  </div>
                )}

                {activeConstraints.length > 0 && (
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Restricciones activas</p>
                    <div className="mt-2 space-y-1 text-sm text-slate-700">
                      {activeConstraints.map((constraint) => (
                        <p key={constraint.index} className="font-mono">
                          R{Number(constraint.index) + 1}: {constraint.lhs} = {constraint.rhs}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {vertexValues.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">Evaluación de vértices factibles</p>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50">
                    <table className="min-w-full text-sm">
                      <thead className="bg-slate-100 text-left text-slate-700">
                        <tr>
                          <th className="px-3 py-2 font-semibold">Vértice</th>
                          <th className="px-3 py-2 font-semibold">Z</th>
                          <th className="px-3 py-2 font-semibold">Rol</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vertexValues.map((vertex) => {
                          const isOptimalVertex = Math.abs(vertex.x - (graphData?.optimalPoint?.x ?? 0)) < 0.01
                            && Math.abs(vertex.y - (graphData?.optimalPoint?.y ?? 0)) < 0.01;

                          return (
                            <tr key={`${vertex.x}-${vertex.y}`} className="border-t border-slate-200 text-slate-700">
                              <td className="px-3 py-2 font-mono">({vertex.x}, {vertex.y})</td>
                              <td className="px-3 py-2 font-mono font-semibold">{vertex.z}</td>
                              <td className="px-3 py-2">
                                {isOptimalVertex ? (
                                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800">Óptimo</span>
                                ) : (
                                  <span className="text-xs text-slate-500">Factible</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB: MODELO */}
          {activeTab === 'model' && (hasObjective || hasConstraints) && (
            <div className="space-y-4 p-4">
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
          {activeTab === 'iterations' && (
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">Historial del algoritmo Simplex</p>
              <SimplexIterations iterations={simplexIterations} status={statusKey} />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}