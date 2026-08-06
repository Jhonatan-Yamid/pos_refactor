"use client";

import { Search } from "lucide-react";

/** Contenedor de página estándar para las pantallas del dashboard. */
export function PageContainer({ children, maxWidth = "max-w-6xl" }) {
  return (
    <div className="min-h-screen bg-canvas text-content p-4 md:p-6">
      <div className={`${maxWidth} mx-auto`}>{children}</div>
    </div>
  );
}

/** Encabezado con título + botón de acción principal, igual en todas las pantallas. */
export function PageHeader({ title, action }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
      <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
      {action}
    </div>
  );
}

/** Tarjeta base reutilizada por formularios, items de lista y modales. */
export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`bg-surface border border-border rounded-card p-5 md:p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/** Input de búsqueda estándar con ícono, usado en todas las listas CRUD. */
export function SearchInput({ placeholder = "Buscar...", className = "", ...props }) {
  return (
    <div className={`relative ${className}`}>
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-content-subtle"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-3 pl-10 rounded-control bg-surface-hover border border-border text-content placeholder-content-subtle outline-none focus:border-border-hover transition"
        {...props}
      />
    </div>
  );
}

/** Mensaje estándar de "no hay resultados" para cualquier lista. */
export function EmptyState({ message = "No se encontraron resultados." }) {
  return <p className="text-content-subtle py-6 text-center">{message}</p>;
}
