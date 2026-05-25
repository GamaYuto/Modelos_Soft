import { formatModelPreview } from '../utils/modelFormatters';

export default function ModelPreview({ config, objective, restrictions }) {
  const preview = formatModelPreview(config, objective, restrictions);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-sm font-semibold text-slate-900">Modelo</h3>
      <div className="mt-3 space-y-3 rounded-lg border border-slate-100 bg-slate-50 p-4 font-mono text-xs text-slate-800">
        <div>
          <p className="font-semibold text-slate-900">{preview.objectiveLine}</p>
        </div>
        <div className="border-t border-slate-200 pt-3">
          <p className="mb-2 font-semibold text-slate-900">s.a.</p>
          <div className="space-y-1.5 text-slate-700">
            {preview.restrictionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-200 pt-3 text-slate-700">
          <p>{preview.nonNegativity}</p>
        </div>
      </div>
    </section>
  );
}