'use client'

import { useEffect, useRef } from 'react'

const LenisScroll = ({ children }) => {
  const lenisRef = useRef(null)

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })

      lenisRef.current = lenis

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Integrate with GSAP ScrollTrigger
      const initGSAP = async () => {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)
        
        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)
      }

      initGSAP()
    }

    initLenis()

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  return <>{children}</>
}

export default LenisScroll
