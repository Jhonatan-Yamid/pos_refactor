"use client";

/**
 * Modal genérico. Se usa para el modal de pedido a proveedor, el modal de
 * movimientos, y cualquier modal futuro — así todos comparten el mismo
 * fondo, blur, y comportamiento responsive.
 */
export default function Modal({ open, onClose, title, children, maxWidth = "max-w-lg" }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className={`bg-surface w-full ${maxWidth} rounded-card p-6 border border-border max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
