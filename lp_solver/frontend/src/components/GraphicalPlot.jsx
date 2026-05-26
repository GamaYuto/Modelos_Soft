import { useMemo } from 'react';

/**
 * Professional SVG-based graphical visualization for 2D linear programming problems.
 * Renders feasible region, constraint lines with labels, vertices, and optimal point.
 * Supports both English and Spanish field names.
 */
export default function GraphicalPlot({ graph, solution }) {
  if (!graph) {
    return null;
  }

  // Normalizar datos (soportar inglés y español)
  const vertices = (graph?.vertices || graph?.puntos || [])
    .filter((p) => Number.isFinite(Number(p.x)) && Number.isFinite(Number(p.y)) && Number(p.x) >= -0.001 && Number(p.y) >= -0.001)
    .map((p) => ({ x: Number(p.x), y: Number(p.y) }));
  
  const lines = graph?.lines || graph?.restricciones || [];
  const optimalPoint = graph?.optimalPoint || graph?.punto_optimo ? {
    x: Number(graph.optimalPoint?.x || graph.punto_optimo?.x),
    y: Number(graph.optimalPoint?.y || graph.punto_optimo?.y),
  } : null;

  // Ciclo de colores única para cada restricción (muy suave)
  const COLOR_PALETTE = [
    '#3b82f6', // Azul
    '#6366f1', // Índigo
    '#06b6d4', // Cyan
    '#8b5cf6', // Púrpura
  ];

  // Validar datos de punto óptimo
  const validOptimalPoint = optimalPoint && Number.isFinite(optimalPoint.x) && Number.isFinite(optimalPoint.y) ? optimalPoint : null;

  // Calcular escalas y limites
  const { viewBox, padding, toSvgX, toSvgY, minX, maxX, minY, maxY, sortedVertices } = useMemo(() => {
    const padding = 36;
    const svgWidth = 560;
    const svgHeight = 360;

    // Recopilar todos los puntos significativos
    const allPoints = [...vertices];
    if (validOptimalPoint) allPoints.push(validOptimalPoint);
    
    // Si hay líneas, agregar interceptos
    lines.forEach((line) => {
      const { a, b, rhs } = line;
      if (a !== 0) allPoints.push({ x: rhs / a, y: 0 });
      if (b !== 0) allPoints.push({ x: 0, y: rhs / b });
    });

    allPoints.push({ x: 0, y: 0 }); // Origen

    if (allPoints.length === 0) {
      return {
        viewBox: '0 0 560 360',
        padding,
        toSvgX: (x) => padding + (x / 10) * (svgWidth - 2 * padding),
        toSvgY: (y) => svgHeight - padding - (y / 10) * (svgHeight - 2 * padding),
        minX: 0,
        maxX: 10,
        minY: 0,
        maxY: 10,
        sortedVertices: [],
      };
    }

    let minX = Math.min(...allPoints.map((p) => Number(p.x)));
    let maxX = Math.max(...allPoints.map((p) => Number(p.x)));
    let minY = Math.min(...allPoints.map((p) => Number(p.y)));
    let maxY = Math.max(...allPoints.map((p) => Number(p.y)));

    // Si es un solo punto, expandir para que sea visible
    if (minX === maxX) maxX = minX + 1;
    if (minY === maxY) maxY = minY + 1;

    // Añadir margen
    const marginX = (maxX - minX) * 0.2;
    const marginY = (maxY - minY) * 0.2;

    minX -= marginX;
    maxX += marginX;
    minY -= marginY;
    maxY += marginY;

    // Nunca permitir negativos si el problema es no-negativo
    minX = Math.max(0, minX - 0.5);
    minY = Math.max(0, minY - 0.5);

    const rangeX = maxX - minX || 1;
    const rangeY = maxY - minY || 1;
    const scaleX = (svgWidth - 2 * padding) / rangeX;
    const scaleY = (svgHeight - 2 * padding) / rangeY;

    const toSvgX = (x) => padding + ((x - minX) * scaleX);
    const toSvgY = (y) => svgHeight - padding - ((y - minY) * scaleY);

    // Ordenar vértices por ángulo para dibujar polígono correcto
    let sortedVertices = [...vertices];
    if (vertices.length >= 3) {
      const cx = vertices.reduce((sum, p) => sum + p.x, 0) / vertices.length;
      const cy = vertices.reduce((sum, p) => sum + p.y, 0) / vertices.length;
      sortedVertices.sort((a, b) => Math.atan2(a.y - cy, a.x - cx) - Math.atan2(b.y - cy, b.x - cx));
    }

    return { viewBox: `0 0 ${svgWidth} ${svgHeight}`, padding, toSvgX, toSvgY, minX, maxX, minY, maxY, sortedVertices };
  }, [vertices, lines, validOptimalPoint]);

  // Obtiene el segmento visible de una restricción dentro del viewport actual.
  const getLineSegment = (line) => {
    const { a, b, rhs } = line;
    const points = [];

    // Calcular puntos de intersección con bordes del área visible
    if (Math.abs(b) > 0.001) {
      // Calcular para x = minX y x = maxX
      const yAtMinX = (rhs - a * minX) / b;
      const yAtMaxX = (rhs - a * maxX) / b;
      if (yAtMinX >= minY - 0.1 && yAtMinX <= maxY + 0.1) points.push([minX, yAtMinX]);
      if (yAtMaxX >= minY - 0.1 && yAtMaxX <= maxY + 0.1) points.push([maxX, yAtMaxX]);
    }

    if (Math.abs(a) > 0.001) {
      // Calcular para y = minY y y = maxY
      const xAtMinY = (rhs - b * minY) / a;
      const xAtMaxY = (rhs - b * maxY) / a;
      if (xAtMinY >= minX - 0.1 && xAtMinY <= maxX + 0.1) points.push([xAtMinY, minY]);
      if (xAtMaxY >= minX - 0.1 && xAtMaxY <= maxX + 0.1) points.push([xAtMaxY, maxY]);
    }

    // Remover duplicados
    const unique = [];
    for (const p of points) {
      if (!unique.some((u) => Math.abs(u[0] - p[0]) < 0.05 && Math.abs(u[1] - p[1]) < 0.05)) {
        unique.push(p);
      }
    }

    return unique.length >= 2 ? unique.slice(0, 2) : null;
  };

  // Asigna color estable por índice de restricción para mejorar legibilidad.
  const lineColor = (operator, index) => {
    // Usar color único por índice de restricción
    const color = COLOR_PALETTE[index % COLOR_PALETTE.length];
    // Modificar solo por tipo de operador (guiones)
    return color;
  };

  return (
    <div className="space-y-2">
      <style>{`
        @keyframes fadeInPolygon {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInPoint {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animated-polygon {
          animation: fadeInPolygon 0.6s ease-out;
        }
        .animated-optimal {
          animation: slideInPoint 0.5s ease-out 0.3s both;
        }
      `}</style>
      <div className="overflow-x-auto rounded-lg bg-gradient-to-b from-slate-50 to-white p-1">
        <svg viewBox={viewBox} className="h-auto w-full" style={{ minHeight: '260px', maxHeight: '320px' }}>
          {/* Fondo gradiente */}
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f1f5f9', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width={560} height={360} fill="url(#bgGrad)" />

          {/* Grid lines - horizontales y verticales suaves */}
          <g opacity="0.08" stroke="#64748b" strokeWidth="1">
            {[0.25, 0.5, 0.75, 1].map((frac) => {
              const x = minX + (maxX - minX) * frac;
              const y = minY + (maxY - minY) * frac;
              return (
                <g key={`grid-${frac}`}>
                  {/* Línea vertical */}
                  <line x1={toSvgX(x)} y1={toSvgY(minY)} x2={toSvgX(x)} y2={toSvgY(maxY)} />
                  {/* Línea horizontal */}
                  <line x1={toSvgX(minX)} y1={toSvgY(y)} x2={toSvgX(maxX)} y2={toSvgY(y)} />
                </g>
              );
            })}
          </g>

          {/* Región factible (polígono) - mejorado */}
          {sortedVertices.length >= 3 && (
            <polygon
              className="animated-polygon"
              points={sortedVertices.map((p) => `${toSvgX(p.x)},${toSvgY(p.y)}`).join(' ')}
              fill="rgba(16, 185, 129, 0.16)"
              stroke="rgba(5, 150, 105, 0.9)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Líneas de restricciones */}
          {lines.map((line, idx) => {
            const segment = getLineSegment(line);
            if (!segment || segment.length < 2) return null;

            const [p1, p2] = segment;
            const x1 = toSvgX(p1[0]);
            const y1 = toSvgY(p1[1]);
            const x2 = toSvgX(p2[0]);
            const y2 = toSvgY(p2[1]);

            const color = lineColor(line.operator, idx);
            const strokeDasharray = line.operator === '=' ? '4,3' : 'none';

            // Punto para label
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;

            return (
              <g key={`line-${idx}`}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2.8" strokeDasharray={strokeDasharray} opacity="0.85" />
                
                {/* Badge circular para el nombre de la restricción */}
                <circle cx={midX + 14} cy={midY - 14} r="12" fill="white" stroke={color} strokeWidth="2" opacity="0.95" />
                <text x={midX + 14} y={midY - 10} fontSize="10" fontWeight="700" fill={color} textAnchor="middle" opacity="0.95">
                  R{idx + 1}
                </text>
              </g>
            );
          })}

          {/* Ejes con marcas */}
          <g opacity="0.5">
            <line x1={toSvgX(0)} y1={toSvgY(0)} x2={toSvgX(maxX * 0.95)} y2={toSvgY(0)} stroke="#64748b" strokeWidth="1.8" />
            <line x1={toSvgX(0)} y1={toSvgY(0)} x2={toSvgX(0)} y2={toSvgY(maxY * 0.95)} stroke="#64748b" strokeWidth="1.8" />
          </g>

          {/* Marcas de escala en eje X */}
          {[0.25, 0.5, 0.75, 1].map((frac) => {
            const x = minX + (maxX - minX) * frac;
            if (x > maxX) return null;
            const svgX = toSvgX(x);
            return (
              <g key={`tick-x-${frac}`}>
                <line x1={svgX} y1={toSvgY(0) + 5} x2={svgX} y2={toSvgY(0) - 5} stroke="#cbd5e1" strokeWidth="1.2" />
                <text x={svgX} y={toSvgY(0) + 18} fontSize="9" fill="#94a3b8" textAnchor="middle">
                  {x.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Marcas de escala en eje Y */}
          {[0.25, 0.5, 0.75, 1].map((frac) => {
            const y = minY + (maxY - minY) * frac;
            if (y > maxY) return null;
            const svgY = toSvgY(y);
            return (
              <g key={`tick-y-${frac}`}>
                <line x1={toSvgX(0) - 5} y1={svgY} x2={toSvgX(0) + 5} y2={svgY} stroke="#cbd5e1" strokeWidth="1.2" />
                <text x={toSvgX(0) - 14} y={svgY + 3} fontSize="9" fill="#94a3b8" textAnchor="end">
                  {y.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Origen */}
          <text x={toSvgX(0) - 10} y={toSvgY(0) + 20} fontSize="10" fontWeight="700" fill="#475569" textAnchor="end">
            0
          </text>

          {/* Labels de ejes */}
          <text x={toSvgX(maxX * 0.9)} y={toSvgY(0) + 30} fontSize="13" fontWeight="800" fill="#334155">
            x₁
          </text>
          <text x={toSvgX(0) - 26} y={toSvgY(maxY * 0.9)} fontSize="13" fontWeight="800" fill="#334155">
            x₂
          </text>

          {/* Vértices factibles */}
          {sortedVertices.map((vertex, idx) => {
            const isOptimal = validOptimalPoint && Math.abs(vertex.x - validOptimalPoint.x) < 0.01 && Math.abs(vertex.y - validOptimalPoint.y) < 0.01;
            const svgX = toSvgX(vertex.x);
            const svgY = toSvgY(vertex.y);

            return (
              <g key={`vertex-${idx}`}>
                <circle cx={svgX} cy={svgY} r={isOptimal ? '5.5' : '4'} fill={isOptimal ? '#10b981' : '#ffffff'} stroke={isOptimal ? '#059669' : '#3b82f6'} strokeWidth={isOptimal ? '2.8' : '2'} />
                {isOptimal && <circle cx={svgX} cy={svgY} r="10" fill="none" stroke="#10b981" strokeWidth="1.8" opacity="0.3" />}
              </g>
            );
          })}

          {/* Punto óptimo con capsule label - mejorado */}
          {validOptimalPoint && (
            <g className="animated-optimal">
              {/* Capsule de fondo */}
              <rect
                x={toSvgX(validOptimalPoint.x) - 35}
                y={toSvgY(validOptimalPoint.y) - 40}
                width="70"
                height="32"
                rx="8"
                fill="white"
                stroke="#10b981"
                strokeWidth="2"
                opacity="0.95"
              />
              {/* Texto "Óptimo" */}
              <text
                x={toSvgX(validOptimalPoint.x)}
                y={toSvgY(validOptimalPoint.y) - 24}
                fontSize="10"
                fontWeight="700"
                fill="#059669"
                textAnchor="middle"
              >
                Óptimo
              </text>
              {/* Variables x₁=, x₂= */}
              <text
                x={toSvgX(validOptimalPoint.x)}
                y={toSvgY(validOptimalPoint.y) - 10}
                fontSize="9"
                fontWeight="600"
                fill="#047857"
                textAnchor="middle"
              >
                x₁={validOptimalPoint.x.toFixed(1)}, x₂={validOptimalPoint.y.toFixed(1)}
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Información compacta */}
      <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
        {sortedVertices.length >= 3 ? (
          <div>
            <p className="font-semibold text-slate-700">Vértices factibles:</p>
            <p className="mt-1 font-mono">
              {sortedVertices.map((v) => `(${v.x.toFixed(2)}, ${v.y.toFixed(2)})`).join(' → ')}
            </p>
          </div>
        ) : sortedVertices.length > 0 ? (
          <p className="italic">Región factible con {sortedVertices.length} punto(s). No forma polígono cerrado.</p>
        ) : (
          <p className="italic">No hay región factible cerrada para mostrar.</p>
        )}
      </div>

      {/* Leyenda de restricciones */}
      <div className="text-xs text-slate-600">
        <div className="flex flex-wrap gap-3">
          {lines.length > 0 && (
            <>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLOR_PALETTE[0] }} />
                <span className="text-slate-600">R1</span>
              </div>
              {lines.length > 1 && (
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLOR_PALETTE[1] }} />
                  <span className="text-slate-600">R2</span>
                </div>
              )}
              {lines.length > 2 && (
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLOR_PALETTE[2] }} />
                  <span className="text-slate-600">R3</span>
                </div>
              )}
              {lines.length > 3 && (
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLOR_PALETTE[3] }} />
                  <span className="text-slate-600">R4</span>
                </div>
              )}
              <div className="h-px w-3 border-t border-slate-300 self-center" />
              <span className="italic text-slate-500">Colores únicos para cada restricción</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
