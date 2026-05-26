import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ENTERING_KEYS = [
  'variable_entrante',
  'variableEntrante',
  'entrante',
  'entering_variable',
  'enteringVariable',
];

const LEAVING_KEYS = [
  'variable_saliente',
  'variableSaliente',
  'saliente',
  'leaving_variable',
  'leavingVariable',
];

function getFirstAvailableValue(source, keys) {
  /**
   * Busca el primer valor disponible entre varias claves posibles.
   */
  if (!source || typeof source !== 'object') return null;

  for (const key of keys) {
    if (source[key] !== undefined && source[key] !== null && source[key] !== '') {
      return source[key];
    }
  }

  return null;
}

function formatMetaValue(value) {
  /**
   * Normaliza metadatos de iteración a texto renderizable.
   */
  if (typeof value === 'number') return Number.isFinite(value) ? value.toString() : null;
  if (typeof value === 'string') return value.trim() || null;
  return null;
}

export default function SimplexIterations({ iteraciones, status }) {
  /**
   * Renderiza acordeones de iteraciones simplex y abre la tabla final óptima.
   */
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    if (!Array.isArray(iteraciones) || iteraciones.length === 0) {
      setOpenIndex(-1);
      return;
    }

    const lastDescription = iteraciones[iteraciones.length - 1]?.descripcion || '';
    const hasOptimalResult = status === 'optimal' || /optimi|optima|optimo|óptim/i.test(lastDescription);
    setOpenIndex(hasOptimalResult ? iteraciones.length - 1 : -1);
  }, [iteraciones, status]);

  if (!Array.isArray(iteraciones) || iteraciones.length === 0) {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-xs text-slate-500">Sin iteraciones disponibles.</p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl">
      <div className="max-h-[420px] overflow-y-auto">
        <div className="space-y-2 p-4">
          {iteraciones.map((iteration, index) => {
            const isOpen = openIndex === index;
            const entering = formatMetaValue(getFirstAvailableValue(iteration, ENTERING_KEYS));
            const leaving = formatMetaValue(getFirstAvailableValue(iteration, LEAVING_KEYS));

            return (
              <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur">
                <button
                  type="button"
                  onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                  className="flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left transition hover:bg-slate-800/80"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs font-semibold text-blue-300">Iter {index + 1}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs">
                      {entering && <span className="text-emerald-400">→ {entering}</span>}
                      {leaving && <span className="text-amber-400">← {leaving}</span>}
                    </div>
                  </div>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded border border-slate-600 bg-slate-700/50 text-slate-300">
                    {isOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-700 px-3.5 pb-3 pt-2.5">
                    {iteration.descripcion && (
                      <p className="mb-2 font-mono text-xs text-slate-400">{iteration.descripcion}</p>
                    )}
                    <div className="overflow-x-auto rounded-lg border border-slate-700 bg-slate-950 font-mono text-xs text-slate-300">
                      <table className="min-w-full">
                        <tbody>
                          {Array.isArray(iteration.tabla) &&
                            iteration.tabla.map((row, rowIndex) => (
                              <tr
                                key={rowIndex}
                                className={rowIndex === 0 ? 'border-b border-slate-700 bg-slate-900/80 text-slate-200' : rowIndex % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/40'}
                              >
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex} className="border-r border-slate-700/50 px-2 py-1 text-right last:border-r-0">
                                    {cell === null ? '-' : typeof cell === 'number' ? cell.toFixed(2) : String(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}