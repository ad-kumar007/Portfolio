'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LenisScroll from '@/components/LenisScroll'
import SpotlightCursor from '@/components/SpotlightCursor'

export default function Home() {
  useEffect(() => {
    // Initialize GSAP and animations
    const initAnimations = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)
      
      // Fade in sections with stagger
      const sections = document.querySelectorAll('section')
      sections.forEach((section, index) => {
        const children = section.querySelectorAll('.reveal-child')
        
        gsap.fromTo(
          section,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )

        if (children.length > 0) {
          gsap.fromTo(
            children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        }
      })
    }
    
    initAnimations()
  }, [])

  return (
    <LenisScroll>
      <SpotlightCursor />
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </LenisScroll>
  )
}
