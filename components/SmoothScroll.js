'use client'

import { useEffect } from 'react'

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Smooth scroll behavior is handled by CSS
    // This component can be extended with locomotive-scroll if needed
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.hash) {
        e.preventDefault()
        const target = document.querySelector(e.target.hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return <>{children}</>
}

export default SmoothScroll
