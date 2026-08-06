"use client";

/**
 * Campos de formulario estándar. Todos comparten el mismo look (fondo,
 * bordes, radios, focus) para que cualquier formulario nuevo (Proveedores,
 * Ingredientes, Productos o uno futuro) se vea igual sin repetir clases.
 */
const fieldBaseClass =
  "w-full p-3 rounded-control bg-surface-hover border border-border " +
  "text-content placeholder-content-subtle outline-none " +
  "focus:border-border-hover transition";

function FieldWrapper({ label, htmlFor, className = "", children }) {
  if (!label) return children;
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="block mb-1 text-sm font-medium text-content-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function Input({ label, id, className = "", ...props }) {
  return (
    <FieldWrapper label={label} htmlFor={id} className={className}>
      <input id={id} className={fieldBaseClass} {...props} />
    </FieldWrapper>
  );
}

export function Textarea({ label, id, className = "", ...props }) {
  return (
    <FieldWrapper label={label} htmlFor={id} className={className}>
      <textarea id={id} className={fieldBaseClass} {...props} />
    </FieldWrapper>
  );
}

export function Select({ label, id, className = "", children, ...props }) {
  return (
    <FieldWrapper label={label} htmlFor={id} className={className}>
      <select id={id} className={fieldBaseClass} {...props}>
        {children}
      </select>
    </FieldWrapper>
  );
}
