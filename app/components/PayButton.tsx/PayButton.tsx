'use client'
import styles from './style.module.scss'
export function PayButton({
  orderID,
  title,
  price,
  text,
}: {
  orderID: string
  title: string
  price: number
  text: string
}) {
  const handlePay = async (orderID: string, title: string, price: number) => {
    try {
      const res = await fetch('/api/mp/create-preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: orderID,
          title: title,
          price: price,
        }),
      })
      const data = await res.json()
      console.log(data)

      window.location.href = data.init_point
    } catch (err) {
      console.error('Error creando preferencia:', err)
      alert('Error iniciando pago')
    }
  }
  return (
    <button
      onClick={() => handlePay(orderID, title, price)}
      className={styles.btn}>
      <span className={styles.label}>{text}</span>
    </button>
  )
}
