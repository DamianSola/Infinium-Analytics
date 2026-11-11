'use client'

import { useEffect, useRef, useState } from 'react'

function isInView(el) {
    const rect = el.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    return rect.bottom > 80 && rect.top < viewportHeight * 0.92
}

export default function useReveal() {
    const ref = useRef(null)
    const [animation, setAnimation] = useState('ocultar')

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setAnimation('mostrar')
            return
        }

        let stopped = false
        let intervalId = 0
        const observer = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) reveal()
        }, { threshold: 0.01 })

        const stop = () => {
            stopped = true
            observer.disconnect()
            window.clearInterval(intervalId)
            window.removeEventListener('scroll', reveal)
            window.removeEventListener('resize', reveal)
            window.removeEventListener('hashchange', reveal)
        }

        const reveal = () => {
            if (stopped || !ref.current || !isInView(ref.current)) return
            setAnimation('mostrar')
            stop()
        }

        observer.observe(el)
        reveal()
        window.addEventListener('scroll', reveal, { passive: true })
        window.addEventListener('resize', reveal)
        window.addEventListener('hashchange', reveal)
        intervalId = window.setInterval(reveal, 200)
        window.setTimeout(() => window.clearInterval(intervalId), 1600)

        return stop
    }, [])

    return [ref, animation]
}
