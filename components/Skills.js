'use client'

import { motion } from 'framer-motion'
import SplitText from './SplitText'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux', 'Framer Motion'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'RESTful APIs', 'GraphQL', 'JWT', 'OAuth'],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'Supabase', 'Redis', 'Firebase'],
    },
    {
      title: 'AI/ML',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'GPT-4', 'Hugging Face', 'OpenCV', 'NLP'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'Linux', 'CI/CD', 'Agile'],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SplitText className="text-5xl md:text-6xl font-clash font-bold gradient-text mb-16 text-center">
            Skills & Technologies
          </SplitText>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="glass rounded-3xl p-8"
              >
                <h3 className="text-2xl font-clash font-bold text-white mb-6">
                  {category.title}
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={item}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
