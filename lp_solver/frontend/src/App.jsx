import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Header from './components/Header.jsx';
import StepIndicator from './components/StepIndicator.jsx';
import ModelConfig from './components/ModelConfig.jsx';
import ObjectiveForm from './components/ObjectiveForm.jsx';
import RestrictionsTable from './components/RestrictionsTable.jsx';
import ModelPreview from './components/ModelPreview.jsx';
import ModelSummary from './components/ModelSummary.jsx';
import ResultsPanel from './components/ResultsPanel.jsx';
import TestCases from './components/TestCases.jsx';
import { TEST_CASES } from './data/testCases.js';
import { solveLP } from './api.js';
import {
  buildSolverPayload,
  hasErrors,
  validateModelConfig,
  validateObjective,
  validateRestrictions,
} from './utils/validators.js';

const INITIAL_CONFIG = {
  tipo: 'max',
  numVariables: 2,
  numRestricciones: 2,
  metodo: 'simplex',
};

/**
 * Crea una restricción base según el número de variables del modelo.
 */
const buildEmptyRestriction = (numVariables) => ({
  coeficientes: Array.from({ length: numVariables }, () => '0'),
  sentido: '<=',
  lado_derecho: '0',
});

/**
 * Inicializa el vector objetivo con valores por defecto en cero.
 */
const buildEmptyObjective = (numVariables) => Array.from({ length: numVariables }, () => '0');

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState(INITIAL_CONFIG);
  const [objective, setObjective] = useState(buildEmptyObjective(INITIAL_CONFIG.numVariables));
  const [restrictions, setRestrictions] = useState(
    Array.from({ length: INITIAL_CONFIG.numRestricciones }, () => buildEmptyRestriction(INITIAL_CONFIG.numVariables)),
  );
  const [validationErrors, setValidationErrors] = useState({});
  const [backendError, setBackendError] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setObjective((prev) =>
      Array.from({ length: config.numVariables }, (_, index) => prev[index] ?? '0'),
    );
  }, [config.numVariables]);

  useEffect(() => {
    setRestrictions((prev) => {
      const next = prev.slice(0, config.numRestricciones);
      while (next.length < config.numRestricciones) {
        next.push(buildEmptyRestriction(config.numVariables));
      }
      return next.map((restriction) => ({
        ...restriction,
        coeficientes: Array.from({ length: config.numVariables }, (_, index) => restriction.coeficientes[index] ?? '0'),
      }));
    });
  }, [config.numRestricciones, config.numVariables]);

  useEffect(() => {
    setBackendError('');
    setValidationErrors({});
    setResult(null);
  }, [config, objective, restrictions]);

  /**
   * Actualiza campos de configuración global del modelo.
   */
  const handleConfigChange = (field, value) => {
    setConfig((prev) => ({ ...prev, [field]: value }));
  };

  /**
   * Actualiza el coeficiente objetivo de una variable específica.
   */
  const handleObjectiveChange = (index, value) => {
    setObjective((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  /**
   * Actualiza coeficientes u operador/rhs de una restricción puntual.
   */
  const handleRestrictionChange = (rowIndex, field, value, coefIndex = null) => {
    setRestrictions((prev) =>
      prev.map((restriction, index) => {
        if (index !== rowIndex) return restriction;
        if (field === 'coef') {
          const coeficientes = [...restriction.coeficientes];
          coeficientes[coefIndex] = value;
          return { ...restriction, coeficientes };
        }
        return { ...restriction, [field]: value };
      }),
    );
  };

  /**
   * Carga un caso de prueba en el formulario y limpia resultados previos.
   */
  const handleTestCaseSelect = (testCase) => {
    setConfig({
      tipo: testCase.tipo,
      numVariables: testCase.numVariables,
      numRestricciones: testCase.numRestricciones,
      metodo: testCase.metodo,
    });
    setObjective(testCase.objetivo);
    setRestrictions(testCase.restricciones);
    setCurrentStep(2);
    setValidationErrors({});
    setBackendError('');
    setResult(null);
  };

  /**
   * Añade una restricción vacía respetando el máximo permitido en UI.
   */
  const handleAddRestriction = () => {
    if (restrictions.length >= 4) return;
    setRestrictions((prev) => [...prev, buildEmptyRestriction(config.numVariables)]);
  };

  /**
   * Elimina una restricción por índice respetando el mínimo requerido.
   */
  const handleRemoveRestriction = (index) => {
    if (restrictions.length <= 1) return;
    setRestrictions((prev) => prev.filter((_, rowIndex) => rowIndex !== index));
  };

  /**
   * Ejecuta validaciones por paso del asistente y persiste errores.
   */
  const validateStep = (step) => {
    if (step === 1) {
      const errors = validateModelConfig(config);
      setValidationErrors(errors);
      return !hasErrors(errors);
    }
    if (step === 2) {
      const errors = validateObjective(objective);
      setValidationErrors(errors);
      return !hasErrors(errors);
    }
    if (step === 3) {
      const errors = validateRestrictions(restrictions, config.numVariables);
      setValidationErrors(errors);
      return !hasErrors(errors);
    }
    return true;
  };

  /**
   * Avanza al siguiente paso solo si la validación actual es correcta.
   */
  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  /**
   * Retrocede al paso anterior dentro de los límites del flujo.
   */
  const handleBackStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  /**
   * Valida, arma payload y consume backend para resolver el modelo lineal.
   */
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    const configErrors = validateModelConfig(config);
    const objectiveErrors = validateObjective(objective);
    const restrictionErrors = validateRestrictions(restrictions, config.numVariables);
    const mergedErrors = { ...configErrors, ...objectiveErrors, ...restrictionErrors };

    if (hasErrors(mergedErrors)) {
      setValidationErrors(mergedErrors);
      const nextStep = Object.keys(configErrors).length
        ? 1
        : Object.keys(objectiveErrors).length
        ? 2
        : Object.keys(restrictionErrors).length
        ? 3
        : currentStep;
      setCurrentStep(nextStep);
      return;
    }

    setLoading(true);
    setBackendError('');
    setValidationErrors({});
    setResult(null);

    try {
      const payload = buildSolverPayload(config, objective, restrictions);
      const data = await solveLP(payload);
      setResult(data);
      setCurrentStep(4);
    } catch (error) {
      const message = error.response?.data?.detail || error.message || 'Error de red al conectar con el backend.';
      setBackendError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 py-6 sm:py-8">
      <Toaster position="top-right" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
          <div className="space-y-5">
            <TestCases cases={TEST_CASES} onSelect={handleTestCaseSelect} />
            <StepIndicator currentStep={currentStep} />

            {backendError && (
              <div className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800 shadow-sm">
                <p className="font-semibold">Error del backend</p>
                <p className="mt-1.5">{backendError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {currentStep === 1 && (
                <ModelConfig config={config} onChange={handleConfigChange} errors={validationErrors} />
              )}

              {currentStep === 2 && (
                <ObjectiveForm
                  objective={objective}
                  numVariables={config.numVariables}
                  onChange={handleObjectiveChange}
                  errors={validationErrors}
                  tipo={config.tipo}
                />
              )}

              {currentStep === 3 && (
                <RestrictionsTable
                  restrictions={restrictions}
                  numVariables={config.numVariables}
                  onChange={handleRestrictionChange}
                  errors={validationErrors}
                />
              )}

              {currentStep === 4 && (
                <ModelSummary
                  tipo={config.tipo}
                  numVariables={config.numVariables}
                  objetivo={objective}
                  restricciones={restrictions}
                  metodo={config.metodo}
                />
              )}

              <section className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-lg">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={handleBackStep}
                      disabled={currentStep === 1}
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Volver
                    </button>
                    {currentStep < 4 && (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                      >
                        Siguiente
                      </button>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-sky-600 disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-300"
                  >
                    {loading ? (
                      <>
                        <svg className="mr-2 h-5 w-5 animate-spin text-white" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                          <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                        </svg>
                        Resolviendo...
                      </>
                    ) : (
                      'Resolver modelo'
                    )}
                  </button>
                </div>
              </section>
            </form>
          </div>

          <aside className="space-y-5">
            <ResultsPanel result={result} />
            <ModelPreview config={config} objective={objective} restrictions={restrictions} />
          </aside>
        </div>
      </div>
    </div>
  );
}
