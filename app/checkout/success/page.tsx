'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { FxButtonBase } from '@/app/components/FxButton/FxButton'

type OrderData = {
  id: string
  status: string
  error?: string
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const orderId =
    searchParams?.get('orderId') || searchParams?.get('external_reference')
  const [order, setOrder] = useState<OrderData | null>(null)
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

  if (!orderId)
    return (
      <div className='min-h-screen flex items-center justify-center text-foreground/60'>
        Missing orderId
      </div>
    )

  if (!order)
    return (
      <div className='min-h-screen flex items-center justify-center text-foreground/60'>
        Confirmando pago...
      </div>
    )

  if (order.error)
    return (
      <div className='min-h-screen flex items-center justify-center text-foreground/60'>
        Error: {order.error}
      </div>
    )

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6'>
      {/* Title */}
      <h1 className='text-6xl sm:text-8xl font-black uppercase tracking-tight text-primary leading-none'>
        Pago Aceptado
      </h1>

      {/* Status badge */}
      {/* <p className='text-sm text-foreground/50 uppercase tracking-widest'>
        Estado: <span className='text-primary/80'>{order.status}</span>
      </p> */}

      {/* Sub-text */}
      <p className='text-foreground/60 max-w-md text-balance text-lg'>
        ¡Tu pago fue procesado exitosamente! Por favor adjuntá el comprobante y
        comunícate conmigo para arreglar la entrega de tu pedido.
      </p>

      {/* WhatsApp Link */}
      <a
        href={`https://wa.me/+5491158044328?text=Hola!%20Acabo%20de%20realizar%20un%20pago%20${
          orderId ? `(Orden:%20${orderId})%20` : ''
        }y%20te%20escribo%20para%20coordinar%20la%20entrega.%20Te%20adjunto%20el%20comprobante:`}
        target='_blank'
        rel='noreferrer'
        className='mt-4'>
        <FxButtonBase>Contactame por WhatsApp ↗</FxButtonBase>
      </a>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className='min-h-screen flex items-center justify-center text-foreground/60'>
          Cargando...
        </div>
      }>
      <SuccessContent />
    </Suspense>
  )
}
