'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import MagneticButton from './MagneticButton'
import SplitText from './SplitText'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/adarshkumar',
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/adarshkumar',
      color: 'hover:text-primary',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:adarsh.kr2182@gmail.com',
      color: 'hover:text-secondary',
    },
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SplitText className="text-5xl md:text-6xl font-clash font-bold gradient-text mb-8 text-center">
            Get In Touch
          </SplitText>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <MagneticButton>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <FaPaperPlane />
                  </button>
                </MagneticButton>

                {status === 'success' && (
                  <p className="text-green-400 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h3 className="text-3xl font-clash font-bold text-white mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
                  part of your vision. Whether you have a question or just want to say hi, I&apos;ll try
                  my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-clash font-bold text-white mb-4">Find me on</h4>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className={`flex items-center space-x-4 text-gray-400 ${link.color} transition-colors group`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                      <link.icon className="text-xl" />
                    </div>
                    <span className="text-lg font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="glass rounded-2xl p-6">
                <p className="text-gray-300 text-center">
                  <span className="text-primary font-semibold">Email:</span>
                  <br />
                  adarsh.kr2182@gmail.com
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
