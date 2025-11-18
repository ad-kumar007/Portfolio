'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'KIIT University, Bhubaneswar',
      period: '2022 - 2026',
      grade: 'CGPA: 8.0/10',
      highlights: [
        'Specialization in Artificial Intelligence and Machine Learning',
        'Core coursework: Data Structures, Algorithms, DBMS, OS, Computer Networks',
        'Active member of coding club and tech societies',
      ],
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Central Board of Secondary Education',
      period: '2020 - 2022',
      grade: 'Percentage: 85%',
      highlights: [
        'Science stream with Mathematics and Computer Science',
        'School topper in Computer Science',
      ],
    },
  ]

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-clash font-bold gradient-text mb-16 text-center">
            Education
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass rounded-3xl p-8 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                      <FaGraduationCap className="text-3xl text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-clash font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-secondary font-medium mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-accent font-medium">{edu.grade}</p>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-3 text-gray-300">
                          <span className="text-secondary mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
