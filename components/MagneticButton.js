'use client'

import { useRef, useEffect } from 'react'

const MagneticButton = ({ children, className = '' }) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      const deltaX = (e.clientX - centerX) * 0.3
      const deltaY = (e.clientY - centerY) * 0.3

      button.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    }

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px)'
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={buttonRef}
      className={`magnetic-button transition-transform duration-300 ease-out ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

export default MagneticButton
