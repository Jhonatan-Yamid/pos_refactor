# Implementation Plan: UI Style Standardization

## Overview

Migración de seis archivos del dashboard de clases Tailwind hardcodeadas al sistema de Design Tokens semánticos (`globals.css` + `tailwind.config.js`) y a los componentes de la UI Library existente. Los cambios son puramente de presentación: ninguna lógica de negocio, estado, fetch ni estructura de props se modifica. Se crea `NavButton.jsx` para resolver la restricción de Server Component en Navbar, y el script `StyleAuditor` para verificar la ausencia de clases hardcodeadas post-migración.

## Tasks

- [x] 1. Crear `NavButton.jsx` — Client Component para Navbar
  - [x] 1.1 Crear `src/components/ui/NavButton.jsx` con soporte de variantes `primary` y `ghost`
    - Crear el archivo como Client Component (`"use client"`)
    - Usar `Link` de Next.js como elemento base
    - Aplicar tokens `bg-primary hover:bg-primary-hover text-white` para `variant="primary"` y `text-content hover:text-content-muted` para `variant="ghost"`
    - Aplicar clases de layout y transición: `inline-flex items-center justify-center gap-2 rounded-control font-medium px-4 py-2 transition`
    - _Requirements: 1.5_

  - [ ]* 1.2 Escribir smoke test para `NavButton`
    - Verificar que `NavButton` renderiza sin errores con `href` y `children`
    - Verificar que renderiza con `variant="ghost"` sin errores
    - _Requirements: 8.4_

- [x] 2. Migrar `Navbar.jsx` al sistema de tokens
  - [x] 2.1 Reemplazar clases hardcodeadas en el `<nav>` y links de autenticación
    - Cambiar `bg-gray-950` por `bg-canvas` en el contenedor `<nav>`
    - Cambiar `text-white` del `<nav>` por `text-content`
    - Reemplazar los `<Link>` de Login y Logout (con `bg-emerald-700 hover:bg-emerald-500`) por `<NavButton href="..." variant="primary">`
    - Importar `NavButton` desde `@/components/ui/NavButton`
    - Verificar que no queden clases `bg-gray-950`, `bg-emerald-700`, `hover:bg-emerald-500` en el archivo
    - _Requirements: 1.1, 1.2, 1.5, 1.6_

  - [ ]* 2.2 Escribir smoke test para `Navbar`
    - Mockear `getServerSession` para devolver `null` (sin sesión) y verificar que renderiza el enlace de Login
    - Mockear `getServerSession` para devolver una sesión con `businessType` y verificar que renderiza los enlaces de navegación
    - _Requirements: 1.3, 1.4, 8.4_

- [x] 3. Checkpoint — Verificar NavButton y Navbar
  - Ejecutar `npm run audit:styles` una vez creado el script (o revisar manualmente que no haya clases hardcodeadas)
  - Ejecutar `npm run test` y confirmar que los smoke tests pasan
  - Asegurarse que no hay errores de compilación en Navbar (Server Component + NavButton Client)
  - Pedir al usuario confirmación antes de continuar si hay dudas

- [x] 4. Migrar `SaleInfoFields.jsx` — reemplazar inputs nativos por componentes de la UI Library
  - [x] 4.1 Sustituir elementos `<input>`, `<select>` y `<textarea>` nativos por `Input`, `Select`, `Textarea` de la UI Library
    - Importar `Input`, `Select`, `Textarea` desde `@/components/ui/FormField`
    - Reemplazar el `<input>` de número de mesa por `<Input ref={tableInputRef} value={tableNumber} onChange={...} placeholder="Ej: 12" />`
    - Reemplazar cada `<select>` (tipo de pedido, estado de venta, juego) por `<Select value={...} onChange={...}>{options}</Select>`
    - Reemplazar el `<textarea>` de observaciones por `<Textarea value={generalObservation} onChange={...} placeholder="..." />`
    - _Requirements: 3.2_

  - [x] 4.2 Reemplazar clases hardcodeadas en el contenedor raíz y labels
    - Cambiar `bg-[#0b0f12] border border-gray-800` por `bg-surface border border-border` en el contenedor raíz
    - Cambiar `text-gray-300` y `text-gray-400` por `text-content-muted` en los labels (los labels gestionados por `FieldWrapper` ya heredan el token; verificar labels residuales)
    - Eliminar `focus:ring-emerald-500` y clases de `bg-[#050607]` residuales
    - Verificar que no queden clases `bg-[#0b0f12]`, `bg-[#050607]`, `border-gray-800`, `focus:ring-emerald-500`, `text-gray-300`, `text-gray-400`
    - _Requirements: 3.1, 3.3, 3.6_

  - [ ]* 4.3 Escribir smoke test para `SaleInfoFields`
    - Renderizar con `businessType="restaurante"` y las props mínimas requeridas; verificar que no lanza errores y que los campos tabla, orderType y saleStatus son visibles
    - Renderizar con `businessType="fruver"` y verificar que los campos `tableNumber`, `orderType`, `saleStatus` no están en el DOM
    - _Requirements: 3.4, 3.5, 8.4_

- [x] 5. Migrar `openChecklist/page.jsx` — PageContainer + Button
  - [x] 5.1 Reemplazar el wrapper raíz y el botón nativo
    - Importar `PageContainer` desde `@/components/ui/Layout` e importar `Button` desde `@/components/ui/Button`
    - Reemplazar el `<div className="p-4">` raíz por `<PageContainer>`
    - Reemplazar el `<button className="bg-blue-500 hover:bg-blue-600 ...">` por `<Button variant="secondary" onClick={clearChecklist}>`
    - _Requirements: 4.1, 4.4_

  - [x] 5.2 Reemplazar clases hardcodeadas en contenedor principal y tarjetas
    - Cambiar `bg-gray-950 border border-white` por `bg-canvas border border-border` en el contenedor principal
    - Cambiar `bg-gray-800 border border-gray-700` por `bg-surface border border-border` en las tarjetas de cada ítem
    - Cambiar `text-slate-200` por `text-content` en títulos y textos normales
    - Cambiar `text-slate-400` (texto de ítem tachado) por `text-content-muted`
    - Verificar que no queden clases `bg-gray-950`, `border-white`, `bg-gray-800`, `border-gray-700`, `text-slate-200`, `text-slate-400`
    - _Requirements: 4.2, 4.3, 4.5_

  - [ ]* 5.3 Escribir smoke test para `OpenChecklist`
    - Renderizar sin props y verificar que no lanza errores
    - Verificar que el botón "Limpiar Checklist" está presente en el DOM
    - _Requirements: 4.6, 8.4_

- [x] 6. Checkpoint — Verificar SaleInfoFields y OpenChecklist
  - Ejecutar `npm run test` y confirmar que los smoke tests de tasks 4.3 y 5.3 pasan
  - Revisar visualmente en el navegador que los formularios y el checklist se ven correctos
  - Pedir al usuario confirmación antes de continuar si hay dudas

- [x] 7. Migrar `ProductList.jsx` — solo reemplazo de tokens, sin cambio estructural
  - [x] 7.1 Reemplazar clases de fondo, superficie y canvas
    - Cambiar `bg-[#0b0f12]` por `bg-canvas` en contenedores de categoría
    - Cambiar `hover:bg-gray-900` por `hover:bg-surface` en hover de header de categoría
    - Cambiar `bg-gray-800` por `bg-surface-hover` en avatares de producto y botones +/-
    - Cambiar `bg-gray-900` por `bg-surface` en inputs de cantidad, instancias de producto y dropdown de sugerencias
    - Cambiar `bg-[#050607]` por `bg-surface-hover` en textareas de observaciones e inputs de adiciones
    - Cambiar `bg-[#060708]` por `bg-surface` en el dropdown de sugerencias
    - _Requirements: 2.1_

  - [x] 7.2 Reemplazar clases de texto y borde
    - Cambiar `text-slate-200` por `text-content` en nombres de producto, header "Productos Añadidos" y textos de instancia
    - Cambiar `text-gray-400` por `text-content-muted` en precios y textos secundarios
    - Cambiar `text-slate-400` por `text-content-muted` en subtítulos de categoría
    - Cambiar `text-gray-500` por `text-content-subtle` donde aplique
    - Cambiar `text-slate-300` por `text-content` en los botones +/-
    - Cambiar `text-emerald-400` por `text-success` en el input de cantidad Fruver
    - Cambiar `border-gray-800` por `border-border` en todos los elementos con ese borde
    - Cambiar `border-gray-700` por `border-border-hover` en todos los elementos con ese borde
    - Cambiar `focus:ring-emerald-500` y `focus:ring-slate-500` por `focus:border-border-hover` en inputs
    - Cambiar `bg-emerald-700 hover:bg-emerald-600` por `bg-success-hover hover:bg-success` en botones de acción
    - Verificar que no queden clases `bg-gray-900`, `bg-gray-800`, `bg-[#0b0f12]`, `text-slate-200`, `text-gray-400`, `text-gray-500`, `bg-emerald-700`, `hover:bg-emerald-600`, `text-emerald-400`, `border-gray-800`, `border-gray-700`
    - _Requirements: 2.2, 2.3, 2.4, 2.8_

  - [ ]* 7.3 Escribir smoke test para `ProductList`
    - Renderizar con `mode="restaurante"` y lista mínima de productos; verificar que no lanza errores
    - Renderizar con `mode="fruver"` y verificar que no lanza errores
    - _Requirements: 2.5, 8.4_

- [x] 8. Migrar `salesDaily/page.js` — PageContainer + Select + Modal (Recharts intacto)
  - [x] 8.1 Reemplazar el wrapper raíz y los selects nativos
    - Importar `PageContainer` desde `@/components/ui/Layout`, `Select` desde `@/components/ui/FormField`, `Modal` y `Button` desde sus respectivos módulos
    - Reemplazar el `<div className="p-4 sm:p-6 bg-gray-950 min-h-screen text-slate-200">` raíz por `<PageContainer>`
    - Reemplazar el `<select>` de rango por `<Select value={range} onChange={...}>{options}</Select>`
    - Reemplazar el `<select>` de promedio móvil por `<Select value={movingAvgDays} onChange={...}>{options}</Select>`
    - _Requirements: 6.1, 6.3_

  - [x] 8.2 Reemplazar clases de texto, fondo y borde en contenedores y tabla
    - Cambiar `text-slate-200` por `text-content` en el `h1` y encabezados de tabla
    - Cambiar `text-slate-400` y `text-gray-400` por `text-content-muted` en labels y encabezados secundarios
    - Cambiar `bg-gray-900` por `bg-surface` en contenedores de gráfico y tabla
    - Cambiar `bg-gray-800` por `bg-surface-hover` donde aplique
    - Cambiar `border-gray-700` por `border-border` en los bordes de contenedores y filas de tabla
    - Cambiar `border-gray-800` por `border-border` en bordes de filas
    - Cambiar `hover:bg-gray-800/40` por `hover:bg-surface-hover/40` en hover de filas de tabla
    - Cambiar `rounded-lg` por `rounded-control` en contenedores de gráfico y tabla
    - NO tocar los colores inline de Recharts (`fill="#10b981"`, `stroke={movingAvgColor}`, `CartesianGrid stroke`, ticks, `Tooltip.contentStyle`)
    - NO tocar la tarjeta resumen con gradiente `from-green-700 to-emerald-600`
    - _Requirements: 6.2, 6.4, 6.9_

  - [x] 8.3 Reemplazar el modal inline por el componente `Modal` y agregar `PocketRow`
    - Crear la función `PocketRow` con clases `bg-surface-hover px-4 py-2 rounded-control border border-border`
    - Reemplazar el modal inline de "División del día" (`fixed inset-0 bg-gray-900 ...`) por `<Modal open={showModal} onClose={() => setShowModal(false)} title="División del día" maxWidth="max-w-md">`
    - Incluir dentro del Modal los `PocketRow` existentes y el `<Button variant="danger" fullWidth onClick={() => setShowModal(false)} className="mt-6">Cerrar</Button>`
    - Verificar que al abrir el modal el overlay cierra al hacer clic y que existe la acción de cierre explícita
    - _Requirements: 6.5, 6.6_

  - [ ]* 8.4 Escribir smoke test para `SalesDailyPage`
    - Mockear el `fetch` para devolver datos de ventas mínimos y renderizar la página sin errores
    - Verificar que el componente no lanza errores en el render inicial
    - _Requirements: 6.7, 6.8, 8.4_

- [x] 9. Migrar `saleTable/page.js` — alta complejidad (PageContainer + Button + Modal)
  - [x] 9.1 Reemplazar el wrapper raíz y los botones principales
    - Importar `PageContainer`, `Button`, `Modal` y las dependencias necesarias
    - Reemplazar el `<div className="p-6 bg-gray-950 min-h-screen text-slate-200">` por `<PageContainer>`
    - Reemplazar el `<button className="bg-blue-800 ...">` de "Verificar transferencias" por `<Button variant="primary" icon={FaExchangeAlt} ...>`
    - Reemplazar el `<button className="bg-gray-800 ...">` de "+ Nueva venta" por `<Button variant="secondary" ...>`
    - _Requirements: 5.1, 5.2_

  - [x] 9.2 Reemplazar tabs de filtro y tarjetas de venta
    - Cambiar `bg-gray-800 text-white` (tab activo) por `bg-primary text-white`
    - Cambiar `bg-gray-600 text-gray-300` (tab inactivo) por `bg-surface-hover text-content-muted`
    - Cambiar los sub-filtros activos (`bg-green-700`, `bg-yellow-700`, `bg-blue-700`) por `bg-primary text-white`
    - Cambiar los sub-filtros inactivos (`bg-gray-600 text-gray-200`) por `bg-surface-hover text-content-muted`
    - Cambiar `bg-gray-800 rounded-lg` en tarjetas de venta por `bg-surface-hover rounded-control`
    - Cambiar `bg-gray-700` (avatar de tarjeta) por `bg-border`
    - _Requirements: 5.3, 5.9_

  - [x] 9.3 Reemplazar clases de texto, borde y botones de acción en tarjetas
    - Cambiar `text-slate-200` por `text-content` en textos principales
    - Cambiar `text-slate-300` por `text-content-muted` en textos secundarios
    - Cambiar `border-gray-600`, `border-gray-700`, `border-gray-800` por `border-border` o `border-border-hover` según la tabla de mapeo del diseño
    - Reemplazar botones `bg-emerald-700 hover:bg-emerald-600` ("Marcar como Hecho/Pagada", "Orden lista", "Imprimir") por `<Button variant="success" ...>`
    - Reemplazar botón "Confirmar pago" por `<Button variant="success" disabled={isConfirmingPayment}>`
    - Reemplazar botón "Compartir" por `<Button variant="secondary" icon={FaShareAlt}>`
    - Cambiar inputs de pago (`bg-gray-700 text-white`) por `bg-surface-hover border border-border text-content`
    - Cambiar select de tipo de pago por `bg-surface-hover border border-border text-content`
    - Cambiar el contenedor de rango de fechas pasadas por `bg-surface border border-border` y el input de fecha por `bg-surface-hover border border-border text-content`
    - Reemplazar botón "Buscar" de fechas por `<Button variant="success" size="sm" disabled={...}>`
    - _Requirements: 5.2, 5.4, 5.5_

  - [x] 9.4 Reemplazar los modales inline por el componente `Modal`
    - Reemplazar el modal inline de "Transferencias" (`fixed inset-0 bg-black/70...`) por `<Modal open={showTransfers} onClose={() => setShowTransfers(false)} title="Últimas 3 Transferencias" maxWidth="max-w-md">`
    - Reemplazar el modal inline de "Vista Previa" por `<Modal open={showPreview} onClose={closePreviewModal} title="Vista Previa de la Comanda" maxWidth="max-w-3xl">`
    - Cambiar el footer del modal preview (`bg-gray-800 border-t border-gray-700`) por `bg-surface-hover border-t border-border-hover`
    - Cambiar el panel de confirmación de pago (`bg-gray-900 border border-gray-700`) por `bg-surface border border-border`
    - Verificar que el `useEffect` existente de `document.body.style.overflow` se conserva intacto
    - Verificar que al hacer clic en el overlay de cada modal este se cierra (gestionado por el componente `Modal`)
    - _Requirements: 5.6_

  - [ ]* 9.5 Escribir smoke test para `DailySales`
    - Mockear el `fetch` para devolver datos de ventas mínimos y renderizar el componente sin errores
    - Verificar que el componente renderiza con `businessType="restaurante"` sin lanzar errores
    - Verificar que el componente renderiza con `businessType="fruver"` sin lanzar errores
    - _Requirements: 5.7, 5.8, 8.4_

- [x] 10. Checkpoint — Verificar todos los archivos migrados
  - Ejecutar `npm run test` y confirmar que todos los smoke tests pasan con cero fallos
  - Revisar visualmente en el navegador cada página migrada para confirmar que el layout y los colores son correctos
  - Pedir al usuario confirmación antes de continuar si hay dudas

- [x] 11. Crear el script `StyleAuditor` y registrar el npm script
  - [x] 11.1 Crear `scripts/audit-styles.js` con los patrones de detección y lista de excepciones
    - Crear el archivo `scripts/audit-styles.js` con la lógica de escaneo línea a línea de los seis archivos del alcance
    - Implementar los dos patrones regex: escalas numéricas (`bg|text|border|ring|fill|stroke`-`color`-`\d+`) y valores arbitrarios hex (`[#hex]`)
    - Incluir la lista `EXCEPTIONS` con los gradientes decorativos y colores de datos documentados en el diseño
    - Imprimir `[VIOLATION] archivo:línea — "clase"` por cada violación encontrada
    - Retornar exit code `1` si hay violaciones, `0` si está limpio
    - _Requirements: 7.1, 7.2, 7.3_

  - [x] 11.2 Registrar el script en `package.json`
    - Agregar `"audit:styles": "node scripts/audit-styles.js"` al objeto `scripts` de `package.json`
    - Verificar que `npm run audit:styles` ejecuta sin errores de sintaxis
    - _Requirements: 7.3_

- [x] 12. Verificación final con StyleAuditor
  - [x] 12.1 Ejecutar `npm run audit:styles` y corregir cualquier violación reportada
    - Ejecutar el auditor contra todos los archivos migrados
    - Para cada `[VIOLATION]` reportado, evaluar si es una excepción legítima (agregar a `EXCEPTIONS`) o una clase a migrar (corregir en el archivo)
    - Re-ejecutar hasta obtener exit code `0` y el mensaje "✓ Sin clases hardcodeadas en los archivos auditados."
    - _Requirements: 7.1, 7.2_

  - [ ]* 12.2 Ejecutar la suite de tests de integración existente
    - Ejecutar `npm run test` completo y verificar que todos los tests existentes pasan con exit code `0`
    - Confirmar que los tests de integración de API (`src/app/api/`) no se ven afectados
    - _Requirements: 8.3_

## Notes

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido, pero se recomienda ejecutarlas para la feature completa
- El orden de migración (Navbar → SaleInfoFields → OpenChecklist → ProductList → salesDaily → saleTable) va de menor a mayor complejidad
- `NavButton.jsx` es prerequisito de la migración de Navbar — debe completarse primero
- Los colores inline de Recharts en `salesDaily/page.js` **no se tocan en ningún caso** (son constantes JS, no clases Tailwind)
- El gradiente `from-green-700 to-emerald-600` de la tarjeta resumen en salesDaily se conserva intencionalmente
- El badge `bg-yellow-700` de "Editada" en saleTable se conserva intencionalmente
- La lista `EXCEPTIONS` del StyleAuditor cubre todos los colores hardcodeados intencionales documentados en el diseño
- Para cualquier color sin token equivalente, seguir el proceso: declarar variable CSS en `globals.css` → registrar mapeo en `tailwind.config.js` → usar la clase semántica (Req 7.4)
- Cada tarea referencia los requisitos específicos para trazabilidad completa

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "2.1"] },
    { "id": 2, "tasks": ["2.2", "4.1", "5.1"] },
    { "id": 3, "tasks": ["4.2", "4.3", "5.2"] },
    { "id": 4, "tasks": ["5.3", "7.1", "8.1"] },
    { "id": 5, "tasks": ["7.2", "8.2", "9.1"] },
    { "id": 6, "tasks": ["7.3", "8.3", "9.2"] },
    { "id": 7, "tasks": ["8.4", "9.3"] },
    { "id": 8, "tasks": ["9.4"] },
    { "id": 9, "tasks": ["9.5", "11.1"] },
    { "id": 10, "tasks": ["11.2"] },
    { "id": 11, "tasks": ["12.1"] },
    { "id": 12, "tasks": ["12.2"] }
  ]
}
```
