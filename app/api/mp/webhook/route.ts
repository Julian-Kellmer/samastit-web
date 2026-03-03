import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function fetchPayment(paymentId: string) {
  const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
    headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` },
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}


function mapStatus(s: string | undefined) {
  if (s === "approved") return "PAID";
  if (s === "rejected" || s === "cancelled" || s === "refunded" || s === "charged_back") return "FAILED";
  return "PENDING";
}


export async function POST(req: Request) {
  if (!process.env.MP_WEBHOOK_SECRET || !process.env.MP_ACCESS_TOKEN) {
    console.error("[MP webhook] Missing MP_WEBHOOK_SECRET or MP_ACCESS_TOKEN");
    return new NextResponse("Server misconfigured", { status: 500 });
  }

  const url = new URL(req.url);

  if (url.searchParams.get("secret") !== process.env.MP_WEBHOOK_SECRET) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json().catch(() => ({}));


  const paymentId =
    body?.data?.id?.toString() ||
    url.searchParams.get("data.id") ||
    url.searchParams.get("id") ||
    null;

  if (!paymentId) {
    return NextResponse.json({ ok: true, note: "No paymentId in notification" });
  }

  const payment = await fetchPayment(paymentId);

  if (!payment.ok) {
    console.error("[MP webhook] payment fetch failed:", payment.status, payment.data);
    // devolvemos 200 igual para evitar reintentos
    return NextResponse.json({ ok: true });
  }

  const status = payment.data?.status;
  const orderId = payment.data?.external_reference;

  console.log("[MP webhook] payment verified:", { paymentId, status, orderId });
 if (!orderId) {
    console.error("[MP webhook] Missing external_reference (orderId) in payment:", payment.data);
    return NextResponse.json({ ok: true });
  }
  const newStatus = mapStatus(status);

  const {error:updErr}=await supabaseAdmin.from('orders').update({
    status:newStatus,
    mp_payment_id:paymentId,
  }).eq('id',orderId)
  if(updErr){
    console.error('[orders] update error:', updErr)
    return NextResponse.json({ ok: true });
  }
    
  return NextResponse.json({ ok: true });

  
}