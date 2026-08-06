-- Fase 7 (F5, F6): tipo de pago, monto en efectivo y descuento de la venta.
-- Todos los campos son opcionales / con default, no afectan filas existentes
-- ni ningún otro campo de la tabla Sale.

ALTER TABLE `Sale`
  ADD COLUMN `paymentType` VARCHAR(191) NULL,
  ADD COLUMN `cashAmount` DOUBLE NULL,
  ADD COLUMN `discountPercent` DOUBLE NULL DEFAULT 0;
