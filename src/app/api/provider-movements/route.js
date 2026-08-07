import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const providerId = parseInt(searchParams.get("providerId"));

    const movements = await db.providerMovement.findMany({
      where: { providerId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(movements);
  } catch (error) {
    console.error("Error al obtener movimientos de proveedor:", error);
    return NextResponse.json(
      { message: "No se pudieron cargar los movimientos del proveedor." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.providerId) {
      return NextResponse.json({ message: "Falta el proveedor." }, { status: 400 });
    }
    const amount = parseFloat(data.amount);
    if (Number.isNaN(amount) || amount <= 0) {
      return NextResponse.json({ message: "El monto no es válido." }, { status: 400 });
    }
    if (!["INVOICE", "PAYMENT"].includes(data.type)) {
      return NextResponse.json({ message: "Tipo de movimiento no válido." }, { status: 400 });
    }

    const movement = await db.providerMovement.create({
      data: {
        providerId: data.providerId,
        type: data.type,
        amount,
        description: data.description || null,
        imageUrl: data.imageUrl || null,
        createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
      },
    });

    return NextResponse.json(movement);
  } catch (error) {
    // Antes esta ruta no tenía try/catch: si Prisma fallaba por cualquier
    // motivo, el navegador recibía una respuesta que no era JSON válido y
    // el error terminaba siendo silencioso (apiPost no podía leer el
    // mensaje real). Ahora siempre se devuelve un error legible.
    console.error("Error al crear movimiento de proveedor:", error);
    return NextResponse.json(
      { message: "No se pudo registrar el movimiento. Intenta de nuevo." },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({ message: "Falta el id del movimiento." }, { status: 400 });
    }

    await db.providerMovement.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al eliminar movimiento de proveedor:", error);
    return NextResponse.json(
      { message: "No se pudo eliminar el movimiento." },
      { status: 500 }
    );
  }
}
