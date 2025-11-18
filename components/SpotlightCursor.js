'use client'

import { useEffect, useRef } from 'react'

const SpotlightCursor = () => {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Smooth follow for main cursor
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15

      // Faster follow for dot
      dotX += (mouseX - dotX) * 0.25
      dotY += (mouseY - dotY) * 0.25

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    
    const handleMouseEnter = () => {
      cursor.style.width = '60px'
      cursor.style.height = '60px'
      cursor.style.opacity = '0.3'
    }

    const handleMouseLeave = () => {
      cursor.style.width = '40px'
      cursor.style.height = '40px'
      cursor.style.opacity = '0.2'
    }

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
          opacity: 0.2,
          mixBlendMode: 'screen',
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          backgroundColor: '#8b5cf6',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(139, 92, 246, 0.8)',
        }}
      />
    </>
  )
}

export default SpotlightCursor
