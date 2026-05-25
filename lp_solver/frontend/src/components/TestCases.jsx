export default function TestCases({ cases, onSelect }) {
  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Casos de prueba</h2>
          <p className="mt-1 text-xs text-slate-500">Carga ejemplos para completar y resolver rápido.</p>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {cases.map((testCase) => (
          <button
            key={testCase.id}
            type="button"
            onClick={() => onSelect(testCase)}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-left text-xs font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100"
          >
            {testCase.name}
          </button>
        ))}
      </div>
    </section>
  );
}