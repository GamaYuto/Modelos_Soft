import clsx from 'clsx';
import { Trash2 } from 'lucide-react';

/**
 * Representa una fila editable de restricción con coeficientes y operador.
 */
export default function RestriccionCard({
  index,
  restriccion,
  numVariables,
  onChange,
  onRemove,
  disableRemove,
}) {
  return (
    <article className="rounded-3xl bg-slate-50 p-4 shadow-sm border border-slate-200">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Restricción {index + 1}</p>
          <p className="text-xs text-slate-500">Coeficientes, sentido y lado derecho.</p>
        </div>
        <button
          type="button"
          disabled={disableRemove}
          onClick={() => onRemove(index)}
          className={clsx(
            'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
            disableRemove
              ? 'cursor-not-allowed bg-slate-200 text-slate-500'
              : 'bg-rose-600 text-white hover:bg-rose-500',
          )}
        >
          <Trash2 className="h-4 w-4" />
          Eliminar
        </button>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-700">Coeficientes</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {restriccion.coeficientes.map((valor, coefIndex) => (
              <label key={coefIndex} className="flex flex-col gap-2">
                <span className="text-xs font-medium text-slate-600">x{coefIndex + 1}</span>
                <input
                  type="number"
                  step="any"
                  value={valor}
                  onChange={(event) => onChange(index, 'coef', event.target.value, coefIndex)}
                  className="rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">Sentido</label>
          <select
            value={restriccion.sentido}
            onChange={(event) => onChange(index, 'sentido', event.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500"
          >
            <option value="<=">≤</option>
            <option value=">=">≥</option>
            <option value="=">=</option>
          </select>

          <label className="block text-sm font-medium text-slate-700">Lado derecho</label>
          <input
            type="number"
            step="any"
            value={restriccion.lado_derecho}
            onChange={(event) => onChange(index, 'lado_derecho', event.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500"
          />
        </div>
      </div>
    </article>
  );
}
