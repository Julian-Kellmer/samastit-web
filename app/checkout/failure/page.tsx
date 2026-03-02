'use client'

import { useEffect, useState } from 'react'
import { FxLinkButton } from '@/app/components/FxButton/FxLinkButton'
import { FxButtonBase } from '@/app/components/FxButton/FxButton'

// ─── Standalone components (outside render to avoid React warning) ────────────

function FailureButtons() {
  return (
    <div className='flex flex-col sm:flex-row gap-6 mt-12 justify-center'>
      <FxLinkButton href='/'>Volver al inicio</FxLinkButton>
      <a
        href='https://wa.me/5491158044328'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block'>
        <FxButtonBase>Contactarme por WhatsApp</FxButtonBase>
      </a>
    </div>
  )
}

function PageShell({
  children,
  status,
}: {
  children: React.ReactNode
  status?: string
}) {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6'>
      <h1 className='text-6xl sm:text-8xl font-black uppercase tracking-tight text-primary leading-none'>
        Pago Rechazado
      </h1>

      {status && (
        <p className='text-sm text-foreground/50 uppercase tracking-widest'>
          Estado: <span className='text-primary/80'>{status}</span>
        </p>
      )}

      <p className='text-foreground/60 max-w-md text-balance'>
        Hubo un problema al procesar tu pago. Por favor, intenta nuevamente o
        contáctame para proceder de otra manera.
      </p>

      {children}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FailurePage({
  searchParams,
}: {
  searchParams: { orderId?: string }
}) {
  const orderId = searchParams?.orderId
  const [order, setOrder] = useState<Record<string, string> | null>(null)

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
      <PageShell>
        <FailureButtons />
      </PageShell>
    )

  if (!order)
    return (
      <div className='min-h-screen flex items-center justify-center text-foreground/60'>
        Cargando estado del pago...
      </div>
    )

  if (order.error)
    return (
      <div className='min-h-screen flex items-center justify-center text-foreground/60'>
        Error: {order.error}
      </div>
    )

  return (
    <PageShell status={order.status}>
      <FailureButtons />
    </PageShell>
  )
}
