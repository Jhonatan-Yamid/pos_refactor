"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { apiGet, apiPost, apiPut, apiDelete } from "@/libs/apiClient";

/**
 * Hook genérico para pantallas CRUD (listar, buscar, crear, editar, eliminar).
 *
 * Antes cada entidad (Proveedores, Ingredientes, Productos) reimplementaba
 * este mismo flujo con pequeñas diferencias. Ahora toda esa lógica vive en
 * un solo lugar: agregar un nuevo CRUD (por ejemplo "Clientes") es cuestión
 * de llamar useCrud({ endpoint: "/api/clients" }) y construir la UI con los
 * componentes de src/components/ui.
 *
 * @param {string} endpoint - Ruta de la API (GET/POST/PUT/DELETE).
 * @param {string[]} searchFields - Campos por los que se filtra con el buscador.
 * @param {boolean} refetchAfterMutation - Si true, vuelve a pedir la lista
 *   completa tras crear/editar en vez de fusionar la respuesta localmente.
 *   Útil cuando la respuesta de POST/PUT no trae todas las relaciones que
 *   la UI necesita (p. ej. Proveedores necesita `ingredients` en la lista).
 */
export function useCrud({ endpoint, searchFields = ["name"], refetchAfterMutation = false }) {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiGet(endpoint);
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const create = useCallback(
    async (payload) => {
      const created = await apiPost(endpoint, payload);
      if (refetchAfterMutation) {
        await fetchAll();
      } else {
        setItems((prev) => [...prev, created]);
      }
      return created;
    },
    [endpoint, refetchAfterMutation, fetchAll]
  );

  const update = useCallback(
    async (payload) => {
      const updated = await apiPut(endpoint, payload);
      if (refetchAfterMutation) {
        await fetchAll();
      } else {
        setItems((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
      }
      return updated;
    },
    [endpoint, refetchAfterMutation, fetchAll]
  );

  const remove = useCallback(
    async (id) => {
      await apiDelete(endpoint, { id });
      setItems((prev) => prev.filter((item) => item.id !== id));
    },
    [endpoint]
  );

  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;
    const term = searchTerm.toLowerCase();
    return items.filter((item) =>
      searchFields.some((field) => (item[field] || "").toString().toLowerCase().includes(term))
    );
  }, [items, searchTerm, searchFields]);

  return {
    items,
    filteredItems,
    searchTerm,
    setSearchTerm,
    loading,
    error,
    fetchAll,
    create,
    update,
    remove,
  };
}
