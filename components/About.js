'use client'

import { motion } from 'framer-motion'
import SplitText from './SplitText'

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <SplitText className="text-5xl md:text-6xl font-clash font-bold gradient-text mb-12 text-center">
            About Me
          </SplitText>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed reveal-child">
              I&apos;m a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> and{' '}
              <span className="text-secondary font-semibold">AI/ML Engineer</span> with a strong foundation in
              building scalable web applications and intelligent systems. Currently pursuing my B.Tech in Computer
              Science and Engineering at KIIT University, I specialize in modern web technologies and machine learning.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed reveal-child">
              My expertise spans across the entire development stack - from crafting beautiful, responsive frontends
              with <span className="text-primary">React</span> and <span className="text-primary">Next.js</span>, to
              building robust backends with <span className="text-secondary">Node.js</span> and{' '}
              <span className="text-secondary">Express</span>. I&apos;m also deeply involved in AI/ML projects, working
              with frameworks like <span className="text-accent">TensorFlow</span>,{' '}
              <span className="text-accent">PyTorch</span>, and <span className="text-accent">LangChain</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed reveal-child">
              I thrive on solving complex problems and turning innovative ideas into reality. Whether it&apos;s developing
              intelligent applications with GPT-4 integration, building secure authentication systems, or optimizing
              database performance, I bring a detail-oriented approach to every project.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 reveal-child">
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-gray-400">DSA Problems Solved</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 reveal-child">
                <h3 className="text-4xl font-bold text-secondary mb-2">10+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 reveal-child">
                <h3 className="text-4xl font-bold text-accent mb-2">3+</h3>
                <p className="text-gray-400">Certifications</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
