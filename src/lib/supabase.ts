import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://xbvlultwhrxzgkjeczjl.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_kgO7BSGmAFYaeaif4DxfiQ_m-LyzgP7";

export const supabase = createClient(supabaseUrl, supabaseKey);
