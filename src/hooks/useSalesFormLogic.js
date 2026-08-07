// hooks/useSalesFormLogic.js
"use client";

import { useEffect, useState, useCallback } from "react";
import {
  calculateTotal as calculateTotalService,
  formatTicketText,
} from "@/services/saleService";

const useSalesFormLogic = (saleId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tableNumber, setTableNumber] = useState("");
  const [saleStatus, setSaleStatus] = useState("en proceso");
  const [game, setGame] = useState("");
  const [generalObservation, setGeneralObservation] = useState("");
  const [error, setError] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [availableGames, setAvailableGames] = useState([]);
  const [availableFetchedAdditions, setAvailableFetchedAdditions] = useState([]);
  const [orderType, setOrderType] = useState("En mesa");

  const isEditing = !!saleId;

  const fetchInitialData = useCallback(async () => {
    setIsLoading(true);
    try {
      const productsRes = await fetch("/api/product");
      if (!productsRes.ok) throw new Error("Error cargando productos");
      const productsData = await productsRes.json();
      if (!Array.isArray(productsData)) throw new Error("Formato de productos inválido");
      setAvailableProducts(productsData);

      const gamesRes = await fetch("/api/game");
      if (!gamesRes.ok) throw new Error("Error cargando juegos");
      const gamesData = await gamesRes.json();
      if (!Array.isArray(gamesData)) throw new Error("Formato de juegos inválido");
      setAvailableGames(gamesData);

      const additionsRes = await fetch("/api/product?category=adiciones");
      if (!additionsRes.ok) throw new Error("Error cargando adiciones");
      const additionsData = await additionsRes.json();
      if (!Array.isArray(additionsData)) throw new Error("Formato de adiciones inválido");
      setAvailableFetchedAdditions(additionsData);

      if (saleId) {
        const numericId = Number(saleId);
        const saleRes = await fetch(`/api/sale/${numericId}`);
        if (!saleRes.ok) throw new Error("Error cargando venta");
        const saleData = await saleRes.json();

        if (!saleData?.products) throw new Error("Estructura de datos de venta inválida");

        const mappedProducts = saleData.products.map((p) => ({
          ...p,
          additions:
            p.additions?.map((a) => ({
              id: a.id || a.name,
              name: a.name,
              price: a.price,
            })) || [],
          observation: p.observation || "",
          quantity: p.quantity || 1,
        }));

        setProducts(mappedProducts);
        setTableNumber(saleData.table?.toString() || "");
        setSaleStatus(saleData.status || "en proceso");
        setGeneralObservation(saleData.generalObservation || "");
        setGame(saleData.gameId?.toString() || "");
        setOrderType(saleData.orderType || "En mesa");
      }
    } catch (error) {
      console.error("Error loading initial data:", error);
      setError(error.message || "Error cargando datos iniciales");
    } finally {
      setIsLoading(false);
    }
  }, [saleId]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const calculateTotal = useCallback(
    () => calculateTotalService(products),
    [products]
  );

  const formatTicket = useCallback(
    () =>
      formatTicketText({
        products,
        total: calculateTotal(),
        tableNumber,
        orderType,
        generalObservation,
        game,
        availableGames,
        availableProducts,
      }),
    [products, calculateTotal, tableNumber, orderType, generalObservation, game, availableGames, availableProducts]
  );

  return {
    isLoading,
    isEditing,
    products,
    setProducts,
    searchTerm,
    setSearchTerm,
    suggestions,
    setSuggestions,
    tableNumber,
    setTableNumber,
    saleStatus,
    setSaleStatus,
    game,
    setGame,
    generalObservation,
    setGeneralObservation,
    error,
    setError,
    showPreview,
    setShowPreview,
    availableProducts,
    availableAdditions: availableFetchedAdditions,
    availableGames,
    calculateTotal,
    formatTicket,
    orderType,
    setOrderType,
  };
};

export default useSalesFormLogic;
