# Customization Checklist

Use this checklist to personalize your portfolio with your actual information.

## 🔗 Social Media Links

### Hero Section (`components/Hero.js`)
- [ ] Line 87: Update GitHub URL
  ```js
  href="https://github.com/YOUR-USERNAME"
  ```
- [ ] Line 93: Update LinkedIn URL
  ```js
  href="https://linkedin.com/in/YOUR-USERNAME"
  ```

### Contact Section (`components/Contact.js`)
- [ ] Line 71: Update GitHub URL
- [ ] Line 76: Update LinkedIn URL
- [ ] Line 81: Update Email
  ```js
  url: 'mailto:YOUR-EMAIL@gmail.com',
  ```
- [ ] Line 95: Update email display
  ```js
  adarsh.kr2182@gmail.com → YOUR-EMAIL@gmail.com
  ```

### Footer (`components/Footer.js`)
- [ ] Line 40: Update GitHub URL
- [ ] Line 47: Update LinkedIn URL

## 📝 Personal Information

### About Section (`components/About.js`)
- [ ] Lines 18-32: Update bio paragraphs
- [ ] Line 36: Update DSA problems count (currently 200+)
- [ ] Line 40: Update projects count (currently 10+)
- [ ] Line 44: Update certifications count (currently 3+)

### Hero Section (`components/Hero.js`)
- [ ] Line 73: Update tagline if needed
- [ ] Lines 82-87: Update description text

## 💼 Projects

### Projects Section (`components/Projects.js`)
- [ ] Lines 8-31: Update project details
  - [ ] Project titles
  - [ ] Descriptions
  - [ ] Tech stacks
  - [ ] Years
  - [ ] GitHub URLs (line 15, 26)
  - [ ] Demo URLs (line 16, 27)

**Add More Projects:**
```js
{
  title: 'Your Project Name',
  description: 'Project description...',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  year: '2025',
  gradient: 'from-green-500 to-emerald-500',
  github: 'https://github.com/username/repo',
  demo: 'https://your-demo-url.com',
}
```

## 🎓 Experience & Education

### Experience Section (`components/Experience.js`)
- [ ] Lines 7-39: Update all experience entries
  - [ ] Job titles
  - [ ] Organizations
  - [ ] Time periods
  - [ ] Descriptions

### Education Section (`components/Education.js`)
- [ ] Lines 7-28: Update education details
  - [ ] Degree names
  - [ ] Institutions
  - [ ] Time periods
  - [ ] Grades/CGPA
  - [ ] Highlights

## 🏆 Achievements

### Achievements Section (`components/Achievements.js`)
- [ ] Lines 9-38: Update achievement stats
  - [ ] DSA problems count
  - [ ] SQL badge count
  - [ ] AWS certifications
  - [ ] IBM certifications

- [ ] Lines 41-55: Update certifications list
  - [ ] Certification names
  - [ ] Issuers
  - [ ] Years

## 🛠️ Skills

### Skills Section (`components/Skills.js`)
- [ ] Lines 7-24: Update skill categories
  - [ ] Frontend skills
  - [ ] Backend skills
  - [ ] Database skills
  - [ ] AI/ML skills
  - [ ] Tools & Others

**Add/Remove Skills:**
```js
{
  title: 'Category Name',
  skills: ['Skill1', 'Skill2', 'Skill3'],
}
```

## 📧 Email Configuration

### Create `.env.local` file
- [ ] Create `.env.local` in root directory
- [ ] Add your email:
  ```env
  EMAIL_USER=your-email@gmail.com
  EMAIL_PASS=your-gmail-app-password
  ```

### Get Gmail App Password
1. [ ] Go to https://myaccount.google.com/security
2. [ ] Enable 2-Step Verification
3. [ ] Go to https://myaccount.google.com/apppasswords
4. [ ] Create password for "Mail"
5. [ ] Copy 16-character password to `.env.local`

### Update API Route (`app/api/contact/route.js`)
- [ ] Line 23: Verify recipient email
  ```js
  to: 'YOUR-EMAIL@gmail.com',
  ```

## 🎨 Optional Customizations

### Colors (`tailwind.config.js`)
- [ ] Line 10-14: Update color scheme if desired
  ```js
  primary: '#8b5cf6',    // Purple
  secondary: '#3b82f6',  // Blue
  accent: '#06b6d4',     // Cyan
  ```

### Fonts (`app/layout.js`)
- [ ] Line 1: Change fonts if desired
  ```js
  import { Inter, Space_Grotesk } from 'next/font/google'
  ```

### Meta Tags (`app/layout.js`)
- [ ] Lines 15-19: Update SEO meta tags
  ```js
  title: 'Your Name | Your Title',
  description: 'Your description',
  keywords: 'Your keywords',
  ```

## 📸 Assets

### Images
- [x] Profile image renamed to `profile.jpg`
- [ ] Consider converting to `.webp` for better performance
- [ ] Ensure high quality (at least 500x500px)

### Resume
- [x] Resume renamed to `AdarshResume.pdf`
- [ ] Ensure PDF is up to date
- [ ] Test download functionality

## 🧪 Testing Checklist

Before deploying, test:
- [ ] All navigation links work
- [ ] Smooth scroll works on all sections
- [ ] Mobile menu opens/closes correctly
- [ ] All images load properly
- [ ] Resume downloads correctly
- [ ] Social media links open correctly
- [ ] Contact form submits (if email configured)
- [ ] Animations work smoothly
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors

## 🚀 Pre-Deployment

- [ ] All customizations complete
- [ ] Tested locally
- [ ] No errors in console
- [ ] All links verified
- [ ] Content proofread
- [ ] Images optimized
- [ ] Ready to push to GitHub

## 📤 Deployment

- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Add environment variables
- [ ] Test production build
- [ ] Verify all features work
- [ ] Run Lighthouse audit
- [ ] Share your portfolio!

## 💡 Quick Tips

1. **Be Specific**: Use real numbers and achievements
2. **Keep Updated**: Regularly update projects and skills
3. **Test Everything**: Check all links and features
4. **Mobile First**: Always test on mobile devices
5. **Performance**: Optimize images and code

---

## ✅ Completion Status

Track your progress:
- [ ] Social media links updated
- [ ] Personal info customized
- [ ] Projects updated
- [ ] Experience updated
- [ ] Education updated
- [ ] Achievements updated
- [ ] Skills updated
- [ ] Email configured
- [ ] Assets optimized
- [ ] Testing complete
- [ ] Deployed successfully

---

**Once complete, you're ready to share your portfolio with the world! 🎉**
