'use client'

import { useEffect, useRef } from 'react'

const SplitText = ({ children, className = '', delay = 0 }) => {
  const textRef = useRef(null)

  useEffect(() => {
    const initAnimation = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const SplitType = (await import('split-type')).default

      gsap.registerPlugin(ScrollTrigger)

      if (textRef.current) {
        const text = new SplitType(textRef.current, { types: 'chars,words' })

        gsap.fromTo(
          text.chars,
          {
            opacity: 0,
            y: 50,
            rotateX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.02,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
            delay: delay,
          }
        )
      }
    }

    initAnimation()
  }, [delay])

  return (
    <div ref={textRef} className={className} style={{ perspective: '1000px' }}>
      {children}
    </div>
  )
}

export default SplitText
