# Requirements Document

## Introduction

El proyecto cuenta con un paquete de UI propio (`src/components/ui/`) que encapsula componentes reutilizables (`Button`, `Input`, `Textarea`, `Select`, `Card`, `PageContainer`, `PageHeader`, `SearchInput`, `EmptyState`, `Modal`) y un sistema de design tokens en `globals.css` mapeados a clases semánticas de Tailwind (`bg-canvas`, `bg-surface`, `text-content`, `border-border`, `bg-primary`, `bg-danger`, etc.).

Sin embargo, una parte significativa de los componentes y páginas del dashboard todavía usa clases de Tailwind hardcodeadas (por ejemplo, `bg-gray-950`, `bg-emerald-700`, `text-slate-200`, colores hexadecimales literales como `bg-[#0b0f12]`) en lugar de los tokens semánticos definidos. Esto genera inconsistencia visual, dificulta el mantenimiento del sistema de diseño y hace que cualquier cambio de tema requiera editar múltiples archivos en lugar de solo `globals.css`.

Esta feature cubre la migración completa de todos los archivos pendientes al sistema de UI establecido: reemplazando clases hardcodeadas por tokens semánticos y primitivos de UI donde aplique, sin alterar el comportamiento funcional de ningún componente.

## Glossary

- **UI_Library**: Conjunto de componentes reutilizables ubicados en `src/components/ui/` (`Button`, `Input`, `Textarea`, `Select`, `Card`, `PageContainer`, `PageHeader`, `SearchInput`, `EmptyState`, `Modal`).
- **Design_Token**: Variable CSS declarada en `globals.css` (`:root`) y mapeada a una clase semántica de Tailwind en `tailwind.config.js` (ej. `bg-surface`, `text-content`, `border-border`).
- **Hardcoded_Class**: Clase de Tailwind que referencia directamente una escala de color sin pasar por un Design_Token (ej. `bg-gray-950`, `bg-emerald-700`, `text-slate-200`, o valores arbitrarios `bg-[#0b0f12]`).
- **Non_Migrated_Component**: Archivo JSX/JS que contiene una o más Hardcoded_Classes en lugar de Design_Tokens o primitivos de la UI_Library.
- **Migrated_Component**: Archivo JSX/JS que usa exclusivamente Design_Tokens y primitivos de la UI_Library para colores, fondos, bordes y radios, sin Hardcoded_Classes.
- **StyleAuditor**: Proceso o herramienta (linter/grep) que verifica la ausencia de Hardcoded_Classes en los archivos del proyecto.
- **Regression**: Cambio accidental de comportamiento funcional o visual causado durante la migración de estilos.

---

## Requirements

### Requirement 1: Migración de Navbar al sistema de tokens

**User Story:** Como desarrollador, quiero que `Navbar.jsx` use exclusivamente Design_Tokens, para que el color de la barra de navegación se controle desde `globals.css` junto con el resto de la aplicación.

#### Acceptance Criteria

1. THE `Navbar` SHALL renderizar su contenedor `<nav>` con la clase `bg-canvas`, sin aplicar directamente `bg-gray-950`.
2. THE `Navbar` SHALL aplicar las clases `bg-primary` y `hover:bg-primary-hover` en el elemento de Login/Logout, sin aplicar directamente `bg-emerald-700` ni `hover:bg-emerald-500`.
3. WHEN `Navbar` es renderizado con una sesión activa, THE `Navbar` SHALL mostrar los mismos enlaces de navegación y opciones condicionales por rol que mostraba antes de la migración.
4. WHEN `Navbar` es renderizado sin sesión activa, THE `Navbar` SHALL mostrar únicamente el enlace de Login, igual que antes de la migración.
5. THE `Navbar` SHALL usar el componente `Button` de la UI_Library con `variant="primary"` para las acciones de Login y Logout, sin renderizar un elemento `<button>` o `<a>` nativo con clases de color hardcodeadas para esas acciones.
6. THE `Navbar` SHALL no contener ninguna de las clases `bg-gray-950`, `bg-emerald-700`, `hover:bg-emerald-500` tras completar la migración.

---

### Requirement 2: Migración de ProductList al sistema de tokens

**User Story:** Como desarrollador, quiero que `ProductList.jsx` use Design_Tokens en lugar de colores hardcodeados, para que los colores de las tarjetas de productos y controles sigan el sistema de diseño.

#### Acceptance Criteria

1. THE `ProductList` SHALL reemplazar todos los usos de `bg-gray-900`, `bg-gray-800`, `bg-[#0b0f12]` por los tokens equivalentes (`bg-canvas`, `bg-surface`, `bg-surface-hover`).
2. THE `ProductList` SHALL reemplazar `text-slate-200`, `text-gray-400`, `text-gray-500` por los tokens `text-content`, `text-content-muted`, `text-content-subtle`.
3. THE `ProductList` SHALL reemplazar `bg-emerald-700`, `hover:bg-emerald-600` y `text-emerald-400` en botones de acción por los tokens `bg-success-hover`, `hover:bg-success` y `text-success`.
4. THE `ProductList` SHALL reemplazar `border-gray-800`, `border-gray-700` por `border-border` y `border-border-hover`.
5. WHEN `ProductList` es renderizado con productos en modo restaurante o fruver, THE `ProductList` SHALL conservar los siguientes comportamientos: incrementar y decrementar la cantidad de un producto, registrar y mostrar el texto de observaciones por producto, y seleccionar y deseleccionar adiciones por producto.
6. THE `ProductList` SHALL aplicar la clase `rounded-control` (definida en `tailwind.config.js`) en lugar de `rounded-md` o `rounded-lg` en inputs y contenedores internos cuyo valor de radio sea idéntico al valor configurado para `rounded-control` en `tailwind.config.js`.
7. IF un elemento usa `rounded-md` o `rounded-lg` con un valor de radio distinto al configurado para `rounded-control` en `tailwind.config.js`, THEN THE `ProductList` SHALL conservar la clase original sin reemplazarla.
8. THE `ProductList` SHALL no contener ninguna de las clases `bg-gray-900`, `bg-gray-800`, `bg-[#0b0f12]`, `text-slate-200`, `text-gray-400`, `text-gray-500`, `bg-emerald-700`, `hover:bg-emerald-600`, `text-emerald-400`, `border-gray-800` ni `border-gray-700` tras completar la migración.

---

### Requirement 3: Migración de SaleInfoFields al sistema de tokens

**User Story:** Como desarrollador, quiero que `SaleInfoFields.jsx` use Design_Tokens, para que los campos de información del pedido sean visualmente consistentes con el resto de los formularios.

#### Acceptance Criteria

1. THE `SaleInfoFields` SHALL renderizar su contenedor raíz con las clases `bg-surface` y `border-border`, sin aplicar directamente `bg-[#0b0f12]` ni `border-gray-800`.
2. THE `SaleInfoFields` SHALL usar los componentes `Input`, `Select` y `Textarea` de la UI_Library para los campos de formulario, sin aplicar directamente `bg-[#050607]`, `border-gray-800` ni `focus:ring-emerald-500` en esos elementos.
3. THE `SaleInfoFields` SHALL renderizar los textos de labels con la clase `text-content-muted`, sin aplicar directamente `text-gray-300` ni `text-gray-400`.
4. WHEN `SaleInfoFields` es renderizado con `businessType === "fruver"`, THE `SaleInfoFields` SHALL no mostrar en el DOM los campos `tableNumber`, `orderType` y `saleStatus`, y SHALL inicializar sus valores en cadena vacía.
5. WHEN `SaleInfoFields` es renderizado con `businessType !== "fruver"`, THE `SaleInfoFields` SHALL mostrar y hacer editables de forma independiente los campos de número de mesa (`tableNumber`), tipo de pedido (`orderType`), estado de la venta (`saleStatus`) y observaciones.
6. THE `SaleInfoFields` SHALL no contener ninguna de las clases `bg-[#0b0f12]`, `bg-[#050607]`, `border-gray-800`, `focus:ring-emerald-500`, `text-gray-300` ni `text-gray-400` tras completar la migración.

---

### Requirement 4: Migración de openChecklist al sistema de tokens y UI_Library

**User Story:** Como desarrollador, quiero que la página de apertura use Design_Tokens y el componente `Button`, para que sea visualmente coherente con el resto del dashboard.

#### Acceptance Criteria

1. THE `OpenChecklist` SHALL renderizar su contenedor raíz usando el componente `PageContainer` de la UI_Library, sin aplicar directamente la clase `p-4` como único contenedor de layout.
2. THE `OpenChecklist` SHALL renderizar el fondo del contenedor principal con `bg-canvas` y los bordes del mismo con `border-border`, sin aplicar directamente `bg-gray-950` ni `border-white`.
3. THE `OpenChecklist` SHALL renderizar las tarjetas internas con `bg-surface` y sus bordes con `border-border`, sin aplicar directamente `bg-gray-800` ni `border-gray-700`.
4. THE `OpenChecklist` SHALL renderizar el botón "Limpiar Checklist" usando el componente `Button` de la UI_Library con `variant="secondary"`, sin aplicar directamente `bg-blue-500` ni `hover:bg-blue-600`.
5. THE `OpenChecklist` SHALL renderizar los textos de título con `text-content` y los textos secundarios con `text-content-muted`, sin aplicar directamente `text-slate-200` ni `text-slate-400`.
6. WHEN el usuario presiona el botón "Limpiar Checklist", THE `OpenChecklist` SHALL restablecer todos los checkboxes al estado desmarcado, de forma que ningún ítem presente marca visual visible tras la acción.

---

### Requirement 5: Migración de saleTable (Ventas) al sistema de tokens y UI_Library

**User Story:** Como desarrollador, quiero que la página de ventas use Design_Tokens y los componentes de la UI_Library disponibles, para que la pantalla más visitada del sistema sea visualmente consistente.

#### Acceptance Criteria

1. THE `DailySales` SHALL renderizar su contenedor raíz usando el componente `PageContainer` de la UI_Library, sin aplicar directamente `bg-gray-950` ni `min-h-screen` en ese elemento.
2. THE `DailySales` SHALL renderizar los botones de acción usando el componente `Button` de la UI_Library con la variante correspondiente: `variant="secondary"` donde se usaba `bg-gray-800`, `variant="primary"` donde se usaba `bg-blue-800`, y `variant="success"` donde se usaba `bg-emerald-700`.
3. THE `DailySales` SHALL renderizar las tarjetas de venta con `bg-surface` donde se usaba `bg-gray-800` y con `bg-surface-hover` donde se usaba `bg-gray-900`.
4. THE `DailySales` SHALL renderizar los bordes de tarjetas y divisores con `border-border`, sin aplicar directamente `border-gray-600`, `border-gray-700` ni `border-gray-800`.
5. THE `DailySales` SHALL renderizar los textos con `text-content` donde se usaba `text-slate-200`, con `text-content-muted` donde se usaba `text-gray-400`, y con `text-content-subtle` donde se usaba `text-gray-300`.
6. THE `DailySales` SHALL renderizar los modales de "Transferencias" y "Vista Previa" usando el componente `Modal` de la UI_Library, de forma que: al hacer clic en el overlay se cierre el modal, el scroll del body quede bloqueado mientras el modal está abierto, y exista una acción explícita de cierre funcional.
7. WHEN el usuario navega entre pestañas (hoy / anteriores) y sub-filtros, THE `DailySales` SHALL conservar la misma lógica de filtrado y consulta al servidor que tenía antes de la migración.
8. WHEN el usuario avanza el estado de una venta o confirma un pago, THE `DailySales` SHALL conservar exactamente la misma lógica de negocio, incluyendo el flujo de descuento, tipo de pago y diferenciación restaurante/fruver.
9. THE `DailySales` SHALL renderizar los tabs de filtro con `bg-primary` en la pestaña activa y con `bg-surface-hover` en las pestañas inactivas, sin aplicar directamente `bg-green-700`, `bg-yellow-700`, `bg-blue-700` ni `bg-gray-600`.

---

### Requirement 6: Migración de salesDaily (Reportes) al sistema de tokens

**User Story:** Como desarrollador, quiero que la página de reportes de ventas diarias use Design_Tokens, para que sea visualmente consistente con el resto del dashboard sin afectar las visualizaciones de Recharts.

#### Acceptance Criteria

1. THE `SalesDailyPage` SHALL renderizar su contenedor raíz usando el componente `PageContainer` de la UI_Library, sin aplicar directamente `bg-gray-950` en ese elemento.
2. THE `SalesDailyPage` SHALL renderizar los contenedores de tabla y gráfico con `bg-surface` donde se usaba `bg-gray-900`, con `bg-surface-hover` donde se usaba `bg-gray-800`, y con `border-border` donde se usaba `border-gray-700`.
3. THE `SalesDailyPage` SHALL renderizar los selects de rango y promedio móvil usando el componente `Select` de la UI_Library, sin aplicar directamente `bg-gray-800` ni `border-gray-700` en esos elementos.
4. THE `SalesDailyPage` SHALL renderizar los encabezados con `text-content` donde se usaba `text-slate-200`, y los labels secundarios con `text-content-muted` donde se usaba `text-slate-400` o `text-gray-400`.
5. THE `SalesDailyPage` SHALL renderizar el modal de división del día usando el componente `Modal` de la UI_Library, sin aplicar directamente `bg-gray-900` ni `border-gray-700` en ese overlay.
6. THE `SalesDailyPage` SHALL renderizar el botón "Cerrar" del modal usando el componente `Button` de la UI_Library con `variant="danger"`.
7. WHEN la página carga por primera vez, THE `SalesDailyPage` SHALL ejecutar el fetch de datos y calcular el promedio móvil y la variación porcentual con el mismo resultado que antes de la migración.
8. WHEN el usuario cambia el rango seleccionado, THE `SalesDailyPage` SHALL volver a ejecutar el fetch y recalcular promedio móvil y variación porcentual con el mismo resultado que antes de la migración.
9. THE `SalesDailyPage` SHALL mostrar los colores de barras y líneas del gráfico de Recharts sin cambios respecto al estado pre-migración, dado que esos colores se definen como constantes JavaScript y no como clases Tailwind.

---

### Requirement 7: Prohibición de Hardcoded_Classes en archivos migrados

**User Story:** Como desarrollador, quiero que los archivos migrados no contengan Hardcoded_Classes, para que cualquier futuro cambio de tema solo requiera editar `globals.css`.

#### Acceptance Criteria

1. THE `StyleAuditor` SHALL verificar que ningún Migrated_Component contenga, tras la migración, clases Tailwind con los prefijos `bg-`, `text-`, `border-`, `ring-`, `fill-` o `stroke-` seguidos de una escala de color numérica (`gray-\d+`, `slate-\d+`, `emerald-\d+`, `blue-\d+`, `red-\d+`, `green-\d+`) ni valores arbitrarios del patrón `\[#[0-9a-fA-F]{3,6}\]`.
2. IF un Migrated_Component contiene una Hardcoded_Class tras la migración, THEN THE `StyleAuditor` SHALL reportar el nombre del archivo y el número de línea exacto donde se encontró la clase, antes de finalizar su ejecución.
3. THE `StyleAuditor` SHALL ser ejecutable como un comando de terminal en la raíz del proyecto usando únicamente herramientas ya declaradas en `package.json` o utilidades nativas del sistema operativo (`grep`), sin requerir instalación de paquetes adicionales.
4. WHERE un color específico no tiene un Design_Token equivalente en el sistema actual, THEN THE desarrollador SHALL declarar primero la variable CSS correspondiente en el bloque `:root` de `globals.css` y, a continuación, registrar su mapeo como clase semántica en `tailwind.config.js`, antes de usar esa clase en cualquier componente.

---

### Requirement 8: Ausencia de Regresiones funcionales

**User Story:** Como usuario final, quiero que la migración de estilos no rompa ninguna funcionalidad existente, para que la experiencia de uso sea idéntica antes y después del cambio.

#### Acceptance Criteria

1. WHEN cualquier Migrated_Component es renderizado en el navegador tras la migración, THE componente SHALL presentar los mismos elementos interactivos, textos visibles y estructura de layout que se registraron en el snapshot visual tomado antes de iniciar la migración.
2. WHEN el usuario interactúa con un Migrated_Component (clics, entradas de texto, selects, checkboxes, apertura y cierre de modales), THE componente SHALL producir las mismas actualizaciones de estado y efectos secundarios que producía antes de la migración.
3. THE suite de tests existente en el proyecto SHALL completar su ejecución con cero fallos (`npm run test` retorna exit code 0) tras completar la migración de cada componente.
4. IF un flujo crítico de un Migrated_Component no está cubierto por la suite de tests existente, THEN THE desarrollador SHALL agregar al menos un smoke test que verifique que el componente renderiza sin lanzar errores cuando se le pasan sus props mínimas requeridas, y ese smoke test SHALL pasar antes de considerar el componente como Migrated_Component.
