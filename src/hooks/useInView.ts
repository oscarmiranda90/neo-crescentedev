import { useEffect, useRef } from 'react'

export function useInView<T extends HTMLElement>(threshold = 0.15) {
    const ref = useRef<T>(null)

    useEffect(() => {
        const container = ref.current
        if (!container) return

        const targets = container.querySelectorAll<HTMLElement>('.reveal')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement
                        const delay = el.dataset.delay ?? '0'
                        el.style.animationDelay = delay
                        el.classList.add('in-view')
                        observer.unobserve(el)
                    }
                })
            },
            { threshold }
        )

        targets.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [threshold])

    return ref
}
