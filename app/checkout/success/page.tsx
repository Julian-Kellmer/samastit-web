'use client'

import { useEffect, useState } from 'react'
import { FxButtonBase } from '@/app/components/FxButton/FxButton'

export default function SuccessPage({ searchParams }: any) {
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
      <p className='text-sm text-foreground/50 uppercase tracking-widest'>
        Estado: <span className='text-primary/80'>{order.status}</span>
      </p>

      {/* Sub-text */}
      <p className='text-foreground/60 max-w-md text-balance'>
        ¡Tu pago fue procesado exitosamente! Por favor ingresá tu mail y me
        contacto a la brevedad para coordinar la entrega.
      </p>

      {/* Email form */}
      <EmailForm orderId={order.id} />
    </div>
  )
}

function EmailForm({ orderId }: { orderId: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>(
    'idle',
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/orders/contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, email }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done')
    return (
      <p className='text-primary font-semibold mt-4'>
        ✅ ¡Perfecto! Te contacto pronto.
      </p>
    )

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 w-full max-w-sm mt-4'>
      <label
        htmlFor='email'
        className='text-foreground/70 text-sm text-left'>
        Por favor ingresá tu mail para coordinar la entrega:
      </label>

      <input
        id='email'
        type='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='tu@email.com'
        className='
          w-full px-4 py-3 rounded-full
          bg-background border-2 border-primary/30
          text-foreground placeholder:text-foreground/30
          focus:outline-none focus:border-primary
          transition-colors duration-300
        '
      />

      {status === 'error' && (
        <p className='text-red-400 text-sm'>
          Algo salió mal. Intentá de nuevo.
        </p>
      )}

      <button
        type='submit'
        disabled={status === 'loading'}
        className='bg-transparent border-none p-0 cursor-pointer disabled:opacity-50'>
        <FxButtonBase>
          {status === 'loading' ? 'Enviando...' : 'Enviar'}
        </FxButtonBase>
      </button>
    </form>
  )
}
