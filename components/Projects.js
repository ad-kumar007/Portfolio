'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SplitText from './SplitText'
import MagneticLink from './MagneticLink'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const projects = [
    {
      title: 'SummarAI',
      description:
        'Built a full-stack app to transcribe and summarize videos with keyword/entity extraction, real-time Q&A, and TTS summaries. Integrated GPT-4 for intelligent content analysis.',
      tech: ['Streamlit', 'LangChain', 'GPT-4', 'Hugging Face', 'Python', 'NLP'],
      year: '2024-25',
      gradient: 'from-purple-500 to-pink-500',
      github: '#',
      demo: '#',
    },
    {
      title: 'Military Asset Management System',
      description:
        'Engineered secure RBAC-based asset tracking platform with real-time dashboards for movement & logistics. Implemented JWT authentication and role-based access control.',
      tech: ['React', 'Express', 'Prisma', 'Supabase', 'JWT', 'Tailwind CSS'],
      year: '2025',
      gradient: 'from-blue-500 to-cyan-500',
      github: '#',
      demo: '#',
    },
  ]

  // Use custom hook for horizontal scrolling
  const { sectionRef, scrollContainerRef } = useHorizontalScroll({
    speed: 1.5,
    smooth: true,
  })

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-32 mb-16">
        <SplitText className="text-5xl md:text-6xl font-clash font-bold gradient-text text-center">
          Featured Projects
        </SplitText>
      </div>

      <div className="horizontal-scroll-wrapper overflow-hidden min-h-screen flex items-center py-20">
        <div ref={scrollContainerRef} className="flex gap-12 px-6 md:px-16" style={{ width: 'max-content' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="horizontal-card group relative w-[90vw] md:w-[45vw] lg:w-[42vw] flex-shrink-0"
                style={{
                  perspective: '1000px',
                }}
              >
                <motion.div
                  className="relative h-full rounded-3xl p-8 md:p-10 flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: hoveredCard === index
                      ? `0 20px 60px rgba(139, 92, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2), inset 0 0 60px rgba(139, 92, 246, 0.05)`
                      : '0 8px 32px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  whileHover={{
                    y: -8,
                    rotateX: 2,
                    rotateY: -2,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Animated Gradient Overlay */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                    style={{
                      mixBlendMode: 'overlay',
                    }}
                  />

                  {/* Neon Border Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.4))`,
                      filter: 'blur(20px)',
                      zIndex: -1,
                    }}
                  />

                  {/* Year Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md border border-white/20 text-sm font-medium shadow-lg">
                    {project.year}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-3xl md:text-4xl font-clash font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack with Floating Effect */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-sm text-gray-200 font-medium backdrop-blur-sm"
                          whileHover={{
                            scale: 1.1,
                            y: -4,
                            backgroundColor: 'rgba(139, 92, 246, 0.2)',
                            borderColor: 'rgba(139, 92, 246, 0.5)',
                            transition: { duration: 0.2 },
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Magnetic Links */}
                    <div className="flex items-center gap-6 mt-auto">
                      <MagneticLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-white font-medium hover:from-primary/30 hover:to-secondary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                        strength={0.3}
                      >
                        <FaGithub className="text-lg" />
                        <span>Code</span>
                      </MagneticLink>
                      
                      <MagneticLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 text-white font-medium hover:from-secondary/30 hover:to-accent/30 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300"
                        strength={0.3}
                      >
                        <FaExternalLinkAlt className="text-base" />
                        <span>Demo</span>
                      </MagneticLink>
                    </div>
                  </div>

                  {/* Decorative Glow Elements */}
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* View More Projects Button */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/adarshkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 magnetic"
          >
            <span>View All Projects</span>
            <FaGithub className="text-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
