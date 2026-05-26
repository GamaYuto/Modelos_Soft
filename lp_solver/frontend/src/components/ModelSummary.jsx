import { CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * Resume el modelo final (objetivo, restricciones y método) previo al envío.
 */
export default function ModelSummary({ tipo, numVariables, objetivo, restricciones, metodo }) {
  // Validar que el modelo sea válido
  const hasValidObjetivo = objetivo && objetivo.some(c => c !== '0' && c !== 0 && c !== '');
  const hasValidRestricciones = restricciones && restricciones.length > 0;
  const isValid = hasValidObjetivo && hasValidRestricciones;

  const methodLabel = metodo === 'grafico' || metodo === 'graphical' ? 'Gráfico (2D)' : 'Simplex';
  
  // Contar restricciones por tipo
  const restriccionesPorTipo = {
    '<=': restricciones?.filter(r => r.sentido === '<=').length || 0,
    '>=': restricciones?.filter(r => r.sentido === '>=').length || 0,
    '=': restricciones?.filter(r => r.sentido === '=').length || 0,
  };

  return (
    <section className="rounded-[1.75rem] bg-white p-6 shadow-lg border border-slate-200">
      <div className="flex items-center gap-3 mb-4">
        {isValid ? (
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-emerald-100">
            <CheckCircle2 className="h-5 w-5 text-emerald-700" />
          </div>
        ) : (
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-amber-100">
            <AlertCircle className="h-5 w-5 text-amber-700" />
          </div>
        )}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Resumen</p>
          <h2 className="text-lg font-semibold text-slate-900">Configuración del modelo</h2>
        </div>
      </div>

      {/* Grid de información */}
      <div className="grid gap-3">
        {/* Tipo */}
        <div className="rounded-[1rem] border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600">Tipo de problema</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-mono font-bold text-slate-900 capitalize text-lg">{tipo}</p>
            <span className="text-2xl">{tipo === 'max' ? '📈' : '📉'}</span>
          </div>
        </div>

        {/* Variables */}
        <div className="rounded-[1rem] border border-slate-200 bg-gradient-to-br from-cyan-50 to-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600">Variables</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-mono font-bold text-slate-900 text-lg">{numVariables}</p>
            <p className="text-xs text-slate-600">
              {Array.from({ length: numVariables }, (_, i) => `x${i + 1}`).join(', ')}
            </p>
          </div>
        </div>

        {/* Restricciones */}
        <div className="rounded-[1rem] border border-slate-200 bg-gradient-to-br from-purple-50 to-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600">Restricciones</p>
          <div className="mt-2 space-y-1">
            <p className="font-mono font-bold text-slate-900 text-lg">{restricciones?.length || 0}</p>
            <p className="text-xs text-slate-600">
              {Object.entries(restriccionesPorTipo)
                .filter(([_, count]) => count > 0)
                .map(([op, count]) => `${count}× ${op}`)
                .join(' · ')}
            </p>
          </div>
        </div>

        {/* Método */}
        <div className="rounded-[1rem] border border-slate-200 bg-gradient-to-br from-indigo-50 to-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-600">Método de resolución</p>
          <p className="mt-2 font-mono font-bold text-slate-900 text-lg">{methodLabel}</p>
        </div>

        {/* Estado de validación */}
        <div
          className={`rounded-[1rem] border p-3 transition ${
            isValid
              ? 'border-emerald-200 bg-emerald-50'
              : 'border-amber-200 bg-amber-50'
          }`}
        >
          <div className="flex items-center gap-2">
            {isValid ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                <p className="text-xs font-semibold text-emerald-900">✓ Modelo válido</p>
              </>
            ) : (
              <>
                <AlertCircle className="h-4 w-4 text-amber-700 flex-shrink-0" />
                <p className="text-xs font-semibold text-amber-900">⚠ Completa el modelo</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
