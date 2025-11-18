import { useEffect, useRef } from 'react'

/**
 * Custom hook for creating cinematic horizontal scroll sections
 * @param {Object} options - Configuration options
 * @param {number} options.speed - Scroll speed multiplier (default: 1)
 * @param {boolean} options.smooth - Enable smooth scrolling (default: true)
 * @param {string} options.start - ScrollTrigger start position (default: 'top top')
 * @param {Function} options.onComplete - Callback when scroll completes
 */
export const useHorizontalScroll = (options = {}) => {
  const {
    speed = 1,
    smooth = true,
    start = 'top top',
    onComplete = null,
  } = options

  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    let ctx

    const initScroll = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)

      const section = sectionRef.current
      const container = scrollContainerRef.current
      
      if (!section || !container) return

      // Create GSAP context for cleanup
      ctx = gsap.context(() => {
        const cards = container.querySelectorAll('.horizontal-card')
        
        if (cards.length === 0) return

        // Calculate scroll distance
        const getScrollAmount = () => {
          const containerWidth = container.scrollWidth
          const viewportWidth = window.innerWidth
          return -(containerWidth - viewportWidth)
        }

        // Create horizontal scroll animation
        const tween = gsap.to(container, {
          x: getScrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: start,
            end: () => `+=${Math.abs(getScrollAmount()) * speed}`,
            scrub: smooth ? 1 : false,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onEnter: () => {
              section.classList.add('is-active')
            },
            onLeave: () => {
              section.classList.remove('is-active')
              if (onComplete) onComplete()
            },
            onEnterBack: () => {
              section.classList.add('is-active')
            },
            onLeaveBack: () => {
              section.classList.remove('is-active')
            },
          },
        })

        triggerRef.current = tween.scrollTrigger

        // Animate cards on entry
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.8,
              y: 50,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.1,
            }
          )
        })
      }, section)
    }

    initScroll()

    // Cleanup
    return () => {
      if (ctx) ctx.revert()
      if (triggerRef.current) triggerRef.current.kill()
    }
  }, [speed, smooth, start, onComplete])

  return { sectionRef, scrollContainerRef }
}
