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

function normalizeRow(row) {
  if (Array.isArray(row)) return row;
  if (row && typeof row === 'object') return Object.values(row);
  return [row];
}

function normalizeHeadersFromRow(row) {
  if (Array.isArray(row)) return row;
  if (row && typeof row === 'object') return Object.keys(row);
  return [];
}

function normalizeTable(iteration) {
  const rawHeaders = iteration?.headers || iteration?.columnas || iteration?.columns || [];
  const rawRows = iteration?.rows || iteration?.tabla || iteration?.table || [];

  let headers = Array.isArray(rawHeaders) ? rawHeaders : [];
  let rowsSource = Array.isArray(rawRows) ? rawRows : [];

  if (!headers.length && rowsSource.length > 0) {
    headers = normalizeHeadersFromRow(rowsSource[0]);
    rowsSource = rowsSource.slice(1);
  }

  return {
    headers: headers.map((cell) => String(cell ?? '-')),
    rows: rowsSource.map(normalizeRow),
  };
}

export default function SimplexIterations({ iterations, iteraciones, status }) {
  /**
   * Renderiza acordeones de iteraciones simplex y abre la tabla final óptima.
   */
  const normalizedIterations = Array.isArray(iterations)
    ? iterations
    : Array.isArray(iteraciones)
    ? iteraciones
    : [];
  const [openIndex, setOpenIndex] = useState(
    normalizedIterations.length > 0 ? normalizedIterations.length - 1 : null,
  );

  useEffect(() => {
    if (normalizedIterations.length === 0) {
      setOpenIndex(null);
      return;
    }

    const lastDescription = normalizedIterations[normalizedIterations.length - 1]?.descripcion || '';
    const hasOptimalResult = status === 'optimal' || /optimi|optima|optimo|óptim/i.test(lastDescription);
    setOpenIndex(hasOptimalResult ? normalizedIterations.length - 1 : normalizedIterations.length - 1);
  }, [normalizedIterations, status]);

  if (normalizedIterations.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
        Sin iteraciones disponibles.
      </div>
    );
  }

  return (
    <section className="space-y-3">
      <div className="max-h-[420px] space-y-3 overflow-y-auto pr-2">
        {normalizedIterations.map((iteration, index) => {
            const isOpen = openIndex === index;
            const entering = formatMetaValue(getFirstAvailableValue(iteration, ENTERING_KEYS));
            const leaving = formatMetaValue(getFirstAvailableValue(iteration, LEAVING_KEYS));
            const { headers, rows } = normalizeTable(iteration);
            const title = iteration?.descripcion || iteration?.description || `Iteración ${index + 1}`;

            return (
              <article key={index} className="rounded-2xl border border-slate-700/40 bg-slate-900 text-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition hover:bg-slate-800/80"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-sm font-semibold text-blue-300">Iteración {index + 1}</p>
                    <p className="mt-1 truncate text-sm text-slate-200">{title}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                      {entering && <span className="text-emerald-400">→ {entering}</span>}
                      {leaving && <span className="text-amber-400">← {leaving}</span>}
                    </div>
                  </div>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-300">
                    {isOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-700/70">
                    <div className="overflow-x-auto p-4">
                      <table className="min-w-full font-mono text-xs text-slate-200">
                        {headers.length > 0 && (
                          <thead>
                            <tr className="border-b border-slate-700/70 bg-slate-800/80 text-slate-100">
                              {headers.map((header, cellIndex) => (
                                <th key={cellIndex} className="px-3 py-2 text-right font-semibold first:text-left">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                        )}
                        <tbody>
                          {rows.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className={rowIndex % 2 === 0 ? 'border-b border-slate-800 bg-slate-950/70' : 'border-b border-slate-800 bg-slate-900/50'}
                            >
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-3 py-2 text-right first:text-left">
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
              </article>
            );
          })}
      </div>
    </section>
  );
}