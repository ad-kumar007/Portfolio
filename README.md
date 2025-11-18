# Adarsh Kumar - Portfolio Website

A modern, award-winning portfolio website built with Next.js 14, Tailwind CSS, Framer Motion, and GSAP. Features stunning animations, smooth scrolling, and a dark theme with neon purple/blue accents.

![Portfolio Preview](./preview.png)

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), React 18, Tailwind CSS
- **Stunning Animations**: Framer Motion + GSAP ScrollTrigger
- **Smooth Scrolling**: Parallax effects and scroll-triggered animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Theme**: Classy dark mode with neon purple/blue glow effects
- **Interactive Elements**: Magnetic buttons, hover effects, animated counters
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance**: Optimized images and lazy loading

## 📋 Sections

1. **Hero** - Full-screen introduction with parallax scrolling
2. **About** - Personal introduction and quick stats
3. **Skills** - Technology stack with glowing badges
4. **Projects** - Featured projects with hover effects
5. **Experience** - Timeline of work experience and leadership
6. **Education** - Academic background
7. **Achievements** - Animated counters and certifications
8. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: React Icons
- **Email**: Nodemailer
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

   To get a Gmail App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"

4. **Add your profile image**
   
   Rename your profile image to `profile.webp` and place it in the `public` folder.
   
   Current image: `public/adarsh image.jpg` should be renamed to `public/profile.webp`

5. **Add your resume**
   
   Rename your resume to `AdarshResume.pdf` and place it in the `public` folder.
   
   Current resume: `public/SW_resume.pdf` should be renamed to `public/AdarshResume.pdf`

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## 📤 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Or push to GitHub and import the project in [Vercel Dashboard](https://vercel.com/new)

3. **Add Environment Variables**
   
   In Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add `EMAIL_USER` and `EMAIL_PASS`

### Deploy to Other Platforms

The project can also be deployed to:
- **Netlify**: Use the Netlify CLI or GitHub integration
- **Railway**: Connect your GitHub repository
- **AWS Amplify**: Use the Amplify Console

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.js`)
   - Update name, tagline, and description
   - Update social media links

2. **About Section** (`components/About.js`)
   - Update bio and statistics

3. **Skills Section** (`components/Skills.js`)
   - Add/remove skills in the `skillCategories` array

4. **Projects Section** (`components/Projects.js`)
   - Update project details in the `projects` array
   - Add GitHub and demo links

5. **Experience Section** (`components/Experience.js`)
   - Update work experience in the `experiences` array

6. **Education Section** (`components/Education.js`)
   - Update educational background

7. **Achievements Section** (`components/Achievements.js`)
   - Update stats and certifications

8. **Contact Section** (`components/Contact.js`)
   - Update email address and social links

### Update Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#8b5cf6',    // Purple
  secondary: '#3b82f6',  // Blue
  accent: '#06b6d4',     // Cyan
  dark: '#0a0a0a',
  darker: '#050505',
}
```

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Contact form API
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── Navbar.js                 # Navigation bar
│   ├── Hero.js                   # Hero section
│   ├── About.js                  # About section
│   ├── Skills.js                 # Skills section
│   ├── Projects.js               # Projects section
│   ├── Experience.js             # Experience section
│   ├── Education.js              # Education section
│   ├── Achievements.js           # Achievements section
│   ├── Contact.js                # Contact section
│   ├── Footer.js                 # Footer
│   └── SmoothScroll.js           # Smooth scroll wrapper
├── public/
│   ├── profile.webp              # Profile image
│   ├── AdarshResume.pdf          # Resume PDF
│   └── fonts/                    # Custom fonts (optional)
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🔧 Troubleshooting

### Contact Form Not Working
- Ensure environment variables are set correctly
- Check Gmail settings allow less secure apps or use App Password
- Verify Nodemailer configuration in `app/api/contact/route.js`

### Images Not Loading
- Ensure images are in the `public` folder
- Check file names match exactly (case-sensitive)
- Verify image formats are supported (webp, jpg, png)

### Animations Not Working
- Clear browser cache
- Check console for JavaScript errors
- Ensure GSAP and Framer Motion are installed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Adarsh Kumar**
- Email: adarsh.kr2182@gmail.com
- GitHub: [@adarshkumar](https://github.com/adarshkumar)
- LinkedIn: [adarshkumar](https://linkedin.com/in/adarshkumar)

## 🙏 Acknowledgments

- Design inspiration from [Awwwards](https://www.awwwards.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ using Next.js
