'use client'

import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={scrollToTop}
              className="text-2xl font-clash font-bold gradient-text hover:scale-105 transition-transform cursor-pointer"
            >
              Adarsh
            </button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>© {currentYear} Adarsh</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using Next.js</span>
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            <a
              href="https://github.com/adarshkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/adarshkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            Back to Top ↑
          </button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
