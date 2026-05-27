import { formatRestriction } from '../utils/modelFormatters';

const OPERATORS = [
  { value: '<=', label: '≤' },
  { value: '>=', label: '≥' },
  { value: '=', label: '=' },
];

const TERM_SIGNS = [
  { value: '+', label: '+' },
  { value: '-', label: '-' },
];

function splitSignedCoefficient(value) {
  const rawValue = String(value ?? '').trim();

  if (!rawValue) {
    return { sign: '+', magnitude: '' };
  }

  if (rawValue === '-') {
    return { sign: '-', magnitude: '' };
  }

  const sign = rawValue.startsWith('-') ? '-' : '+';
  const magnitude = rawValue.replace(/^[+-]/, '');
  return { sign, magnitude };
}

function composeSignedCoefficient(sign, magnitude) {
  const normalizedMagnitude = String(magnitude ?? '').trim().replace(/^[+-]/, '');

  if (!normalizedMagnitude) {
    return sign === '-' ? '-' : '';
  }

  return sign === '-' ? `-${normalizedMagnitude}` : normalizedMagnitude;
}

/**
 * Renderiza y edita la matriz de restricciones con operadores y RHS.
 */
export default function RestrictionsTable({ restrictions, numVariables, onChange, errors }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Restricciones</h2>
          <p className="mt-1 text-xs text-slate-500">Matriz compacta de coeficientes</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {errors?.restrictions && (
          <div className="rounded-3xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {errors.restrictions}
          </div>
        )}
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50">
          <table className="min-w-full divide-y divide-slate-200 text-xs text-slate-700">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3 text-left">Restricción</th>
              {Array.from({ length: numVariables }, (_, index) => (
                <th key={index} className="px-4 py-3 text-left">x{index + 1}</th>
              ))}
              <th className="px-4 py-3 text-left">Operador</th>
              <th className="px-4 py-3 text-left">RHS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {restrictions.map((restriction, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-4 py-3 font-medium text-slate-900">{rowIndex + 1}</td>
                {restriction.coeficientes.slice(0, numVariables).map((value, coefIndex) => {
                  const { sign, magnitude } = splitSignedCoefficient(value);

                  return (
                  <td key={coefIndex} className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <select
                        value={sign}
                        onChange={(event) => onChange(rowIndex, 'coef', composeSignedCoefficient(event.target.value, magnitude), coefIndex)}
                        className="w-16 rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 outline-none transition focus:border-indigo-500"
                        aria-label={`Signo de x${coefIndex + 1} en restricción ${rowIndex + 1}`}
                      >
                        {TERM_SIGNS.map((termSign) => (
                          <option key={termSign.value} value={termSign.value}>
                            {termSign.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        step="any"
                        value={magnitude}
                        onChange={(event) => onChange(rowIndex, 'coef', composeSignedCoefficient(sign, event.target.value), coefIndex)}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-indigo-500"
                      />
                    </div>
                    {errors?.[`restriction_${rowIndex}_coef_${coefIndex}`] && (
                      <p className="mt-1 text-xs text-rose-600">{errors[`restriction_${rowIndex}_coef_${coefIndex}`]}</p>
                    )}
                  </td>
                )})}
                <td className="px-4 py-3">
                  <select
                    value={restriction.sentido}
                    onChange={(event) => onChange(rowIndex, 'sentido', event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-indigo-500"
                  >
                    {OPERATORS.map((operator) => (
                      <option key={operator.value} value={operator.value}>
                        {operator.label}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    step="any"
                    value={restriction.lado_derecho}
                    onChange={(event) => onChange(rowIndex, 'lado_derecho', event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-indigo-500"
                  />
                  {errors?.[`restriction_${rowIndex}_rhs`] && (
                    <p className="mt-1 text-xs text-rose-600">{errors[`restriction_${rowIndex}_rhs`]}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      <div className="mt-6 space-y-3">
        {restrictions.map((restriction, rowIndex) => (
          <div key={rowIndex} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-800">Vista previa {rowIndex + 1}</p>
            <p className="mt-2 text-sm text-slate-600">{formatRestriction(restriction.coeficientes.slice(0, numVariables), restriction.sentido, restriction.lado_derecho)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}