/**
 * Renderiza encabezado principal y contexto visual del solucionador.
 */
export default function Header() {
  return (
    <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
        Solver de Programación Lineal
      </span>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        Método Simplex
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-slate-600">
        Define el modelo y revisa resultados sin perder de vista la solución.
      </p>
    </header>
  );
}