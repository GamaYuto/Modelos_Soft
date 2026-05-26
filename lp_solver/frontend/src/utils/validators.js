/**
 * Valida si un valor puede convertirse de forma segura a número.
 */
export function isNumeric(value) {
  return value !== '' && value !== null && value !== undefined && !Number.isNaN(Number(value));
}

/**
 * Valida tipo, dimensiones y método del modelo configurado en UI.
 */
export function validateModelConfig(config) {
  const errors = {};
  if (!['max', 'min'].includes(config.tipo)) {
    errors.tipo = 'Selecciona Maximizar o Minimizar.';
  }
  if (typeof config.numVariables !== 'number' || config.numVariables < 2 || config.numVariables > 4) {
    errors.numVariables = 'Debe haber entre 2 y 4 variables.';
  }
  if (typeof config.numRestricciones !== 'number' || config.numRestricciones < 2 || config.numRestricciones > 4) {
    errors.numRestricciones = 'Debe haber entre 2 y 4 restricciones.';
  }
  if (!['simplex', 'grafico'].includes(config.metodo)) {
    errors.metodo = 'Selecciona un método válido.';
  }
  if (config.metodo === 'grafico' && config.numVariables !== 2) {
    errors.metodo = 'El método gráfico solo funciona con 2 variables.';
  }
  return errors;
}

/**
 * Verifica coeficientes objetivo numéricos y evita vector objetivo nulo.
 */
export function validateObjective(objective) {
  const errors = {};
  const allZero = objective.every((value) => Number(value) === 0 || value === '' || value === null);
  if (allZero) {
    errors.objective = 'Los coeficientes no pueden ser todos cero.';
  }
  objective.forEach((value, index) => {
    if (!isNumeric(value)) {
      errors[`objective_${index}`] = 'Debe ser un número válido.';
    }
  });
  return errors;
}

/**
 * Valida restricciones por fila: coeficientes, operador y lado derecho.
 */
export function validateRestrictions(restrictions, numVariables) {
  const errors = {};
  if (!Array.isArray(restrictions) || restrictions.length < 2) {
    errors.restrictions = 'Debe haber al menos 2 restricciones.';
    return errors;
  }
  restrictions.forEach((restriction, rowIndex) => {
    const allEmpty = restriction.coeficientes.slice(0, numVariables).every((value) => value === '' || value === null || value === undefined) && (restriction.lado_derecho === '' || restriction.lado_derecho === null || restriction.lado_derecho === undefined);
    if (allEmpty) {
      errors[`restriction_${rowIndex}`] = 'Esta restricción no puede estar vacía.';
    }
    restriction.coeficientes.slice(0, numVariables).forEach((value, coefIndex) => {
      if (!isNumeric(value)) {
        errors[`restriction_${rowIndex}_coef_${coefIndex}`] = 'Debe ser un número válido.';
      }
    });
    if (!isNumeric(restriction.lado_derecho)) {
      errors[`restriction_${rowIndex}_rhs`] = 'Debe ser un número válido.';
    }
    if (!['<=', '>=', '='].includes(restriction.sentido)) {
      errors[`restriction_${rowIndex}_sentido`] = 'Selecciona un operador válido.';
    }
  });
  return errors;
}

/**
 * Indica si el mapa de errores contiene al menos una entrada.
 */
export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}

/**
 * Normaliza datos del formulario al contrato esperado por `/solve`.
 */
export function buildSolverPayload(config, objective, restrictions) {
  return {
    tipo: config.tipo,
    objetivo: objective.slice(0, config.numVariables).map(Number),
    restricciones: restrictions.slice(0, config.numRestricciones).map((restriction) => ({
      coeficientes: restriction.coeficientes.slice(0, config.numVariables).map(Number),
      sentido: restriction.sentido,
      lado_derecho: Number(restriction.lado_derecho),
    })),
    metodo: config.metodo || 'simplex',
  };
}