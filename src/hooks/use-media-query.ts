// src/hooks/use-media-query.ts
import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    function onChange(event: MediaQueryListEvent) {
      setMatches(event.matches)
    }

    mediaQuery.addEventListener('change', onChange)

    return () => {
      mediaQuery.removeEventListener('change', onChange)
    }
  }, [query])

  // Prevent hydration mismatch by always returning false on the server
  if (!mounted) return false

  return matches
}