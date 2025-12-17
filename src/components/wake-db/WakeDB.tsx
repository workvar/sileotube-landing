'use client';

import { useEffect, useRef } from 'react';

/**
 * Client component that wakes up the database on first page load
 * Calls the API route server-side without exposing any data to the frontend
 */
export default function WakeDB() {
  const hasWoken = useRef(false);

  useEffect(() => {
    // Only wake the database once per session
    if (hasWoken.current) return;
    hasWoken.current = true;

    // Call the wake-db API route
    // This triggers a server-side database query without exposing data
    fetch('/api/wake-db', {
      method: 'GET',
      // Don't wait for response - fire and forget
      // This prevents blocking page load
    }).catch(() => {
      // Silently handle errors - the attempt still helps wake the DB
    });
  }, []);

  // This component doesn't render anything
  return null;
}
