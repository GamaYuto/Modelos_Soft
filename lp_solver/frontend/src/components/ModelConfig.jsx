import clsx from 'clsx';

/**
 * Gestiona selección de tipo, tamaño de modelo y método de resolución.
 */
export default function ModelConfig({ config, onChange, errors }) {
  const { tipo, numVariables, numRestricciones, metodo } = config;

  return (
    <section className="rounded-[1.75rem] bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Configuración del modelo</h2>
          <p className="mt-2 text-sm text-slate-500">Elige el tipo, la cantidad de variables y el método de solución.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-700">Tipo de problema</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {['max', 'min'].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => onChange('tipo', value)}
                className={clsx('rounded-full px-5 py-3 text-sm font-semibold transition', tipo === value ? 'bg-indigo-600 text-white shadow' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100')}
              >
                {value === 'max' ? 'Maximizar' : 'Minimizar'}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-700">Método</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {['simplex', 'grafico'].map((value) => {
              const isGraphic = value === 'grafico';
              const disabled = isGraphic && numVariables !== 2;
              return (
                <div key={value}>
                  <button
                    type="button"
                    disabled={disabled}
                    onClick={() => !disabled && onChange('metodo', value)}
                    className={clsx(
                      'rounded-full px-5 py-3 text-sm font-semibold transition',
                      disabled
                        ? 'cursor-not-allowed border border-slate-300 bg-slate-100 text-slate-400 opacity-50'
                        : metodo === value
                        ? 'bg-indigo-600 text-white shadow'
                        : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100',
                    )}
                  >
                    {value === 'simplex' ? 'Simplex' : 'Gráfico'}
                  </button>
                  {disabled && <p className="mt-1 text-xs text-slate-500">Solo con 2 variables</p>}
                </div>
              );
            })}
          </div>
          {errors?.metodo && <p className="mt-3 text-sm text-rose-600">{errors.metodo}</p>}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <span className="text-sm font-semibold text-slate-700">Variables</span>
          <input
            type="number"
            min="2"
            max="4"
            value={numVariables}
            onChange={(event) => onChange('numVariables', Number(event.target.value))}
            className="mt-4 w-full rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500"
          />
          {errors?.numVariables && <p className="mt-2 text-sm text-rose-600">{errors.numVariables}</p>}
        </label>

        <label className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <span className="text-sm font-semibold text-slate-700">Restricciones</span>
          <input
            type="number"
            min="2"
            max="4"
            value={numRestricciones}
            onChange={(event) => onChange('numRestricciones', Number(event.target.value))}
            className="mt-4 w-full rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500"
          />
          {errors?.numRestricciones && <p className="mt-2 text-sm text-rose-600">{errors.numRestricciones}</p>}
        </label>
      </div>
    </section>
  );
}