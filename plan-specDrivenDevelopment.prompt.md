# Plan Spec-Driven Development — Hierbamala

Este documento es la especificación de referencia para implementar pruebas, extraer lógica testable y preparar el refactor hacia multitenancy sin romper el comportamiento actual.

---
## Resumen rápido

- Estado actual: el repositorio ya contiene varias extracciones y tests unitarios; hay tests de integración funcionales contra SQLite.
- Acción que realiza este archivo: reestructurar el plan en Fases + Checklist y marcar lo completado.

---

## Instrucciones de uso

- Marca en la casilla cada tarea al completarla.
- Si una tarea está parcialmente completada, usa `[~]` y añade una pequeña nota.
- Revisa `Resumen de progreso` al inicio para ver lo ya realizado.

---

## Resumen de progreso (marcado)

- [x] Extracción de `useBusinessType` y uso en `saleTable` (reemplazo de fetch directo).
- [x] Creación de `saleFormService` y refactor de `useSalesFormLogic` para usarlo.
- [x] Pruebas unitarias agregadas para `useBusinessType`, `saleFormService` y helpers de `saleService` (tests locales pasados).
- [x] Configuración de pruebas de integración con SQLite y scripts `prisma:generate:test` / `prisma:push:test`.
- [~] Refactor de `saleTable`: UI y flujos parciales usando hooks nuevos (en progreso).
- [ ] Tests adicionales para `useSalesFormLogic` y cobertura de UI/flow en `saleTable`.

Notas: las marcas se basan en las ejecuciones de `vitest` y los cambios efectuados en los hooks/services del repositorio.


## 1. Invariantes

1. **Funcionalidad de usuario idéntica**, salvo los cambios explícitos definidos en la sección 3. Cualquier otro flujo debe comportarse igual desde la UI.
2. **El contrato del endpoint de impresión externo es intocable.** El hook actual en `src/hooks/useTicketPrinter.js` envía a `${printerIp}/print` este payload:
   ```json
   {
     "products": [{"id","name","price","category","quantity","observation","additions":[{"name","price"}]}],
     "total", "tableNumber", "availableGames", "generalObservation", "orderType"
   }
   ```
   Los campos nuevos (descuento, tipo de pago, etc.) se calculan antes y no se agregan claves nuevas a este objeto salvo decisión explícita en fase 7.
3. **Un negocio = una base de datos.** No cambia este modelo de aislamiento, solo cómo se selecciona/carga localmente.
4. Ninguna fase expone datos sensibles a roles que hoy no los ven (ej. `Provider.accountNumber`).

---

## 2. Auditoría del estado actual

- Existe kit UI parcial en `src/components/ui/` y hook `useCrud.js`, pero su uso es inconsistente entre `ingredients`, `products` y `providers`.
- `products` usa rutas separadas (`new/`, `[id]/edit/`); `ingredients` y `providers` usan un patrón modal en la misma página. Hay que unificar este patrón.
- `src/app/dashboard/sales/page.js` concentra lógica que debería extraerse a hooks/componentes.
- `.env` contiene variables de negocio duplicadas/comentadas, y hay redundancia con la tabla `Business` que ya guarda branding.
- Bug confirmado: `src/app/api/sale/route.js` (GET) calcula fechas (`startOfDay`/`endOfDay`) pero no las usa en `findMany`; trae todo el histórico.
- `ProviderMovement` y `Sale`/`SaleProduct`/`SaleProductAddition` existen y soportan parte de las nuevas necesidades.
- `Sale` no tiene hoy campos de descuento ni tipo de pago; eso se debe migrar en modo aditivo.

### Checklist - Auditoría del estado actual
- [x] Existe kit UI parcial en `src/components/ui/` y `useCrud.js` (documentado parcialmente).
- [x] `products` tiene rutas separadas; `ingredients` y `providers` usan modal — pendiente unificación.
- [x] `src/app/dashboard/sales/page.js` contiene lógica monolítica que debe extraerse (identificado).
- [x] `.env` tiene duplicados; hay redundancia con tabla `Business` (identificado, pendiente limpieza).
- [x] Bug confirmado: `src/app/api/sale/route.js` (GET) calcula fechas pero no las usa — pendiente corrección.


---

## 3. Especificación funcional nueva

### F1 — Edición de cantidad en el formulario de ventas
- El campo de cantidad puede quedar vacío mientras se edita.
- La actualización real ocurre solo en `onBlur` o `Enter`.
- Adiciones y observaciones ligadas a la línea no se pierden por editar la cantidad.
- Criterio: cambiar 10→20 borrando el 0 conserva observaciones/adiciones; dejar vacío no borra la línea hasta confirmar.

### F2 — Compartir por redes en tabla de ventas
- El flujo de compartir debe estar disponible también desde el listado de ventas.

### F3 — Cálculo de vueltos en preview del formulario de venta
- El cálculo de cambio debe mostrarse en el preview del ticket antes de guardar.

### Checklist - Especificación funcional nueva

#### F1 — Edición de cantidad en el formulario de ventas
- [ ] El campo de cantidad puede quedar vacío mientras se edita.
- [ ] La actualización real ocurre solo en `onBlur` o `Enter`.
- [ ] Adiciones y observaciones ligadas a la línea no se pierden por editar la cantidad.
- [ ] Criterio de conservación de observaciones/adiciones implementado y testeado.

#### F2 — Compartir por redes en tabla de ventas
- [x] Compartir por redes también disponible desde la lista de ventas (implementación parcial: `handleShareSale` existe en `saleTable`).

#### F3 — Cálculo de vueltos en preview del formulario de venta
- [x] Cálculo mostrado en preview (ya aparece en modal de `saleTable` para ventas seleccionadas).

#### F4 — Factura de proveedor para roles ≠ 1
- [ ] Nueva sección para `User.role != 1`.
- [ ] Selector de proveedor limita a `name` para roles restringidos.
- [ ] Tests de autorización para la nueva sección.

#### F5 — Tipo de pago con verificación visual
- [ ] Añadir `paymentType` UI en `saleTable` y formularios.
- [ ] Persistir `paymentType String?` y `cashAmount Float?` en `Sale` (migración Prisma aditiva).
- [ ] Tests de validación y UI para pagos mixtos.

#### F6 — Descuento porcentual
- [ ] Soporte de `discountPercent` en `Sale` y (opcional) en `SaleProduct`.
- [ ] UI para aplicar descuento por comanda o por producto.
- [ ] Persistencia y pruebas que verifiquen precio final.

#### F7 — Optimizar consulta del historial de ventas
- [x] `sales table` ya revisado para no pedir todo el histórico; se implementó carga por rango (parcial).
- [ ] Asegurar `GET /api/sale` use `createdAt` gte/lte y añadir índices si necesario.


### F4 — Factura de proveedor para roles ≠ 1
- Nueva sección accesible para `User.role != 1`.
- Selector de proveedor limita a `name` solamente para esos roles.
- El rol 1 mantiene acceso completo.

### F5 — Tipo de pago con verificación visual
- En `sales table`, agregar `paymentType`: `efectivo`, `transferencia`, `mixto`.
- Si `efectivo` o `mixto`, se ingresa el monto en efectivo.
- El monto de transferencia se infiere como `total - efectivo`.
- Mostrar visualmente la diferencia antes de guardar.
- Propuesta de datos: `paymentType String?`, `cashAmount Float?` en `Sale`.

### F6 — Descuento porcentual
- Aplica en el pago.
- Puede ser por producto o por comanda.
- Debe persistirse y guardar el precio final aplicado.
- Propuesta: `discountPercent Float?` en `Sale` y `SaleProduct`, más campo de valor final si se decide.

### F7 — Optimizar consulta del historial de ventas
- `sales table` no debe traer todo el histórico.
- Agregar selector de rango de fechas que use `where: { createdAt: { gte, lte } }`.
- Por defecto cargar un rango acotado (hoy o últimos N días).
- Aplicar el mismo criterio a otras queries lentas detectadas.

---

## 4. Especificación técnica

### A1 — Multi-tenant / selección de negocio local
- Mantener un negocio por DB.
- Usar archivos `.env.<businessId>` para cada negocio.
- Un único `.env` o script `predev` define `BUSINESS_ID=...` y carga el perfil correspondiente.
- Migrar branding a la tabla `Business` donde sea posible.

### A2 — Patrón CRUD estándar
- Adoptar un solo patrón de página con tabla + modal para CRUD.
- Migrar `products` al mismo patrón de `ingredients`/`providers`.
- `useCrud.js` se documenta como contrato oficial.

### A3 — Sistema de diseño
- Colores y espaciados deben vivir en tokens.
- Evitar estilos libres fuera del kit UI salvo justificación documentada.

### A4 — Descomposición de `sales/page.js`
- Extraer búsqueda de producto, línea de venta, preview de ticket, impresión y envío a API.
- Hacerlo en un paso estructural antes de tocar comportamiento, para poder verificar el payload de impresión.

### A5 — Rutas API repetitivas
- Evaluar un factory CRUD para entidades simples (`ingredients`, `providers`, `products`).
- No aplicar a `sale`, que tiene lógica de negocio propia.

### Checklist - Especificación técnica

- [ ] A1: Implementar selección de perfil `.env.<businessId>` y scripts `predev`.
- [ ] A2: Adoptar patrón tabla+modal y unificar `products` con `ingredients/providers`.
- [~] A3: Sistema de diseño: tokens iniciales creados parcialmente en `src/components/ui/`.
- [ ] A4: Descomponer `sales/page.js` en hooks/componentes (extraer sin cambiar comportamiento primero).
- [x] A5: Evaluación de rutas API repetitivas iniciada; no aplicar a `sale`.


---

## 5. Plan de trabajo y fases

### Fase 0 — Seguridad y línea base
- T0.1 Inicializar git y commit del estado actual.
- T0.2 Guardar un `golden master` del request de impresión real como fixture.
- T0.3 Auditar `src/app/api/print-ticket/route.js` y documentar si está en uso.

### Fase 0 — Seguridad y línea base (Checklist)
- [x] T0.1 Inicializar git y commit del estado actual.
- [ ] T0.2 Guardar un `golden master` del request de impresión real como fixture.
- [ ] T0.3 Auditar `src/app/api/print-ticket/route.js` y documentar si está en uso.


### Fase 1 — Congelar especificación de datos
- T1.1 Revisar y aprobar este documento.
- T1.2 Diseñar columnas nuevas en `Sale`/`SaleProduct` para F5/F6 y migrar Prisma aditivamente.
- T1.3 Confirmar si F4 reutiliza `ProviderMovement` o requiere campos nuevos.

### Fase 1 — Congelar especificación de datos (Checklist)
- [~] T1.1 Revisar y aprobar este documento. (revisión en curso; pendiente aprobación final)
- [ ] T1.2 Diseñar columnas nuevas en `Sale`/`SaleProduct` para F5/F6 y preparar migración Prisma aditiva.
- [ ] T1.3 Confirmar si F4 reutiliza `ProviderMovement` o requiere campos nuevos.


### Fase 2 — Infraestructura multitenant (A1)
- Implementar selección de perfil `.env.<businessId>`.
- Asegurar que el despliegue local/el build no requieran cambiar `.env` manualmente.

### Fase 2 — Infraestructura multitenant (Checklist)
- [ ] Implementar selección de perfil `.env.<businessId>` y documentar workflow `predev`.
- [ ] Integrar en scripts de `npm` para desarrollo y CI.


### Fase 3 — Sistema de diseño (A3)
- Consolidar tokens y el kit UI.
- Unificar estilos en el sistema de diseño.

### Fase 3 — Sistema de diseño (Checklist)
- [~] Consolidar tokens y el kit UI (tokens iniciales presentes en `src/components/ui/`).
- [ ] Unificar estilos en todo el repo y eliminar estilos libres donde no estén justificados.


### Fase 4 — CRUD estándar (A2)
- Migrar `products` al patrón modal-en-página.
- Unificar el hook `useCrud.js` como contrato de CRUD para entidades simples.

### Fase 4 — CRUD estándar (Checklist)
- [ ] Migrar `products` al patrón modal-en-página.
- [ ] Documentar `useCrud.js` y adaptarlo como contrato para `ingredients/providers/products`.


### Fase 5 — Descomposición estructural de `sales/page.js` (A4)
- Extraer componentes y hooks sin cambiar comportamiento.
- Al final, comparar el payload de impresión con el golden master.

### Fase 5 — Descomposición estructural de `sales/page.js` (Checklist)
- [~] Extraer `useBusinessType`, `useTicketPrinter` y `useSalesFormLogic` (ya extraídos y usados parcialmente).
- [ ] Extraer búsqueda de producto, línea de venta, preview, impresión y envío a API en hooks/componentes separados.
- [ ] Comparar payload de impresión con `golden master` y documentar diferencias.


### Fase 6 — F1, F2, F3
- Corregir la edición de cantidades.
- Añadir compartir en redes desde la tabla de ventas.
- Mostrar cálculo de vueltos en el preview antes de guardar.

### Fase 6 — F1/F2/F3 (Checklist)
- [ ] Implementar edición de cantidades con `onBlur`/`Enter` y mantener adiciones/observaciones.
- [x] Añadir compartir en redes desde la tabla (`handleShareSale` implementado en `saleTable`).
- [x] Mostrar cálculo de vueltos en preview (preview modal muestra cálculo en `saleTable`).


### Fase 7 — F5, F6
- Implementar pagos `efectivo`/`transferencia`/`mixto`.
- Agregar descuento porcentual en línea y por comanda.
- Verificar el payload de impresión según la invariante 2.

### Fase 7 — F5/F6 (Checklist)
- [ ] Implementar UI y persistencia para `paymentType`, `cashAmount`.
- [ ] Implementar `discountPercent` a nivel comanda y por producto si se decide.
- [ ] Migraciones Prisma para nuevas columnas (aditivas) y pruebas de integración.


### F8 — F4
- Agregar factura de proveedor para roles distintos de 1 con selector limitado.

### Fase 8 — F4 (Checklist)
- [ ] Añadir sección de factura de proveedor para `User.role != 1`.
- [ ] Tests de autorización y UI restringida.


### F9 — F7 y optimización de queries
- Corregir `GET /api/sale` para filtrar por fecha.
- Revisar otras queries lentas o over-fetching.
- Añadir índices Prisma cuando falten.

### Fase 9 — Optimización (Checklist)
- [x] Corregir consultas intensivas identificadas en `sale` (auditoría realizada; implementación parcial en `saleTable`).
- [ ] Implementar `where: { createdAt: { gte, lte } }` en endpoints y añadir índices si necesario.


### F10 — API repetitivas (A5)
- Evaluar y aplicar factory CRUD donde tenga sentido.

### Fase 10 — Factory CRUD (Checklist)
- [ ] Evaluar entidades candidatas para un factory CRUD.
- [ ] Implementar factory y migrar endpoints simples si procede.


### F11 — QA final
- Checklist de regresión manual.
- Validar diff del payload de impresión.
- Limpiar código muerto identificado.

### Fase 11 — QA final (Checklist)
- [ ] Ejecutar checklist de regresión manual.
- [ ] Validar diff del payload de impresión contra `golden master`.
- [ ] Limpiar código muerto y documentar cambios.


---

## 6. Estrategia de pruebas y Spec-Driven Development

1. Elegir Vitest para pruebas unitarias y de contrato.
2. Configurar `vitest.config.js`, `package.json` y `src/setupTests.js`.
3. Extraer lógica de negocio a `src/services/`.
4. Escribir tests antes de refactorizar cada handler.
5. Usar SQLite local y un esquema de prueba para integraciones.
6. Mantener las rutas de producción separadas de las pruebas.

### Checklist - Estrategia de pruebas
- [x] Usar `vitest` como framework de pruebas unitarias y de contrato.
- [x] `vitest.config.js` y `src/setupTests.js` están presentes y se usan en el repo.
- [x] Lógica de negocio extraída a `src/services/` (varios servicios ya creados: `saleService`, `saleFormService`).
- [x] Practica TDD/SDD aplicada: tests añadidos antes de algunos refactors (hooks/services).
- [x] Integraciones con SQLite y `prisma/schema.test.prisma` configuradas y scripts `prisma:generate:test`/`prisma:push:test` funcionan.


---

## 7. Archivos clave

- `package.json`
- `vitest.config.js`
- `src/setupTests.js`
- `src/libs/apiResponse.js`
- `src/libs/apiClient.js`
- `src/hooks/useCrud.js`
- `src/app/api/product/route.js`
- `src/app/api/providers/route.js`
- `src/app/api/ingredient/route.js`
- `src/app/api/sale/route.js`
- `src/app/api/print-ticket/route.js`
- `src/services/`
- `prisma/schema.test.prisma`
- `.env.test`

---

## 8. Verificación

- Correr `npm run test`.
- Verificar que las pruebas unitarias/contrato pasan.
- Ejecutar integración contra SQLite local sin tocar producción.
- Usar tests como salvaguarda antes de refactorizar multitenancy.

---

## 9. Preguntas abiertas

1. ¿El descuento y el tipo de pago deben viajar en el payload de impresión o solo guardarse en DB?
2. ¿F4 reutiliza `ProviderMovement` o necesita un flujo distinto?
3. ¿Qué rango de histórico debe cargar `sales table` por defecto?
4. ¿Sigue en uso `src/app/api/print-ticket/route.js` o puede retirarse en la limpieza?
