'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FaBriefcase } from 'react-icons/fa'
import SplitText from './SplitText'

const Experience = () => {
  const experiences = [
    {
      title: 'Technical Lead',
      organization: 'KIIT University Tech Club',
      period: '2023 - Present',
      description: [
        'Led a team of 15+ developers in building innovative web applications',
        'Organized technical workshops and hackathons with 200+ participants',
        'Mentored junior developers in full-stack development and best practices',
      ],
    },
    {
      title: 'Full-Stack Developer Intern',
      organization: 'Tech Startup',
      period: '2024',
      description: [
        'Developed RESTful APIs using Node.js and Express for client projects',
        'Implemented responsive UI components with React and Tailwind CSS',
        'Collaborated with cross-functional teams using Agile methodologies',
      ],
    },
    {
      title: 'AI/ML Research Assistant',
      organization: 'University Research Lab',
      period: '2023 - 2024',
      description: [
        'Conducted research on natural language processing and computer vision',
        'Developed ML models using TensorFlow and PyTorch for image classification',
        'Published findings in university research journal',
      ],
    },
  ]

  const timelineRef = useRef(null)

  useEffect(() => {
    const initTimeline = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)

      const timeline = timelineRef.current
      if (!timeline) return

      // Pin the timeline section
      ScrollTrigger.create({
        trigger: timeline,
        start: 'top 10%',
        end: 'bottom 80%',
        pin: '.timeline-line',
        pinSpacing: false,
      })

      // Animate timeline items
      const items = timeline.querySelectorAll('.timeline-item')
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        )
      })
    }

    initTimeline()
  }, [])

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <SplitText className="text-5xl md:text-6xl font-clash font-bold gradient-text text-center">
            Experience & Leadership
          </SplitText>
        </div>

          <div ref={timelineRef} className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="timeline-line absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="timeline-item relative reveal-child"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-dark hidden md:block"></div>

                  <div className="md:ml-20 glass rounded-3xl p-8 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-clash font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-medium">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-gray-300">
                          <span className="text-primary mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience
