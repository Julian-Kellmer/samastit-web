import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const {
      orderId = 'ORDER_TEST_1',
      title = 'Mi producto',
      price = 2000,
    } = await req.json().catch(() => ({}))

    const accessToken = process.env.MP_ACCESS_TOKEN
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Missing MP_ACCESS_TOKEN' },
        { status: 500 },
      )
    }

    // En local: dejamos back_urls igual (no afectan la creación),
    // pero desactivamos auto_return SIEMPRE.
    const baseUrl = (
      process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    ).replace(/\/$/, '')
    const back_urls = {
      success: `${baseUrl}/checkout/success?orderId=${orderId}`,
      failure: `${baseUrl}/checkout/failure?orderId=${orderId}`,
      pending: `${baseUrl}/checkout/pending?orderId=${orderId}`,
    }
 const notification_url = `${baseUrl}/api/mp/webhook?secret=${process.env.MP_WEBHOOK_SECRET}`;
    const payload = {
      items: [
        { title, quantity: 1, unit_price: Number(price), currency_id: 'ARS' },
      ],
      external_reference: String(orderId),
      back_urls,
      // auto_return: "approved", // ❌ desactivado por ahora
      notification_url
    }

    console.log('[MP] Creating preference with:', payload)

    const res = await fetch(
      'https://api.mercadopago.com/checkout/preferences',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.trim()}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    )

    const data = await res
      .json()
      .catch(() => ({ message: 'Failed to parse MP response JSON' }))

    if (!res.ok) {
      console.error('[MP] API error:', res.status, data)
      return NextResponse.json(
        { mp_status: res.status, details: data },
        { status: res.status },
      )
    }

    console.log('[MP] Preference created. ID:', data.id)

    return NextResponse.json({
      id: data.id,
      init_point: data.init_point,
      sandbox_init_point: data.sandbox_init_point,
    })
  } catch (err) {
    console.error('[create-preference] Unhandled:', err)
    return NextResponse.json(
      {
        error: 'Unhandled server error',
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }
}
