import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para los mensajes
export interface DatabaseMessage {
  id: number
  created_at: string
  content: string
  username: string
}

export interface NewMessage {
    content: string
    username: string
}
