"use client";

/**
 * Botón estándar de la aplicación.
 *
 * Variantes:
 *  - primary   → acción principal (guardar, crear)
 *  - secondary → acción secundaria (copiar, ver más)
 *  - danger    → acción destructiva (eliminar)
 *  - ghost     → acción de bajo énfasis (cancelar)
 *
 * Todas las variantes usan los tokens de color definidos en globals.css,
 * así que cambiar un color ahí actualiza todos los botones de la app.
 */
const VARIANTS = {
  primary:
    "bg-primary hover:bg-primary-hover text-white",
  secondary:
    "bg-surface hover:bg-surface-hover text-content border border-border",
  success:
    "bg-success-hover hover:bg-success text-white",
  danger:
    "bg-danger-hover hover:bg-danger text-white",
  ghost:
    "bg-surface-hover hover:bg-border text-content",
};

const SIZES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3",
  none: "",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  fullWidth = false,
  className = "",
  children,
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 rounded-control font-medium
        transition disabled:opacity-50 disabled:cursor-not-allowed
        ${VARIANTS[variant] || VARIANTS.primary}
        ${SIZES[size] || SIZES.md}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
