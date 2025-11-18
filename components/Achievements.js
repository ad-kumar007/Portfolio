'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { FaTrophy, FaAward, FaCertificate, FaCode } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      icon: FaCode,
      title: 'DSA Problems',
      count: 200,
      suffix: '+',
      description: 'Solved on LeetCode & CodeForces',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaTrophy,
      title: 'SQL Mastery',
      count: 50,
      suffix: '',
      description: 'SQL50 Badge on LeetCode',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaCertificate,
      title: 'AWS Certified',
      count: 1,
      suffix: '',
      description: 'Cloud Practitioner',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: FaAward,
      title: 'IBM Certified',
      count: 2,
      suffix: '+',
      description: 'AI & Data Science',
      color: 'from-green-500 to-teal-500',
    },
  ]

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
    },
    {
      name: 'IBM Data Science Professional Certificate',
      issuer: 'IBM',
      year: '2024',
    },
    {
      name: 'IBM AI Engineering Professional Certificate',
      issuer: 'IBM',
      year: '2023',
    },
  ]

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-clash font-bold gradient-text mb-16 text-center">
            Achievements & Certifications
          </h2>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <AnimatedCard key={achievement.title} achievement={achievement} index={index} />
            ))}
          </div>

          {/* Certifications List */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-clash font-bold text-white mb-8 text-center">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <FaCertificate className="text-4xl text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-accent font-medium">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const AnimatedCard = ({ achievement, index }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)
  const Icon = achievement.icon

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const end = achievement.count
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, achievement.count])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass rounded-2xl p-6 text-center relative overflow-hidden group"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      ></div>

      <Icon className="text-5xl mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" />
      
      <div className="text-4xl font-clash font-bold gradient-text mb-2">
        {count}
        {achievement.suffix}
      </div>
      
      <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
      <p className="text-sm text-gray-400">{achievement.description}</p>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </motion.div>
  )
}

export default Achievements
