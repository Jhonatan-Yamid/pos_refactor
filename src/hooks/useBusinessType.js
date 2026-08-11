"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/libs/apiClient";

export default function useBusinessType(defaultType = "restaurant") {
  const [businessType, setBusinessType] = useState(defaultType);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchBusinessConfig = async () => {
      try {
        const data = await apiGet("/api/business");
        if (isMounted && data?.type) {
          setBusinessType(String(data.type).toLowerCase());
        }
      } catch (err) {
        console.error("Error cargando configuración de negocio:", err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : String(err));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchBusinessConfig();

    return () => {
      isMounted = false;
    };
  }, []);

  return { businessType, isLoading, error };
}
