import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * Wake up the database by performing a lightweight query
 * This prevents the database from sleeping due to inactivity
 * Called automatically on first page load - does not expose any data
 */
export async function GET() {
  try {
    // Perform a lightweight query to wake up the database
    // Using a simple SELECT 1 query that doesn't expose any data
    const { error } = await supabase
      .from('sileotube-uninstall-survey')
      .select('id')
      .limit(1);

    // Even if there's an error (like table doesn't exist or no rows), 
    // the connection attempt wakes up the database
    if (error) {
      // Log error but don't expose it to client
      console.log('Database wake query completed (connection established)');
    }

    // Return success without exposing any data
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Silently handle errors - connection attempt still wakes the DB
    console.log('Database wake attempt completed');
    return NextResponse.json({ success: true }, { status: 200 });
  }
}
