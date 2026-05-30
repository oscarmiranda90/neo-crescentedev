import { useEffect, useRef } from 'react'

export function useInView<T extends HTMLElement>(threshold = 0.05) {
    const ref = useRef<T>(null)

    useEffect(() => {
        const container = ref.current
        if (!container) return

        const targets = container.querySelectorAll<HTMLElement>('.reveal')

        // Immediately reveal anything already in viewport on mount
        const revealEl = (el: HTMLElement) => {
            const delay = el.dataset.delay ?? '0'
            el.style.animationDelay = delay
            el.classList.add('in-view')
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        revealEl(entry.target as HTMLElement)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        )

        targets.forEach((el) => {
            const rect = el.getBoundingClientRect()
            if (rect.top < window.innerHeight) {
                revealEl(el)
            } else {
                observer.observe(el)
            }
        })

        return () => observer.disconnect()
    }, [threshold])

    return ref
}
