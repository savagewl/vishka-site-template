import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ autoRaf: true, autoToggle: true })

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
      const target = link && document.querySelector(link.hash)
      if (!target) return

      event.preventDefault()
      lenis.scrollTo(window.scrollY + target.getBoundingClientRect().top)
      history.replaceState(null, '', link.hash)
    }

    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])
}
