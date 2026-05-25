export default function RestriccionesList({
  restricciones,
  numVariables,
  onChange,
  onAdd,
  onRemove,
}) {
  return (
    <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Restricciones</h2>
          <p className="text-sm text-slate-500">Máximo 4 restricciones con el mismo número de variables.</p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          disabled={restricciones.length >= 4}
          className="rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          + Restricción
        </button>
      </div>

      <div className="space-y-4">
        {restricciones.map((restriccion, index) => (
          <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm font-medium text-slate-700">Restricción {index + 1}</div>
              <button
                type="button"
                onClick={() => onRemove(index)}
                disabled={restricciones.length <= 1}
                className="rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Eliminar
              </button>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Coeficientes</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {restriccion.coeficientes.map((valor, coefIndex) => (
                    <label key={coefIndex} className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-slate-600">x{coefIndex + 1}</span>
                      <input
                        type="number"
                        step="any"
                        value={valor}
                        onChange={(event) =>
                          onChange(index, 'coef', event.target.value, coefIndex)
                        }
                        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500"
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
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                >
                  <option value="<=">&le;</option>
                  <option value=">=">&ge;</option>
                  <option value="=">=</option>
                </select>

                <label className="block text-sm font-medium text-slate-700">Lado derecho</label>
                <input
                  type="number"
                  step="any"
                  value={restriccion.lado_derecho}
                  onChange={(event) => onChange(index, 'lado_derecho', event.target.value)}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
