import { Sparkles } from 'lucide-react';

export default function EjemplosBotones({ examples, onSelect }) {
  return (
    <section className="rounded-[1.75rem] bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Ejemplos rápidos</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Carga casos de uso comunes</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          <Sparkles className="h-4 w-4" />
          Rellena y resuelve
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {examples.map((example) => (
          <button
            key={example.name}
            type="button"
            onClick={() => onSelect(example)}
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-left text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100"
          >
            {example.name}
          </button>
        ))}
      </div>
    </section>
  );
}
