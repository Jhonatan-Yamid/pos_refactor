"use client";
import useTicketPrinter from "@/hooks/useTicketPrinter";
import { useState, useEffect, useCallback } from "react";
import { FaCashRegister, FaEdit, FaEye, FaTrashAlt, FaExchangeAlt, FaEyeSlash, FaShareAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaPrint } from "react-icons/fa";

function DailySales() {
    const { printTicket } = useTicketPrinter();
    const { data: session } = useSession();
    const [subTab, setSubTab] = useState("pendientes");
    const [businessType, setBusinessType] = useState("restaurant");
    const [sales, setSales] = useState([]);
    const [todaySales, setTodaySales] = useState([]);
    const [pastSales, setPastSales] = useState([]);
    const [showTotal, setShowTotal] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const [activeTab, setActiveTab] = useState("today");
    const [selectedSaleId, setSelectedSaleId] = useState(null);
    const [cashReceived, setCashReceived] = useState("");

    // F5: tipo de pago + monto en efectivo cuando se marca una venta como
    // pagada. F6: % de descuento aplicado a toda la comanda en ese momento.
    const [paymentType, setPaymentType] = useState("efectivo");
    const [cashAmountInput, setCashAmountInput] = useState("");
    const [discountPercentInput, setDiscountPercentInput] = useState("0");
    const [isConfirmingPayment, setIsConfirmingPayment] = useState(false);

    // F7: rango de fechas para "Ventas Anteriores" (por defecto, últimos 7
    // días) — evita traer todo el histórico.
    const todayIso = new Date().toISOString().slice(0, 10);
    const sevenDaysAgoIso = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
    const [pastStartDate, setPastStartDate] = useState(sevenDaysAgoIso);
    const [pastEndDate, setPastEndDate] = useState(todayIso);

    // Estados para la funcionalidad de transferencias
    const [showTransfers, setShowTransfers] = useState(false);
    const [lastTransfers, setLastTransfers] = useState([]);
    const [loadingTransfers, setLoadingTransfers] = useState(false);

    useEffect(() => {
        const fetchBusinessConfig = async () => {
            try {
                const res = await fetch("/api/business");
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.type) {
                        const type = data.type.toLowerCase();
                        setBusinessType(type);
                        if (type === "fruver") {
                            setSubTab("domicilios pendientes");
                        }
                    }
                }
            } catch (err) {
                console.error("Error cargando configuración de negocio:", err);
            }
        };
        fetchBusinessConfig();
    }, []);

    // Bloquear scroll del fondo al abrir modales
    useEffect(() => {
        if (showPreview || showTransfers) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showPreview, showTransfers]);

    const getOperationalDayRange = () => {
        const now = new Date();
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5);
        const endOfToday = new Date(startOfToday);
        endOfToday.setDate(endOfToday.getDate() + 1);
        endOfToday.setHours(4, 0, 0, 0);
        if (now < endOfToday && now.getHours() < 4) {
            startOfToday.setDate(startOfToday.getDate() - 1);
            endOfToday.setDate(endOfToday.getDate() - 1);
        }
        return { start: startOfToday, end: endOfToday };
    };

    // F7: antes esto traía TODO el histórico de /api/sale y lo partía en
    // today/past en el cliente — esa era la consulta pesada que iba
    // ralentizando la app. Ahora se piden solo las ventas de hoy (rango
    // operativo) y, aparte, las ventas anteriores por un rango de fecha
    // explícito que el usuario controla.
    const fetchTodaySales = useCallback(async () => {
        try {
            const { start, end } = getOperationalDayRange();
            const res = await fetch(
                `/api/sale?startDate=${encodeURIComponent(start.toISOString())}&endDate=${encodeURIComponent(end.toISOString())}`
            );
            const data = await res.json();
            setTodaySales(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error al obtener las ventas de hoy:", error);
        }
    }, []);

    const fetchPastSales = useCallback(async (start, end) => {
        try {
            const startDate = new Date(`${start}T00:00:00`);
            const endDate = new Date(`${end}T23:59:59.999`);
            const res = await fetch(
                `/api/sale?startDate=${encodeURIComponent(startDate.toISOString())}&endDate=${encodeURIComponent(endDate.toISOString())}`
            );
            const data = await res.json();
            setPastSales(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error al obtener las ventas anteriores:", error);
        }
    }, []);

    const fetchSalesData = useCallback(async () => {
        await fetchTodaySales();
        if (activeTab === "past") {
            await fetchPastSales(pastStartDate, pastEndDate);
        }
    }, [fetchTodaySales, fetchPastSales, activeTab, pastStartDate, pastEndDate]);

    useEffect(() => {
        fetchTodaySales();
    }, [fetchTodaySales]);

    useEffect(() => {
        if (activeTab === "past") {
            fetchPastSales(pastStartDate, pastEndDate);
        }
    }, [activeTab, pastStartDate, pastEndDate, fetchPastSales]);

    // `sales` combina hoy + anteriores, solo para poder buscar la venta
    // seleccionada en el modal de vista previa sin importar de qué lista vino.
    useEffect(() => {
        const byId = new Map();
        [...todaySales, ...pastSales].forEach((s) => byId.set(s.id, s));
        setSales(Array.from(byId.values()));
    }, [todaySales, pastSales]);

    // Función para obtener transferencias desde el API real
    const handleCheckTransfers = async () => {
        setLoadingTransfers(true);
        try {
            const res = await fetch("/api/mail-verify", {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                },
                cache: "no-store" // Esto es específico de la API de Fetch y Next.js
            });
            const result = await res.json();

            if (result.success) {
                setLastTransfers(result.data);
                setShowTransfers(true);
            } else {
                alert("Error al consultar correos: " + result.error);
            }
        } catch (error) {
            console.error("Error al obtener transferencias:", error);
            alert("No se pudo conectar con el servidor de correos.");
        } finally {
            setLoadingTransfers(false);
        }
    };

    const handlePreview = async (sale) => {
        try {
            const res = await fetch(`/api/sale/${sale.id}`);
            if (!res.ok) throw new Error("Error al obtener detalles de la venta");
            const data = await res.json();

            setSelectedSaleId(sale.id);
            setSelectedProducts(data.products || []);
            setCashReceived("");
            setPaymentType("efectivo");
            setCashAmountInput("");
            setDiscountPercentInput("0");
            setShowPreview(true);
        } catch (error) {
            console.error("Error al obtener venta:", error);
            alert("No se pudo cargar la vista previa de la comanda");
        }
    };

    const closePreviewModal = () => setShowPreview(false);

    // F2: "Compartir" también disponible desde la tabla de ventas (antes solo
    // existía dentro del formulario de creación de venta).
    const handleShareSale = async (sale) => {
        try {
            const res = await fetch(`/api/sale/${sale.id}`);
            const data = await res.json();
            const products = data.products || [];

            let text = `Venta - Mesa ${sale.table}\n`;
            text += `${new Date(sale.createdAt).toLocaleDateString("es-CL")} ${new Date(sale.createdAt).toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" })}\n`;
            text += `--------------------------\n`;
            products.forEach((p) => {
                text += `${p.quantity}x ${p.product?.name || "Producto"}\n`;
                if (p.observation) text += `  Obs: ${p.observation}\n`;
                (p.additions || []).forEach((a) => {
                    text += `  + ${a.name}\n`;
                });
            });
            text += `--------------------------\n`;
            text += `TOTAL: ${new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(sale.totalAmount)}\n`;

            const encoded = encodeURIComponent(text);
            window.open(`https://wa.me/?text=${encoded}`, "_blank");
        } catch (error) {
            console.error("Error al compartir la venta:", error);
            alert("No se pudo generar el ticket para compartir.");
        }
    };

    const totalToday = todaySales.reduce((acc, sale) => acc + sale.totalAmount, 0);

    // extraPayload es opcional: si viene (paymentType/cashAmount/discountPercent/
    // totalAmount), el endpoint también guarda esos datos junto con el estado.
    // Si no viene, el comportamiento es exactamente el de antes.
    const handleStatusAdvance = async (sale, extraPayload = null) => {
        let newStatus = "";

        if (businessType === "fruver") {
            // 👇 Flujo Fruver: Si es domicilio, pasa a hecho y finaliza el flujo
            if (sale.status?.toLowerCase() === "domicilio") newStatus = "hecho";
            else return;
        } else {
            // 🔄 Flujo original Restaurant
            if (sale.status === "en proceso") newStatus = "en mesa";
            else if (sale.status === "en mesa") newStatus = "pagada";
            else return;
        }

        try {
            const res = await fetch(`/api/sale/${sale.id}/status`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus, ...(extraPayload || {}) }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error al actualizar el estado.");
            }

            fetchSalesData();
        } catch (error) {
            console.error("Error al actualizar el estado:", error);
            alert(`No se pudo actualizar el estado: ${error.message}`);
        }
    };

    // F5 + F6: al marcar una venta "en mesa" como pagada, se confirma el tipo
    // de pago (y, si aplica, el descuento) antes de guardar.
    const handleConfirmPayment = async (sale, subtotal) => {
        const discountPct = Math.min(100, Math.max(0, Number(discountPercentInput) || 0));
        const finalTotal = subtotal * (1 - discountPct / 100);
        const cash = Number(cashAmountInput) || 0;

        if (paymentType === "mixto" && cash <= 0) {
            alert("Ingresa el monto pagado en efectivo para un pago mixto.");
            return;
        }
        if (paymentType === "mixto" && cash >= finalTotal) {
            alert("El monto en efectivo no puede ser mayor o igual al total para un pago mixto (usa 'Efectivo').");
            return;
        }

        setIsConfirmingPayment(true);
        try {
            await handleStatusAdvance(sale, {
                paymentType,
                cashAmount: paymentType === "transferencia" ? 0 : cash,
                discountPercent: discountPct,
                totalAmount: finalTotal,
            });
            setShowPreview(false);
        } finally {
            setIsConfirmingPayment(false);
        }
    };

    const handleDeleteSale = async (saleId) => {
        if (!window.confirm("¿Seguro que deseas eliminar esta venta?")) return;
        try {
            const res = await fetch(`/api/sale?id=${saleId}`, { method: "DELETE" });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error al eliminar la venta.");
            }
            alert("Venta eliminada exitosamente.");
            fetchSalesData();
        } catch (error) {
            console.error("Error al eliminar la venta:", error);
            alert(`No se pudo eliminar la venta: ${error.message}`);
        }
    };

    const renderSaleList = (salesList) => (
        <div className="flex flex-col gap-4 border-solid border rounded-md border-gray-600 p-5">
            <h1 className="text-slate-200 font-medium text-xl">Ventas Registradas</h1>

            {session?.user?.image === 1 && activeTab === "today" && (
                <div className="text-green-300 font-bold text-lg flex items-center gap-2">
                    <span>Total de hoy:</span>
                    <span>
                        {showTotal ? (
                            new Intl.NumberFormat("es-CL", {
                                style: "currency",
                                currency: "CLP",
                            }).format(totalToday)
                        ) : (
                            "****"
                        )}
                    </span>
                    <button
                        onClick={() => setShowTotal(!showTotal)}
                        className="text-gray-400 hover:text-white transition-colors ml-2"
                        title={showTotal ? "Ocultar total" : "Mostrar total"}
                    >
                        {showTotal ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>
                </div>
            )}

            {salesList.length === 0 ? (
                <p className="text-slate-200">No hay ventas registradas</p>
            ) : (
                salesList.map((sale) => {
                    // Verificamos si las fechas son diferentes (con una tolerancia de 1 segundo para evitar falsos positivos por milisegundos de guardado en base de datos)
                    const isEdited = Math.abs(new Date(sale.updatedAt) - new Date(sale.createdAt)) > 1000;

                    return (
                        <div
                            key={sale.id}
                            className="flex items-start mb-4 cursor-pointer p-4 bg-gray-800 rounded-lg shadow-md"
                        >
                            <div className="flex items-center justify-center w-14 h-14 bg-gray-700 rounded-md mr-4 flex-shrink-0 mt-1">
                                <FaCashRegister className="text-white" size={20} />
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between w-full">
                                <div className="flex flex-col items-start flex-grow">
                                    <h3 className="text-green-400 text-4xl font-extrabold leading-none mb-2">
                                        Mesa: {sale.table}
                                    </h3>
                                    <h2 className="text-slate-200 text-xl font-semibold flex flex-wrap items-center gap-2">
                                        <span>
                                            Venta -{" "}
                                            {new Date(sale.createdAt).toLocaleDateString("es-CL")} /{" "}
                                            {new Date(sale.createdAt).toLocaleTimeString("es-CL", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </span>
                                        {/* Añadimos el distintivo de Editado aquí */}
                                        {isEdited && (
                                            <span className="bg-yellow-700 text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm">
                                                Editada
                                            </span>
                                        )}
                                    </h2>
                                    <span className="text-slate-300 text-sm">
                                        Productos: {sale.products?.length || 0}
                                    </span>
                                    <div className="text-slate-300 text-sm">
                                        Estado: {sale.status}
                                    </div>
                                    {businessType === "fruver" ? (
                                        // Botón para Fruver: Solo aparece si el estado actual es "domicilio"
                                        sale.status?.toLowerCase() === "domicilio" && (
                                            <button
                                                onClick={() => handleStatusAdvance(sale)}
                                                className="mt-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm px-3 py-1 rounded"
                                            >
                                                Marcar como Hecho
                                            </button>
                                        )
                                    ) : (
                                        // 🔄 Botón original para Restaurant
                                        ["en proceso", "en mesa"].includes(sale.status) && (
                                            <button
                                                onClick={() => handleStatusAdvance(sale)}
                                                className="mt-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm px-3 py-1 rounded"
                                            >
                                                {sale.status === "en proceso"
                                                    ? "Orden lista"
                                                    : "Marcar como pagada"}
                                            </button>
                                        )
                                    )}
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                                    <div className="flex items-center mb-4 sm:mb-0 mr-4">
                                        <span className="text-slate-200 text-lg font-semibold mr-2">
                                            Total:
                                        </span>
                                        <span className="text-slate-300 text-lg font-semibold">
                                            {new Intl.NumberFormat("es-CL", {
                                                style: "currency",
                                                currency: "CLP",
                                            }).format(sale.totalAmount)}
                                        </span>
                                    </div>
                                    <div className="flex justify-start sm:justify-end w-full sm:w-auto">
                                        <Link href={`/dashboard/sales/${sale.id}`}>
                                            <button className="ml-4 text-gray-600 hover:text-gray-200 text-3xl">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handlePreview(sale);
                                            }}
                                            className="ml-4 text-gray-600 hover:text-gray-200 text-3xl"
                                        >
                                            <FaEye />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleShareSale(sale);
                                            }}
                                            className="ml-4 text-gray-600 hover:text-gray-200 text-3xl"
                                            title="Compartir por WhatsApp"
                                        >
                                            <FaShareAlt />
                                        </button>
                                        {session?.user?.image === 1 && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteSale(sale.id);
                                                }}
                                                className="ml-4 text-red-500 hover:text-red-300 text-3xl"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );

    return (
        <div className="p-6 bg-gray-950 min-h-screen text-slate-200">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-slate-200 font-semibold text-3xl">Ventas</h1>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={handleCheckTransfers}
                        disabled={loadingTransfers}
                        className="bg-blue-800 text-gray-200 flex items-center gap-2 rounded-md px-4 py-1 hover:bg-blue-600 hover:text-white transition-colors disabled:opacity-50"
                    >
                        <FaExchangeAlt size={14} />
                        {loadingTransfers ? "Verificando..." : "Verificar transferencias"}
                    </button>
                    <Link href="/dashboard/sales">
                        <button className="bg-gray-800 text-gray-200 flex items-center rounded-md px-4 py-1 hover:bg-gray-600 hover:text-white w-full">
                            + Nueva venta
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setActiveTab("today")}
                    className={`px-4 py-2 rounded-t-md ${activeTab === "today" ? "bg-gray-800 text-white" : "bg-gray-600 text-gray-300"
                        }`}
                >
                    Ventas de Hoy
                </button>
                <button
                    onClick={() => setActiveTab("past")}
                    className={`px-4 py-2 rounded-t-md ${activeTab === "past" ? "bg-gray-800 text-white" : "bg-gray-600 text-gray-300"
                        }`}
                >
                    Ventas Anteriores
                </button>
            </div>

            {activeTab === "today" ? (
                <>
                    <div className="flex space-x-3 mb-4">
                        <button
                            onClick={() => setSubTab("todas")}
                            className={`px-3 py-1 rounded-full text-sm ${subTab === "todas"
                                ? "bg-green-700 text-white"
                                : "bg-gray-600 text-gray-200"
                                }`}
                        >
                            Todas
                        </button>

                        {businessType === "fruver" ? (
                            <>
                                {/* 👇 Filtros optimizados exclusivamente para Domicilios en Fruver */}
                                <button
                                    onClick={() => setSubTab("domicilios pendientes")}
                                    className={`px-3 py-1 rounded-full text-sm ${subTab === "domilios pendientes" || subTab === "domicilios pendientes"
                                        ? "bg-yellow-700 text-white"
                                        : "bg-gray-600 text-gray-200"
                                        }`}
                                >
                                    Domicilios Pendientes
                                </button>
                                <button
                                    onClick={() => setSubTab("domicilios hechos")}
                                    className={`px-3 py-1 rounded-full text-sm ${subTab === "domicilios hechos"
                                        ? "bg-blue-700 text-white"
                                        : "bg-gray-600 text-gray-200"
                                        }`}
                                >
                                    Domicilios Hechos
                                </button>
                            </>
                        ) : (
                            <>
                                {/* 🔄 Filtros originales de Restaurant */}
                                <button
                                    onClick={() => setSubTab("pendientes")}
                                    className={`px-3 py-1 rounded-full text-sm ${subTab === "pendientes"
                                        ? "bg-yellow-700 text-white"
                                        : "bg-gray-600 text-gray-200"
                                        }`}
                                >
                                    En proceso / En mesa
                                </button>
                                <button
                                    onClick={() => setSubTab("pagadas")}
                                    className={`px-3 py-1 rounded-full text-sm ${subTab === "pagadas"
                                        ? "bg-blue-700 text-white"
                                        : "bg-gray-600 text-gray-200"
                                        }`}
                                >
                                    Pagadas
                                </button>
                            </>
                        )}
                    </div>

                    {/* Filtrado de la lista de ventas según la pestaña activa */}
                    {renderSaleList(
                        todaySales.filter((sale) => {
                            if (subTab === "todas") return true;

                            if (businessType === "fruver") {
                                // 👇 Evaluación de filtros para Fruver
                                if (subTab === "domicilios pendientes") return sale.status?.toLowerCase() === "domicilio";
                                if (subTab === "domicilios hechos") return sale.status?.toLowerCase() === "hecho";
                            } else {
                                // 🔄 Evaluación original para Restaurant
                                if (subTab === "pendientes")
                                    return sale.status === "en proceso" || sale.status === "en mesa";
                                if (subTab === "pagadas") return sale.status === "pagada";
                            }
                            return true;
                        })
                    )}
                </>
            ) : (
                <>
                    {/* F7: selector de rango de fecha — antes esta pestaña traía todo
                        el histórico de una vez. */}
                    <div className="flex flex-wrap items-end gap-3 mb-4 bg-gray-900 border border-gray-800 rounded-md p-3">
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Desde</label>
                            <input
                                type="date"
                                value={pastStartDate}
                                max={pastEndDate}
                                onChange={(e) => setPastStartDate(e.target.value)}
                                className="bg-gray-800 border border-gray-700 rounded-md px-2 py-1 text-slate-200 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Hasta</label>
                            <input
                                type="date"
                                value={pastEndDate}
                                min={pastStartDate}
                                max={todayIso}
                                onChange={(e) => setPastEndDate(e.target.value)}
                                className="bg-gray-800 border border-gray-700 rounded-md px-2 py-1 text-slate-200 text-sm"
                            />
                        </div>
                        <span className="text-xs text-gray-500">
                            {pastSales.length} venta{pastSales.length !== 1 ? "s" : ""} en el rango
                        </span>
                    </div>
                    {renderSaleList(pastSales)}
                </>
            )}

            {/* Modal de transferencias */}
            {showTransfers && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60]">
                    <div className="bg-gray-900 w-full max-w-md mx-4 rounded-lg overflow-hidden border border-gray-700">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                            <h2 className="text-white text-xl font-semibold">Últimas 3 Transferencias</h2>
                            <button onClick={() => setShowTransfers(false)} className="text-white hover:text-gray-400">
                                <IoClose size={24} />
                            </button>
                        </div>
                        <div className="p-6 flex flex-col gap-4">
                            {lastTransfers.length > 0 ? (
                                lastTransfers.map((t, idx) => (
                                    <div key={t.id_interno || idx} className="bg-gray-800 p-4 rounded-md border border-gray-700 flex justify-between items-center">
                                        <div className="max-w-[60%]">
                                            <p className="text-white font-bold truncate capitalize">{t.quien.toLowerCase()}</p>
                                            <p className="text-gray-400 text-xs">{t.fecha}</p>
                                            <p className="text-gray-500 text-[10px] truncate">{t.sujeto}</p>
                                        </div>
                                        <p className="text-green-400 font-bold text-lg whitespace-nowrap">
                                            {t.monto}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400 text-center">No se encontraron transferencias recientes.</p>
                            )}
                        </div>
                        <div className="p-4 bg-gray-800 text-center">
                            <button onClick={() => setShowTransfers(false)} className="text-gray-300 hover:text-white text-sm">Cerrar</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de vista previa */}
            {showPreview && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-gray-900 w-full h-full max-h-screen overflow-hidden flex flex-col relative rounded-none">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                            <h2 className="text-white text-2xl font-semibold">
                                Vista Previa de la Comanda
                            </h2>
                            <button
                                className="text-white hover:text-gray-400"
                                onClick={closePreviewModal}
                            >
                                <IoClose size={32} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            {(() => {
                                const grouped = [];
                                selectedProducts.forEach((p) => {
                                    const existing = grouped.find(
                                        (g) =>
                                            g.name === p.name &&
                                            g.observation === p.observation &&
                                            JSON.stringify(g.additions) ===
                                            JSON.stringify(p.additions)
                                    );
                                    if (existing) existing.quantity += p.quantity;
                                    else grouped.push({ ...p });
                                });

                                if (grouped.length === 0)
                                    return (
                                        <p className="text-gray-400 text-center mt-10">
                                            No hay productos en esta venta
                                        </p>
                                    );

                                return (
                                    <ul className="space-y-4 pb-40">
                                        {grouped.map((product, index) => (
                                            <li
                                                key={index}
                                                className="bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-700"
                                            >
                                                <div className="flex justify-between items-center mb-2">
                                                    <h3 className="text-lg font-semibold text-white">
                                                        {product.name}
                                                    </h3>
                                                    <span className="text-sm text-gray-400">
                                                        x{product.quantity}
                                                    </span>
                                                </div>

                                                {product.observation && (
                                                    <p className="text-sm text-gray-300 italic mb-1">
                                                        Obs: {product.observation}
                                                    </p>
                                                )}

                                                {product.additions?.length > 0 && (
                                                    <ul className="text-sm text-gray-400 mt-1 pl-4 list-disc">
                                                        {product.additions.map((add, i) => (
                                                            <li key={i}>
                                                                + {add.name} (
                                                                {new Intl.NumberFormat(
                                                                    "es-CL",
                                                                    {
                                                                        style: "currency",
                                                                        currency: "CLP",
                                                                    }
                                                                ).format(add.price)}
                                                                )
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                <p className="text-right text-green-400 font-semibold mt-2">
                                                    {new Intl.NumberFormat("es-CL", {
                                                        style: "currency",
                                                        currency: "CLP",
                                                    }).format(
                                                        (product.price +
                                                            (product.additions?.reduce(
                                                                (sum, a) => sum + a.price,
                                                                0
                                                            ) || 0)) * product.quantity
                                                    )}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                );
                            })()}
                        </div>

                        {(() => {
                            const subtotal = selectedProducts.reduce((acc, p) => {
                                const adds =
                                    p.additions?.reduce((s, a) => s + a.price, 0) || 0;
                                return acc + (p.price + adds) * p.quantity;
                            }, 0);

                            const received = parseFloat(cashReceived || 0);
                            const change = received - subtotal;

                            const currentSale = sales.find((s) => s.id === selectedSaleId);
                            const isAboutToBePaid = currentSale?.status === "en mesa";
                            const discountPct = Math.min(100, Math.max(0, Number(discountPercentInput) || 0));
                            const finalTotal = subtotal * (1 - discountPct / 100);
                            const cashPart = paymentType === "transferencia" ? 0 : (Number(cashAmountInput) || 0);
                            const transferPart = paymentType === "efectivo" ? 0 : Math.max(0, finalTotal - cashPart);

                            return (
                                <div className="bg-gray-800 border-t border-gray-700 px-6 py-4 flex flex-col gap-3 sticky bottom-0">
                                    <div className="flex justify-between items-center">
                                        <p className="text-white font-semibold text-lg">
                                            Subtotal:{" "}
                                            {new Intl.NumberFormat("es-CL", {
                                                style: "currency",
                                                currency: "CLP",
                                            }).format(subtotal)}
                                        </p>

                                        {currentSale?.status === "en proceso" && (
                                            <button
                                                onClick={() => handleStatusAdvance(currentSale)}
                                                className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
                                            >
                                                Orden lista
                                            </button>
                                        )}
                                    </div>

                                    {/* F5 + F6: tipo de pago y descuento antes de marcar como pagada */}
                                    {isAboutToBePaid && (
                                        <div className="bg-gray-900 border border-gray-700 rounded-md p-3 flex flex-col gap-3">
                                            <div className="flex flex-wrap gap-4 items-end">
                                                <div>
                                                    <label className="block text-xs text-gray-400 mb-1">Tipo de pago</label>
                                                    <select
                                                        value={paymentType}
                                                        onChange={(e) => setPaymentType(e.target.value)}
                                                        className="bg-gray-700 text-white px-3 py-2 rounded-md"
                                                    >
                                                        <option value="efectivo">Efectivo</option>
                                                        <option value="transferencia">Transferencia</option>
                                                        <option value="mixto">Mixto</option>
                                                    </select>
                                                </div>

                                                {paymentType !== "transferencia" && (
                                                    <div>
                                                        <label className="block text-xs text-gray-400 mb-1">
                                                            {paymentType === "mixto" ? "Monto en efectivo" : "Monto recibido en efectivo"}
                                                        </label>
                                                        <input
                                                            type="number"
                                                            value={cashAmountInput}
                                                            onChange={(e) => setCashAmountInput(e.target.value)}
                                                            placeholder="Ej: 30000"
                                                            className="bg-gray-700 text-white px-3 py-2 rounded-md w-32 text-right"
                                                        />
                                                    </div>
                                                )}

                                                <div>
                                                    <label className="block text-xs text-gray-400 mb-1">% Descuento</label>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="100"
                                                        value={discountPercentInput}
                                                        onChange={(e) => setDiscountPercentInput(e.target.value)}
                                                        className="bg-gray-700 text-white px-3 py-2 rounded-md w-24 text-right"
                                                    />
                                                </div>
                                            </div>

                                            {/* Verificación visual antes de guardar */}
                                            <div className="text-sm text-gray-300 space-y-1">
                                                {discountPct > 0 && (
                                                    <p>
                                                        Total con descuento ({discountPct}%):{" "}
                                                        <span className="text-emerald-400 font-semibold">
                                                            {new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(finalTotal)}
                                                        </span>
                                                    </p>
                                                )}
                                                {paymentType === "mixto" && (
                                                    <p>
                                                        Transferencia inferida (diferencia):{" "}
                                                        <span className="text-emerald-400 font-semibold">
                                                            {new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(transferPart)}
                                                        </span>
                                                    </p>
                                                )}
                                                {paymentType === "efectivo" && cashAmountInput && (
                                                    <p>
                                                        Vuelto:{" "}
                                                        <span className="text-emerald-400 font-semibold">
                                                            {new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(Math.max(0, cashPart - finalTotal))}
                                                        </span>
                                                    </p>
                                                )}
                                            </div>

                                            <button
                                                onClick={() => handleConfirmPayment(currentSale, subtotal)}
                                                disabled={isConfirmingPayment}
                                                className="self-start bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
                                            >
                                                {isConfirmingPayment ? "Guardando..." : "Confirmar pago y marcar como pagada"}
                                            </button>
                                        </div>
                                    )}

                                    <div className="flex flex-col mt-2">
                                        <label className="text-gray-300 text-sm mb-1">
                                            Monto recibido
                                        </label>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="number"
                                                value={cashReceived}
                                                onChange={(e) =>
                                                    setCashReceived(e.target.value)
                                                }
                                                placeholder="Ej: 30000"
                                                className="bg-gray-700 text-white px-3 py-2 rounded-md w-32 text-right"
                                            />
                                            <div>
                                                <p className="text-green-400 font-semibold text-lg">
                                                    Cambio:{" "}
                                                    {new Intl.NumberFormat("es-CL", {
                                                        style: "currency",
                                                        currency: "CLP",
                                                    }).format(change > 0 ? change : 0)}
                                                </p>
                                                {cashReceived && (
                                                    <p className="text-gray-400 text-xs">
                                                        {new Intl.NumberFormat("es-CL", {
                                                            style: "currency",
                                                            currency: "CLP",
                                                        }).format(received)}{" "}
                                                        -{" "}
                                                        {new Intl.NumberFormat("es-CL", {
                                                            style: "currency",
                                                            currency: "CLP",
                                                        }).format(subtotal)}
                                                    </p>
                                                )}
                                            </div>
                                            <button
                                                onClick={() =>
                                                    printTicket({
                                                        products: selectedProducts,
                                                        total: subtotal,
                                                        tableNumber: sales.find((s) => s.id === selectedSaleId)?.table,
                                                        game: sales.find((s) => s.id === selectedSaleId)?.gameId?.toString(),
                                                        availableGames: [],
                                                        availableProducts: [],
                                                        generalObservation:
                                                            sales.find((s) => s.id === selectedSaleId)?.generalObservation,
                                                        orderType:
                                                            sales.find((s) => s.id === selectedSaleId)?.orderType,
                                                    })
                                                }
                                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
                                            >
                                                <FaPrint /> Imprimir
                                            </button>
                                            {currentSale && (
                                                <button
                                                    onClick={() => handleShareSale(currentSale)}
                                                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
                                                >
                                                    <FaShareAlt /> Compartir
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DailySales;