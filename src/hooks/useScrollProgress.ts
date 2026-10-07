import { useEffect, useRef } from 'react'

type ScrollProgressOptions = {
  from?: 'top' | 'screen'
  distance?: number
}

export function useScrollProgress<T extends HTMLElement>({
  from = 'top',
  distance = 0.75,
}: ScrollProgressOptions = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const { top, height } = element.getBoundingClientRect()
      const raw =
        from === 'top'
          ? -top / (height * distance)
          : (window.innerHeight - top) / (window.innerHeight + height)
      element.style.setProperty('--p', Math.min(Math.max(raw, 0), 1).toFixed(4))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [from, distance])

  return ref
}
