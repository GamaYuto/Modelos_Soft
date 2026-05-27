import { formatObjective } from '../utils/modelFormatters';

/**
 * Captura y valida coeficientes de la función objetivo por variable.
 */
export default function ObjectiveForm({ objective, numVariables, onChange, errors, tipo }) {
  return (
    <section className="rounded-[1.75rem] bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Función objetivo</h2>
          <p className="mt-2 text-sm text-slate-500">Ingresa coeficientes claros para cada variable.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {Array.from({ length: numVariables }, (_, index) => (
          <label key={index} className="flex flex-col gap-2 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
            <span className="text-sm font-medium text-slate-700">x{index + 1}</span>
            <input
              type="text"
              inputMode="decimal"
              step="any"
              value={objective[index] ?? '0'}
              onChange={(event) => onChange(index, event.target.value)}
              className="rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500"
            />
            {errors?.[`objective_${index}`] && <p className="text-sm text-rose-600">{errors[`objective_${index}`]}</p>}
          </label>
        ))}
      </div>

      {errors?.objective && <p className="mt-4 rounded-3xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{errors.objective}</p>}

      <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-semibold text-slate-700">Vista previa</p>
        <p className="mt-3 text-base font-semibold text-slate-900">{formatObjective(tipo, objective)}</p>
      </div>
    </section>
  );
}