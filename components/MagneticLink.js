'use client'

import { useRef, useEffect } from 'react'

const MagneticLink = ({ children, href, className = '', strength = 0.4, ...props }) => {
  const buttonRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    const text = textRef.current
    if (!button) return

    let rafId = null

    const handleMouseMove = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      if (rafId) cancelAnimationFrame(rafId)
      
      rafId = requestAnimationFrame(() => {
        button.style.transform = `translate(${deltaX}px, ${deltaY}px)`
        if (text) {
          text.style.transform = `translate(${deltaX * 0.5}px, ${deltaY * 0.5}px)`
        }
      })
    }

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId)
      
      button.style.transform = 'translate(0px, 0px)'
      if (text) {
        text.style.transform = 'translate(0px, 0px)'
      }
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`magnetic-link inline-block transition-transform duration-300 ease-out ${className}`}
      style={{ willChange: 'transform' }}
      {...props}
    >
      <span ref={textRef} className="inline-block transition-transform duration-200">
        {children}
      </span>
    </a>
  )
}

export default MagneticLink
