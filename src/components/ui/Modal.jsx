"use client";

/**
 * Modal genérico. Se usa para el modal de pedido a proveedor, el modal de
 * movimientos, y cualquier modal futuro — así todos comparten el mismo
 * fondo, blur, y comportamiento responsive.
 */
export default function Modal({ open, onClose, title, children, maxWidth = "max-w-lg", fullScreen = false }) {
  if (!open) return null;

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div
          className="bg-surface w-full h-full max-h-screen overflow-hidden flex flex-col relative"
          onClick={(e) => e.stopPropagation()}
        >
          {title && (
            <div className="flex justify-between items-center px-6 py-4 border-b border-border flex-shrink-0">
              <h2 className="text-content text-2xl font-semibold">{title}</h2>
              <button className="text-content hover:text-content-muted" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className={`bg-surface w-full ${maxWidth} rounded-card p-6 border border-border max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button className="text-content-muted hover:text-content" onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
