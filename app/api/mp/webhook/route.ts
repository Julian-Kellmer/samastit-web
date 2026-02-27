import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function fetchPayment(paymentId: string) {
  const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
    headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` },
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

export async function POST(req: Request) {
  const url = new URL(req.url);

  // 1) “Shared secret” mínimo para evitar hits random
  if (url.searchParams.get("secret") !== process.env.MP_WEBHOOK_SECRET) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // 2) MP puede mandar data.id en body (webhooks) o query (otros formatos)
  const body = await req.json().catch(() => ({}));

  const paymentId =
    body?.data?.id?.toString() ||
    url.searchParams.get("data.id") ||
    url.searchParams.get("id") ||
    null;

  if (!paymentId) {
    // Acknowledge rápido para que no reintente agresivo
    return NextResponse.json({ ok: true, note: "No paymentId in notification" });
  }

  // 3) Fuente de verdad: Payments API
  const payment = await fetchPayment(paymentId);

  if (!payment.ok) {
    console.error("[MP webhook] payment fetch failed:", payment.status, payment.data);
    return NextResponse.json({ ok: true });
  }

  const status = payment.data?.status; // approved, pending, rejected, etc.
  const orderId = payment.data?.external_reference; // tu orderId
  console.log("[MP webhook] payment:", { paymentId, status, orderId });

  // 4) TODO: actualizar tu DB/orden. Por ahora solo log.
  // if (status === "approved") mark orderId => PAID

  return NextResponse.json({ ok: true });
}