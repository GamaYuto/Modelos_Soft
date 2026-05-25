"""Implementación simple del método Simplex con Big M para problemas de programación lineal."""

from math import isclose

M = 1_000_000.0
TOL = 1e-9


def imprimir_tabla(tableau, rhs, row_names, col_names, objetivo=None, reducidos=None):
    """Devuelve una representación tabular de la tabla Simplex."""
    filas = []
    anchos = [max(len(name), 8) for name in (['Base'] + col_names + ['RHS'])]

    def fmt(valor, ancho):
        texto = f"{valor:.6f}" if isinstance(valor, float) else str(valor)
        return texto.rjust(ancho)

    header = ['Base'] + col_names + ['RHS']
    filas.append(' | '.join(fmt(v, anchos[i]) for i, v in enumerate(header)))
    filas.append('-' * (sum(anchos) + 3 * (len(anchos) - 1)))

    for i, fila in enumerate(tableau):
        linea = [row_names[i]] + [fmt(v, anchos[j + 1]) for j, v in enumerate(fila)] + [fmt(rhs[i], anchos[-1])]
        filas.append(' | '.join(linea))

    if reducidos is not None:
        filas.append('-' * (sum(anchos) + 3 * (len(anchos) - 1)))
        linea = ['Reduccion'] + [fmt(v, anchos[j + 1]) for j, v in enumerate(reducidos)] + [''.rjust(anchos[-1])]
        filas.append(' | '.join(linea))

    if objetivo is not None:
        filas.append('')
        filas.append(f"Valor objetivo: {objetivo:.6f}")

    return '\n'.join(filas)


def _normalizar_signo(signo):
    valor = str(signo).strip().lower()
    if valor in ('<=', '=<', 'le', 'menor o igual', 'menor_igual'):
        return '<='
    if valor in ('>=', '=>', 'ge', 'mayor o igual', 'mayor_igual'):
        return '>='
    if valor in ('=', '==', 'eq', 'igual'):
        return '='
    raise ValueError(f"Signo de restricción inválido: {signo}")


def _es_cero(valor):
    return abs(valor) <= TOL


def _prod(a, b):
    return a * b


def resolver_simplex(tipo, c, restricciones, debug=False):
    """Resuelve un problema de programación lineal con el método Simplex y Big M."""
    if not c:
        raise ValueError('El vector de costos c no puede estar vacío.')

    modo = str(tipo).strip().lower()
    if modo not in ('max', 'min'):
        raise ValueError("El tipo debe ser 'max' o 'min'.")

    es_min = modo == 'min'
    c_original = [float(ci) for ci in c]
    c = [-float(ci) for ci in c_original] if es_min else [float(ci) for ci in c_original]

    num_vars = len(c)
    num_restr = len(restricciones)

    coeficientes = []
    signos = []
    rhs = []

    for fila in restricciones:
        if len(fila) < num_vars + 2:
            raise ValueError('Cada restricción debe incluir los coeficientes, el signo y el término independiente.')
        coef = [float(x) for x in fila[:num_vars]]
        signos.append(_normalizar_signo(fila[num_vars]))
        rhs.append(float(fila[num_vars + 1]))
        coeficientes.append(coef)

    slack_count = 0
    artificial_count = 0
    for s in signos:
        if s == '<=':
            slack_count += 1
        elif s == '>=':
            slack_count += 1
            artificial_count += 1
        elif s == '=':
            artificial_count += 1

    total_vars = num_vars + slack_count + artificial_count
    tableau = []
    basic_vars = []
    col_names = [f'x{i + 1}' for i in range(num_vars)]
    col_names += [f's{i + 1}' for i in range(slack_count)]
    col_names += [f'a{i + 1}' for i in range(artificial_count)]

    slack_pos = num_vars
    art_pos = num_vars + slack_count
    slack_idx = 0
    art_idx = 0

    for i, fila in enumerate(coeficientes):
        fila_ext = [float(v) for v in fila] + [0.0] * (slack_count + artificial_count)
        signo = signos[i]

        if signo == '<=':
            fila_ext[slack_pos + slack_idx] = 1.0
            basic_vars.append(slack_pos + slack_idx)
            slack_idx += 1
        elif signo == '>=':
            fila_ext[slack_pos + slack_idx] = -1.0
            fila_ext[art_pos + art_idx] = 1.0
            basic_vars.append(art_pos + art_idx)
            slack_idx += 1
            art_idx += 1
        elif signo == '=':
            fila_ext[art_pos + art_idx] = 1.0
            basic_vars.append(art_pos + art_idx)
            art_idx += 1

        tableau.append(fila_ext)

    objective_coeffs = [float(v) for v in c] + [0.0] * slack_count + [-M] * artificial_count
    artificial_indices = list(range(num_vars + slack_count, total_vars))

    def _calcular_reducidos_y_objetivo():
        m = len(tableau)
        n = total_vars
        basic_costs = [objective_coeffs[idx] for idx in basic_vars]

        zj = [0.0] * n
        for j in range(n):
            for i in range(m):
                zj[j] += basic_costs[i] * tableau[i][j]

        reducidos = [objective_coeffs[j] - zj[j] for j in range(n)]
        valor_objetivo = sum(basic_costs[i] * rhs[i] for i in range(m))
        return reducidos, valor_objetivo

    def _pivotear(fila_pivote, col_pivote):
        pivote = tableau[fila_pivote][col_pivote]
        if _es_cero(pivote):
            raise ZeroDivisionError('Pivote igual a cero durante la operación de pivoteo.')

        tableau[fila_pivote] = [valor / pivote for valor in tableau[fila_pivote]]
        rhs[fila_pivote] /= pivote

        for i in range(len(tableau)):
            if i == fila_pivote:
                continue
            factor = tableau[i][col_pivote]
            if _es_cero(factor):
                continue
            tableau[i] = [a - factor * b for a, b in zip(tableau[i], tableau[fila_pivote])]
            rhs[i] -= factor * rhs[fila_pivote]

        basic_vars[fila_pivote] = col_pivote

    tablas = []
    status = 'optimal'
    conclusion = 'Se encontró una solución óptima.'

    for iteracion in range(100):
        reducidos, valor_objetivo = _calcular_reducidos_y_objetivo()
        fila_base = [col_names[idx] for idx in basic_vars]
        tabla_actual = imprimir_tabla(tableau, rhs, fila_base, col_names, objetivo=valor_objetivo, reducidos=reducidos)
        tablas.append(tabla_actual)
        if debug:
            print(f"\nIteración {iteracion + 1}")
            print(tabla_actual)

        mejor_valor = max(reducidos)
        if mejor_valor <= TOL:
            break

        col_pivote = max(range(len(reducidos)), key=lambda j: (reducidos[j], -j))
        if reducidos[col_pivote] <= TOL:
            break

        ratios = []
        for i, fila in enumerate(tableau):
            coef = fila[col_pivote]
            if coef > TOL:
                ratios.append((rhs[i] / coef, i))
            else:
                ratios.append((float('inf'), i))

        mejor_ratio, fila_pivote = min(ratios, key=lambda x: (x[0], x[1]))
        if mejor_ratio == float('inf'):
            status = 'unbounded'
            conclusion = 'El problema es no acotado.'
            break

        _pivotear(fila_pivote, col_pivote)
    else:
        status = 'iteracion_maxima'
        conclusion = 'Se alcanzó el límite de iteraciones sin encontrar óptimo claro.'

    reducidos_final, valor_objetivo_final = _calcular_reducidos_y_objetivo()
    tablas.append(imprimir_tabla(tableau, rhs, [col_names[idx] for idx in basic_vars], col_names, objetivo=valor_objetivo_final, reducidos=reducidos_final))

    if status == 'optimal':
        arti_en_base = [i for i, var in enumerate(basic_vars) if var in artificial_indices and rhs[i] > TOL]
        if arti_en_base:
            status = 'infeasible'
            conclusion = 'El problema es infactible porque una variable artificial quedó en la base con valor positivo.'

    if status == 'optimal':
        multiples = False
        for j in range(total_vars):
            if j in basic_vars:
                continue
            if j in artificial_indices:
                continue
            if abs(reducidos_final[j]) <= TOL:
                multiples = True
                break
        if multiples:
            conclusion = 'Se encontró una solución óptima y hay múltiples soluciones alternativas.'

    variables_opt = [0.0] * num_vars
    for i, var in enumerate(basic_vars):
        if var < num_vars:
            variables_opt[var] = rhs[i]

    valor_original = -valor_objetivo_final if es_min else valor_objetivo_final
    if status == 'unbounded':
        valor_original = None

    return {
        'status': status,
        'variables_opt': [round(v, 9) for v in variables_opt],
        'valor_optimo': round(valor_original, 9) if valor_original is not None else None,
        'conclusion': conclusion,
        'tablas': tablas,
    }
