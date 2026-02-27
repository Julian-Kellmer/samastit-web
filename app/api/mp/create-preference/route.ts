import { NextResponse } from 'next/server'
import { supabaseAdmin } from '../../../lib/supabase/server'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const accessToken = process.env.MP_ACCESS_TOKEN
    const webhookSecret = process.env.MP_WEBHOOK_SECRET

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Missing MP_ACCESS_TOKEN' },
        { status: 500 },
      )
    }
    if (!webhookSecret) {
      return NextResponse.json(
        { error: 'Missing MP_WEBHOOK_SECRET' },
        { status: 500 },
      )
    }
    const { title = 'Mi producto', price = 2000 } = await req
      .json()
      .catch(() => ({}))
    //creamos la orden en la base de datos PENDING
    const { data: order, error: orderErr } = await supabaseAdmin
      .from('orders')
      .insert({
        title,
        amount: Number(price),
        currency: 'ARS',
        status: 'PENDING',
      })
      .select('*')
    if (orderErr || !order) {
      console.error('[orders] insert error', orderErr)
      return NextResponse.json(
        { error: 'Failed to create order' },
        { status: 500 },
      )
    }
    const orderId = order[0].id

    // crear preferencia en MP

    const baseUrl = (process.env.APP_URL || 'http://localhost:3000').replace(
      /\/$/,
      '',
    )
    const back_urls = {
      success: `${baseUrl}/checkout/success?orderId=${orderId}`,
      failure: `${baseUrl}/checkout/failure?orderId=${orderId}`,
      pending: `${baseUrl}/checkout/pending?orderId=${orderId}`,
    }
    const notification_url = `${baseUrl}/api/mp/webhook?secret=${webhookSecret}`
    const payload = {
      items: [
        { title, quantity: 1, unit_price: Number(price), currency_id: 'ARS' },
      ],
      external_reference: String(orderId),
      back_urls,
      auto_return: 'approved',
      notification_url,
    }
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Missing MP_ACCESS_TOKEN' },
        { status: 500 },
      )
    }

    const MPres = await fetch(
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

    const MpData = await MPres.json().catch(() => ({
      message: 'Failed to parse MP response JSON',
    }))

    if (!MPres.ok) {
      console.error('[MP] API error:', MPres.status, MpData)
      await supabaseAdmin
        .from('orders')
        .update({ status: 'FAILED' })
        .eq('id', orderId)

      return NextResponse.json(
        { mp_status: MPres.status, details: MpData },
        { status: MPres.status },
      )
    }

    const { error: updErr } = await supabaseAdmin
      .from('orders')
      .update({ mp_preference_id: MpData.id })
      .eq('id', orderId)

    if (updErr) console.error('[orders] update mp_preference_id error:', updErr)
    console.log('[env check]', {
      hasAccessToken: Boolean(process.env.MP_ACCESS_TOKEN),
      hasWebhookSecret: Boolean(process.env.MP_WEBHOOK_SECRET),
      hasAppUrl: Boolean(process.env.APP_URL),
      hasSupabaseUrl: Boolean(process.env.SUPABASE_URL),
      hasServiceKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    })
    return NextResponse.json({
      orderId,
      id: MpData.id,
      init_point: MpData.init_point,
      sandbox_init_point: MpData.sandbox_init_point,
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
