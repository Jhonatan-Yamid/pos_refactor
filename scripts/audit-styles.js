#!/usr/bin/env node
/**
 * StyleAuditor — verifica que los archivos migrados no contengan
 * clases Tailwind hardcodeadas fuera de las excepciones documentadas.
 *
 * Uso: node scripts/audit-styles.js
 * NPM:  npm run audit:styles
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

const FILES = [
  "src/components/Navbar.jsx",
  "src/components/SaleInfoFields.jsx",
  "src/app/dashboard/openChecklist/page.jsx",
  "src/components/ProductList.jsx",
  "src/app/dashboard/salesDaily/page.js",
  "src/app/dashboard/saleTable/page.js",
];

// Clases hardcodeadas intencionales — documentadas en el diseño.
const EXCEPTIONS = new Set([
  // ProductList — gradientes decorativos CATEGORY_META
  "from-red-800", "to-yellow-600",
  "from-emerald-700", "to-emerald-400",
  "from-gray-600", "to-gray-400",
  // salesDaily — gradiente de la tarjeta resumen
  "from-green-700", "to-emerald-600",
  // saleTable — badge de estado "Editada"
  "bg-yellow-700",
  // Colores de datos (gráficos, totales, indicadores de estado)
  "text-green-400", "text-green-300",
  "text-sky-400",
  "text-red-400", "text-red-500", "text-red-300",
  "text-emerald-400",
  // Botones de ícono — pista de interacción intencional (diseño aprobado)
  "text-gray-400", "text-gray-500",
]);

// Patrón 1: escalas numéricas Tailwind
const SCALE_RE = /\b(bg|text|border|ring|fill|stroke)-(gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(\d+)\b/g;

// Patrón 2: valores arbitrarios hex
const HEX_RE = /\[(#[0-9a-fA-F]{3,8})\]/g;

let totalViolations = 0;

for (const relPath of FILES) {
  const absPath = path.join(ROOT, relPath);

  if (!fs.existsSync(absPath)) {
    console.warn(`[WARN] Archivo no encontrado: ${relPath}`);
    continue;
  }

  const lines = fs.readFileSync(absPath, "utf8").split("\n");

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;

    // Patrón 1: clases de escala numérica
    const scaleMatches = [...line.matchAll(SCALE_RE)];
    for (const m of scaleMatches) {
      const cls = m[0]; // e.g. "bg-gray-800"
      if (!EXCEPTIONS.has(cls)) {
        console.log(`[VIOLATION] ${relPath}:${lineNum} — "${cls}"`);
        totalViolations++;
      }
    }

    // Patrón 2: valores hex arbitrarios
    const hexMatches = [...line.matchAll(HEX_RE)];
    for (const m of hexMatches) {
      const cls = `[${m[1]}]`; // e.g. "[#0b0f12]"
      if (!EXCEPTIONS.has(cls)) {
        console.log(`[VIOLATION] ${relPath}:${lineNum} — "${cls}"`);
        totalViolations++;
      }
    }
  });
}

if (totalViolations === 0) {
  console.log("✓ Sin clases hardcodeadas en los archivos auditados.");
  process.exit(0);
} else {
  console.log(`\n✗ ${totalViolations} violación(es) encontrada(s). Revisa los archivos arriba.`);
  process.exit(1);
}
