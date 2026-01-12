import { useEffect, useState } from 'react'

/**
 * Custom hook to detect user's reduced motion preference
 * 
 * Usage:
 * const prefersReducedMotion = useReducedMotion()
 * 
 * Use this hook to disable or reduce animations for users
 * who have enabled "Reduce Motion" in their system settings.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if window is available (SSR check)
    if (typeof window === 'undefined') return

    // Check the initial preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Add event listener
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion
}

export default useReducedMotion
