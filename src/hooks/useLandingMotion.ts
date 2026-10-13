import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/** Motion preferences for the landing: the OS setting plus a visitor-controlled pause. */
export function useLandingMotion() {
    const [paused, setPaused] = useState(false)
    const [reduced, setReduced] = useState(() => window.matchMedia(QUERY).matches)

    useEffect(() => {
        const media = window.matchMedia(QUERY)
        const change = () => setReduced(media.matches)
        media.addEventListener('change', change)
        return () => media.removeEventListener('change', change)
    }, [])

    return { paused, reduced, setPaused }
}
