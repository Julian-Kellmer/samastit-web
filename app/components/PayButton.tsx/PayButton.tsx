'use client'
import styles from './style.module.scss'
export function PayButton({
  title,
  
  text,
}: {
  title: string
  
  text: string
}) {
  const handlePay = async () => {
    try {
      const res = await fetch('/api/mp/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      })

      const data = await res.json()
      console.log('[MP create-preference response]', {
        ok: res.ok,
        status: res.status,
        data,
      })

      if (!res.ok) {
        alert('Error iniciando pago (backend)')
        return
      }

      // Producción: init_point; fallback a sandbox_init_point
      const checkoutUrl = data.init_point || data.sandbox_init_point

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
      onClick={handlePay}
      className={styles.btn}>
      <span className={styles.label}>{text}</span>
    </button>
  )
}
