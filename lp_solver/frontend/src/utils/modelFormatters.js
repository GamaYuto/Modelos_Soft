function formatTerm(coef, index) {
  const value = Number(coef);
  if (Number.isNaN(value) || value === 0) return null;
  const sign = value > 0 ? '+' : '-';
  const absValue = Math.abs(value);
  const variable = `x${index + 1}`;
  return `${sign} ${absValue}${variable}`;
}

export function formatObjective(tipo, objective) {
  const terms = objective
    .map((coef, index) => formatTerm(coef, index))
    .filter(Boolean)
    .map((term, index) => (index === 0 && term.startsWith('+') ? term.slice(2) : term));
  const expression = terms.length > 0 ? terms.join(' ') : '0';
  return `${tipo === 'min' ? 'Min' : 'Max'} Z = ${expression}`;
}

export function formatRestriction(coeficientes, sentido, rhs) {
  const terms = coeficientes
    .map((coef, index) => formatTerm(coef, index))
    .filter(Boolean)
    .map((term, index) => (index === 0 && term.startsWith('+') ? term.slice(2) : term));
  const expression = terms.length > 0 ? terms.join(' ') : '0';
  return `${expression} ${sentido} ${rhs}`;
}

export function formatModelPreview(config, objective, restrictions) {
  const objectiveLine = formatObjective(config.tipo, objective.slice(0, config.numVariables));
  const restrictionLines = restrictions
    .slice(0, config.numRestricciones)
    .map((restriction) =>
      formatRestriction(
        restriction.coeficientes.slice(0, config.numVariables),
        restriction.sentido,
        restriction.lado_derecho,
      ),
    );
  const nonNegativity = `x1${config.numVariables > 1 ? ', x2' : ''}${config.numVariables > 2 ? ', x3' : ''}${config.numVariables > 3 ? ', x4' : ''} ≥ 0`;

  return {
    objectiveLine,
    restrictionLines,
    nonNegativity,
  };
}
