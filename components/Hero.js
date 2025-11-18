'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const heroRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const initParallax = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)

      // Cinematic parallax for hero content
      gsap.to(heroRef.current, {
        y: 300,
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Smooth floating animation for image
      gsap.to(imageRef.current, {
        y: -80,
        rotation: 5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 2,
        },
      })

      // Continuous floating effect
      gsap.to(imageRef.current, {
        y: '+=20',
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    }

    initParallax()
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={heroRef} className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-clash font-bold gradient-text leading-tight"
            >
              Adarsh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 font-light"
            >
              Full-Stack Developer &{' '}
              <span className="text-primary font-medium">AI/ML Engineer</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 max-w-xl"
            >
              Crafting innovative solutions with modern web technologies and
              artificial intelligence. Passionate about building scalable
              applications that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center space-x-6 pt-4"
            >
              <a
                href="https://github.com/adarshkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/adarshkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 magnetic"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative z-10 rounded-full overflow-hidden border-4 border-primary/30 animate-float">
                <Image
                  src="/profile.jpg"
                  alt="Adarsh"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <HiArrowDown className="text-4xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
