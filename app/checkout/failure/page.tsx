'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function FailurePage({ searchParams }: any) {
  const orderId = searchParams?.orderId
  const [order, setOrder] = useState<any>(null)

  useEffect(() => {
    if (!orderId) return

    let alive = true

    const tick = async () => {
      const r = await fetch(`/api/orders/${orderId}`)
      const data = await r.json()
      if (!alive) return
      setOrder(data)
    }

    tick()
    const id = setInterval(tick, 2000)
    return () => {
      alive = false
      clearInterval(id)
    }
  }, [orderId])

  if (!orderId) return <div>Missing orderId</div>
  if (!order) return <div>Cargando estado del pago fallido...</div>
  if (order.error) return <div>Error: {order.error}</div>

  return (
    <div style={{ padding: 24 }}>
      <h1>Pago Fallido o Rechazado</h1>
      <p>
        <b>Order:</b> {order.id}
      </p>
      <p>
        <b>Status actual:</b> {order.status}
      </p>
      <div style={{ marginTop: 20 }}>
        <p>❌ Hubo un problema al procesar tu pago.</p>
        <p>Por favor, intenta nuevamente o utiliza otro medio de pago.</p>
      </div>
      <div style={{ marginTop: 24 }}>
        <Link
          href='/'
          style={{ textDecoration: 'underline', color: 'blue' }}>
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
