"use client";

import { useEffect, useState } from "react";

export default function SuccessPage({ searchParams }: any) {
  const orderId = searchParams?.orderId;
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    if (!orderId) return;

    let alive = true;

    const tick = async () => {
      const r = await fetch(`/api/orders/${orderId}`);
      const data = await r.json();
      if (!alive) return;
      setOrder(data);
    };

    tick();
    const id = setInterval(tick, 2000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [orderId]);

  if (!orderId) return <div>Missing orderId</div>;
  if (!order) return <div>Confirmando pago...</div>;
  if (order.error) return <div>Error: {order.error}</div>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Estado de pago</h1>
      <p><b>Order:</b> {order.id}</p>
      <p><b>Status:</b> {order.status}</p>
      {order.status === "PAID" ? <p>✅ Pago confirmado</p> : <p>⏳ Aguardando confirmación…</p>}
    </div>
  );
}