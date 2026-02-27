import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase/server"; // ajustá path si hace falta

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  // 1) Ver env presence (sin mostrar valores)
  const env = {
    hasUrl: Boolean(process.env.SUPABASE_URL),
    hasServiceKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
  };

  // 2) Probar un SELECT liviano
  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("id")
    .limit(1);

  return NextResponse.json({
    env,
    selectOk: !error,
    error,
    sample: data ?? null,
  });
}