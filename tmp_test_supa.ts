import { createClient } from '@supabase/supabase-js'

try {
  const client = createClient(undefined as any, undefined as any)
  console.log('Created successfully with undefined')
} catch (e: any) {
  console.log('Error creating with undefined:', e.message)
}

try {
  const client = createClient('', '')
  console.log('Created successfully with empty strings')
} catch (e: any) {
  console.log('Error creating with empty strings:', e.message)
}
