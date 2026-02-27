'use client'
import styles from './style.module.scss'
export function PayButton({

  title,
  price,
  text,
}: {
  title: string
  price: number
  text: string
}) {
  const handlePay = async (title: string, price: number) => {
  try {
    const res = await fetch('/api/mp/create-preference', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, price }),
    })

    const data = await res.json()
    console.log('[MP create-preference response]', { ok: res.ok, status: res.status, data })

    if (!res.ok) {
      alert('Error iniciando pago (backend)')
      return
    }

    // ✅ En TEST: preferí sandbox_init_point
    const checkoutUrl = data.sandbox_init_point || data.init_point

    if (!checkoutUrl) {
      console.error('Missing init_point/sandbox_init_point:', data)
      alert('Error: Mercado Pago no devolvió init_point')
      return
    }

    window.location.href = checkoutUrl
  } catch (err) {
    console.error('Error creando preferencia:', err)
    alert('Error iniciando pago')
  }
}
  return (
    <button
      onClick={() => handlePay(title, price)}
      className={styles.btn}>
      <span className={styles.label}>{text}</span>
    </button>
  )
}
