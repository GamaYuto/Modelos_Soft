/**
 * Convierte y valida un valor numérico del formulario.
 */
export function validarNumero(valor, nombre) {
  if (valor === '' || valor === null || valor === undefined) {
    throw new Error(`${nombre} es obligatorio.`);
  }

  const numero = Number(valor);
  if (Number.isNaN(numero)) {
    throw new Error(`${nombre} debe ser un número válido.`);
  }

  return numero;
}

/**
 * Valida tipo, objetivo y restricciones antes de enviar al backend.
 */
export function validarFormulario(tipo, objetivo, restricciones) {
  if (!['max', 'min'].includes(tipo)) {
    throw new Error('Selecciona Maximizar o Minimizar.');
  }

  if (!Array.isArray(objetivo) || objetivo.length < 2 || objetivo.length > 4) {
    throw new Error('El número de variables debe ser entre 2 y 4.');
  }

  const objetivoNumerico = objetivo.map((valor, index) =>
    validarNumero(valor, `Coeficiente Z x${index + 1}`),
  );

  if (!Array.isArray(restricciones) || restricciones.length === 0) {
    throw new Error('Debe existir al menos una restricción.');
  }

  if (restricciones.length > 4) {
    throw new Error('Máximo 4 restricciones permitidas.');
  }

  const restriccionesValidas = restricciones.map((restriccion, index) => {
    if (
      !Array.isArray(restriccion.coeficientes) ||
      restriccion.coeficientes.length !== objetivo.length
    ) {
      throw new Error(`Restricción ${index + 1} debe tener ${objetivo.length} coeficientes.`);
    }

    const coeficientes = restriccion.coeficientes.map((valor, coefIndex) =>
      validarNumero(valor, `Restricción ${index + 1} coeficiente x${coefIndex + 1}`),
    );

    if (!['<=', '>=', '='].includes(restriccion.sentido)) {
      throw new Error(`Restricción ${index + 1} tiene un sentido inválido.`);
    }

    const ladoDerecho = validarNumero(restriccion.lado_derecho, `Restricción ${index + 1} lado derecho`);

    return {
      coeficientes,
      sentido: restriccion.sentido,
      lado_derecho: ladoDerecho,
    };
  });

  return {
    tipo,
    objetivo: objetivoNumerico,
    restricciones: restriccionesValidas,
  };
}
