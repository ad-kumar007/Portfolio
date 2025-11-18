import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-clash',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Adarsh | Full-Stack Developer & AI/ML Engineer',
  description: 'Portfolio of Adarsh - Full-Stack Developer & AI/ML Engineer specializing in React, Next.js, Node.js, and Machine Learning',
  keywords: 'Adarsh, Full-Stack Developer, AI Engineer, ML Engineer, React, Next.js, Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter bg-darker text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
