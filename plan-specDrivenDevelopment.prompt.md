# Plan Spec-Driven Development — Hierbamala

Este documento es la especificación de referencia para implementar pruebas, extraer lógica testable y preparar el refactor hacia multitenancy sin romper el comportamiento actual.

---

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

---

## 5. Plan de trabajo y fases

### Fase 0 — Seguridad y línea base
- T0.1 Inicializar git y commit del estado actual.
- T0.2 Guardar un `golden master` del request de impresión real como fixture.
- T0.3 Auditar `src/app/api/print-ticket/route.js` y documentar si está en uso.

### Fase 1 — Congelar especificación de datos
- T1.1 Revisar y aprobar este documento.
- T1.2 Diseñar columnas nuevas en `Sale`/`SaleProduct` para F5/F6 y migrar Prisma aditivamente.
- T1.3 Confirmar si F4 reutiliza `ProviderMovement` o requiere campos nuevos.

### Fase 2 — Infraestructura multitenant (A1)
- Implementar selección de perfil `.env.<businessId>`.
- Asegurar que el despliegue local/el build no requieran cambiar `.env` manualmente.

### Fase 3 — Sistema de diseño (A3)
- Consolidar tokens y el kit UI.
- Unificar estilos en el sistema de diseño.

### Fase 4 — CRUD estándar (A2)
- Migrar `products` al patrón modal-en-página.
- Unificar el hook `useCrud.js` como contrato de CRUD para entidades simples.

### Fase 5 — Descomposición estructural de `sales/page.js` (A4)
- Extraer componentes y hooks sin cambiar comportamiento.
- Al final, comparar el payload de impresión con el golden master.

### Fase 6 — F1, F2, F3
- Corregir la edición de cantidades.
- Añadir compartir en redes desde la tabla de ventas.
- Mostrar cálculo de vueltos en el preview antes de guardar.

### Fase 7 — F5, F6
- Implementar pagos `efectivo`/`transferencia`/`mixto`.
- Agregar descuento porcentual en línea y por comanda.
- Verificar el payload de impresión según la invariante 2.

### F8 — F4
- Agregar factura de proveedor para roles distintos de 1 con selector limitado.

### F9 — F7 y optimización de queries
- Corregir `GET /api/sale` para filtrar por fecha.
- Revisar otras queries lentas o over-fetching.
- Añadir índices Prisma cuando falten.

### F10 — API repetitivas (A5)
- Evaluar y aplicar factory CRUD donde tenga sentido.

### F11 — QA final
- Checklist de regresión manual.
- Validar diff del payload de impresión.
- Limpiar código muerto identificado.

---

## 6. Estrategia de pruebas y Spec-Driven Development

1. Elegir Vitest para pruebas unitarias y de contrato.
2. Configurar `vitest.config.js`, `package.json` y `src/setupTests.js`.
3. Extraer lógica de negocio a `src/services/`.
4. Escribir tests antes de refactorizar cada handler.
5. Usar SQLite local y un esquema de prueba para integraciones.
6. Mantener las rutas de producción separadas de las pruebas.

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
