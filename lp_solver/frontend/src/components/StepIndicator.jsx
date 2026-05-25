import clsx from 'clsx';
import { CheckCircle2 } from 'lucide-react';

const STEPS = [
  { value: 1, label: 'Configuración' },
  { value: 2, label: 'Objetivo' },
  { value: 3, label: 'Restricciones' },
  { value: 4, label: 'Resolver' },
];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        {STEPS.map((step, index) => {
          const isCompleted = currentStep > step.value;
          const isActive = currentStep === step.value;
          const isNext = currentStep < step.value;

          return (
            <div key={step.value} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={clsx(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full font-semibold transition-all',
                    isCompleted
                      ? 'bg-emerald-100 text-emerald-700'
                      : isActive
                      ? 'border-2 border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-2 border-slate-200 bg-slate-100 text-slate-500',
                  )}
                >
                  {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : step.value}
                </div>
                <p className={clsx('mt-2 text-xs font-semibold', isActive ? 'text-slate-900' : 'text-slate-600')}>
                  {step.label}
                </p>
              </div>
              {index < STEPS.length - 1 && (
                <div className={clsx('mx-1 flex-1 border-t-2 transition-all', isCompleted || isActive ? 'border-indigo-500' : 'border-slate-200')} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}