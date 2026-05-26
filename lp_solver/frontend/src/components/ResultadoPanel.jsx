import clsx from 'clsx';
import { CheckCircle2, AlertTriangle, XCircle, Sparkles, Info, ChevronDown, ChevronUp } from 'lucide-react';

const STATUS_CONFIG = {
  optimal: {
    label: 'Solución Óptima',
    badge: 'bg-emerald-100 text-emerald-700',
    icon: CheckCircle2,
  },
  infeasible: {
    label: 'Infactible',
    badge: 'bg-rose-100 text-rose-700',
    icon: XCircle,
  },
  unbounded: {
    label: 'No Acotado',
    badge: 'bg-orange-100 text-orange-700',
    icon: AlertTriangle,
  },
  iteracion_maxima: {
    label: 'Límite de Iteraciones',
    badge: 'bg-amber-100 text-amber-700',
    icon: AlertTriangle,
  },
};

/**
 * Normaliza el formato numérico para tablas y métricas del solver.
 */
function formatearValor(valor) {
  if (valor === null || valor === undefined) return 'N/A';
  if (typeof valor === 'number') return valor.toFixed(2);
  return String(valor);
}

/**
 * Renderiza una tabla simplex serializada por el backend.
 */
function renderTabla(tabla) {
  if (!Array.isArray(tabla) || tabla.length === 0) return null;

  const [headers, ...rows] = tabla;

  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <table className="min-w-full text-left text-sm text-slate-700">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border-b border-slate-200 px-3 py-2 font-semibold text-slate-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-100'}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border-b border-slate-200 px-3 py-2 align-top">
                  {cell === null ? '-' : typeof cell === 'number' ? cell.toFixed(2) : String(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Presenta resumen, tablas e iteraciones de resultados del modelo.
 */
export default function ResultadoPanel({ result, loading, expanded, onToggle }) {
  if (loading) {
    return (
      <section className="rounded-[1.75rem] bg-white p-6 shadow-lg">
        <div className="animate-pulse">
          <div className="h-8 w-40 rounded-2xl bg-slate-200" />
          <div className="mt-6 space-y-4">
            <div className="h-24 rounded-3xl bg-slate-200" />
            <div className="h-24 rounded-3xl bg-slate-200" />
          </div>
        </div>
      </section>
    );
  }

  if (!result) {
    return (
      <section className="rounded-[1.75rem] bg-white p-6 shadow-lg">
        <div className="text-sm text-slate-500">
          No hay resultados todavía. Completa el formulario y presiona Resolver.
        </div>
      </section>
    );
  }

  const status = result.status || 'optimal';
  const config = STATUS_CONFIG[status] ?? {
    label: 'Resultado',
    badge: 'bg-slate-100 text-slate-700',
    icon: Info,
  };
  const StatusIcon = config.icon;
  const iteraciones = result.iteraciones || [];

  return (
    <section className="space-y-6 rounded-[1.75rem] bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className={clsx('inline-flex rounded-full px-4 py-2 text-sm font-semibold', config.badge)}>
              {config.label}
            </span>
            <StatusIcon className="h-5 w-5 text-slate-400" />
          </div>
          {result.multiple_solutions && (
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">
              <Sparkles className="h-4 w-4" />
              Múltiples soluciones
            </div>
          )}
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-700">Valor objetivo</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{formatearValor(result.valor_optimo)}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-700">Conclusión</p>
            <p className="mt-2 text-sm text-slate-600">{result.conclusion}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-700">Variables óptimas</p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-700">
                <thead>
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 font-semibold text-slate-900">Variable</th>
                    <th className="border-b border-slate-200 px-3 py-2 font-semibold text-slate-900">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {result.variables_opt.map((valor, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-100'}>
                      <td className="border-b border-slate-200 px-3 py-2">x{index + 1}</td>
                      <td className="border-b border-slate-200 px-3 py-2">{formatearValor(valor)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {iteraciones.length > 0 && (
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4">
          <button
            type="button"
            onClick={onToggle}
            className="flex w-full items-center justify-between rounded-3xl border border-slate-300 bg-slate-100 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            <span>{expanded ? 'Ocultar iteraciones del Simplex' : 'Ver iteraciones del Simplex'}</span>
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expanded && (
            <div className="mt-4 space-y-4">
              {iteraciones.map((iteracion, index) => (
                <div key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-900">{iteracion.descripcion}</p>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Iteración {index + 1}
                    </span>
                  </div>
                  {renderTabla(iteracion.tabla)}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
