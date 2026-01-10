import { OrderPayload } from '@/app/types/orders'


export async function createCheckout(payload: OrderPayload) {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_TEST_WEBHOOK_URL
  console.log(webhookUrl)
  if (!webhookUrl) {
    console.error('SERVER ERROR: N8N_TEST_CHECKOUT_WEBHOOK is not defined')
    throw new Error('Missing environment variable')
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('N8N Error:', text)
      throw new Error(`N8N checkout error: ${res.status} ${res.statusText}`)
    }

    return res.json()
  } catch (error) {
    console.error('Create Checkout Exception:', error)
    throw error // Re-throw to handle in UI if needed
  }
}
