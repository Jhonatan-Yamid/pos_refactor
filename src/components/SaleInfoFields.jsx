"use client";
import React, { useEffect } from "react";
import { FaChair, FaTruck, FaGamepad, FaStickyNote } from "react-icons/fa";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md"; // Icono opcional para el estado de la venta
import { Input, Select, Textarea } from "@/components/ui/FormField";

const SaleInfoFields = ({
  tableNumber,
  setTableNumber,
  game,
  setGame,
  availableGames = [],
  generalObservation,
  setGeneralObservation,
  orderType,
  setOrderType,
  tableInputRef,
  businessType,
  saleStatus,  
  setSaleStatus,  
}) => {
  const isFruver = businessType === "fruver";
  
  useEffect(() => {
    if (isFruver && tableNumber !== "Mostrador") {
      setTableNumber("Mostrador");
    }

    if (isFruver && orderType !== "Pagado") {
      setOrderType("Pagado");
    }

    if (isFruver && saleStatus !== "en tienda") {
      setSaleStatus("en tienda");
    }
  }, [isFruver, tableNumber, setTableNumber, orderType, setOrderType, saleStatus, setSaleStatus]);

  return (
    <div className="w-full bg-surface border border-border rounded-2xl p-4 md:p-6 space-y-6 shadow-sm">
      <h3 className="text-lg font-semibold text-content">
        Información del Pedido
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Número de Mesa - Se oculta si es fruver */}
        {!isFruver && (
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium flex items-center gap-2 text-content-muted">
              <FaChair className="text-content-muted" />
              Número de Mesa <span className="text-red-400">*</span>
            </label>

            <Input
              ref={tableInputRef}
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              placeholder="Ej: 12"
            />
          </div>
        )}

        {/* Tipo de Pedido */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium flex items-center gap-2 text-content-muted">
            <FaTruck className="text-content-muted" />
            Tipo de Pedido
          </label>

          <Select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
          >
            {isFruver ? (
              <>
                <option value="Pagado">Pagado</option>
                <option value="Pendiente">Pendiente</option>
              </>
            ) : (
              <>
                <option value="En mesa">En mesa</option>
                <option value="Llevar">Llevar</option>
                <option value="Mixto">Mixto</option>
              </>
            )}
          </Select>
        </div>

        {/* 👇 NUEVO: Estado de la Venta - Se renderiza en la segunda columna SOLO si es Fruver */}
        {isFruver && (
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium flex items-center gap-2 text-content-muted">
              <MdOutlineAssignmentTurnedIn className="text-content-muted" size={18} />
              Estado de la Venta
            </label>

            <Select
              value={saleStatus || "en tienda"}
              onChange={(e) => setSaleStatus(e.target.value)}
            >
              <option value="en tienda">En tienda</option>
              <option value="domicilio">Domicilio</option>
            </Select>
          </div>
        )}

        {/* Juegos - Se oculta si es fruver */}
        {!isFruver && (
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-medium flex items-center gap-2 text-content-muted">
              <FaGamepad className="text-content-muted" />
              Juegos de Mesa
            </label>

            <Select
              value={game}
              onChange={(e) => setGame(e.target.value)}
            >
              <option value="">Selecciona un juego</option>
              {availableGames.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </Select>
          </div>
        )}
      </div>

      {/* Observaciones */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium flex items-center gap-2 text-content-muted">
          <FaStickyNote className="text-content-muted" />
          Observaciones Generales
        </label>

        <Textarea
          value={generalObservation}
          onChange={(e) => setGeneralObservation(e.target.value)}
          placeholder="Instrucciones generales para cocina o servicio..."
        />
      </div>
    </div>
  );
};

export default SaleInfoFields;