# 🚀 Deployment Guide - Adarsh Portfolio

## Quick Deploy to Vercel (Recommended - 5 minutes)

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Press Enter to accept defaults
   - Your site will be live in ~2 minutes!

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Adarsh Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! ✅

### Option 3: Deploy via GitHub Integration (Best for Updates)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `portfolio`
   - Make it public or private
   - Don't initialize with README

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "🎉 Initial commit - Premium portfolio with cinematic animations"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Select your repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

4. **Auto-Deploy on Push**
   - Every `git push` automatically deploys
   - Preview deployments for branches
   - Production deployment for `main` branch

---

## 🌐 Alternative Platforms

### Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Deploy to Railway

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login**
   ```bash
   railway login
   ```

3. **Deploy**
   ```bash
   railway up
   ```

---

## ⚙️ Environment Variables (For Contact Form)

If you want the contact form to work, add these environment variables:

### On Vercel:
1. Go to Project Settings → Environment Variables
2. Add:
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASS` = your-app-password

### On Local:
Create `.env.local`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** For Gmail, use an App Password (not your regular password):
- Go to Google Account → Security → 2-Step Verification → App Passwords
- Generate password for "Mail"
- Use that password as `EMAIL_PASS`

---

## 📝 Pre-Deployment Checklist

✅ **Update Personal Information:**
- [ ] Replace GitHub links in `Hero.js`, `Footer.js`, `Contact.js`
- [ ] Update email in `Contact.js` API route
- [ ] Add your actual project GitHub/demo links in `Projects.js`
- [ ] Replace profile image at `public/profile.jpg`
- [ ] Add your resume PDF at `public/AdarshResume.pdf`

✅ **Test Build Locally:**
```bash
npm run build
npm start
```
Visit http://localhost:3000 to verify everything works

✅ **Check for Errors:**
```bash
npm run lint
```

---

## 🎯 Custom Domain Setup

### On Vercel:

1. **Buy Domain** (optional)
   - Namecheap, GoDaddy, Google Domains, etc.

2. **Add Domain to Vercel**
   - Go to Project Settings → Domains
   - Add your domain: `adarsh.dev` or `adarshkumar.com`

3. **Update DNS Records**
   - Add these records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for Propagation** (5-30 minutes)

---

## 🔧 Build Configuration

Your `next.config.js` is already optimized:
```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
```

Your `vercel.json` (if needed):
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

---

## 📊 Performance Optimization

Your portfolio is already optimized with:
- ✅ Image optimization (Next.js Image)
- ✅ Code splitting (automatic)
- ✅ CSS optimization (Tailwind purge)
- ✅ Font optimization (Google Fonts)
- ✅ Animation performance (GSAP + RAF)
- ✅ Lazy loading (React Suspense ready)

Expected Lighthouse scores:
- Performance: 90-95
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Module not found"**
```bash
npm install
npm run build
```

**Error: "Out of memory"**
```bash
# Increase Node memory
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Contact Form Not Working

1. Check environment variables are set
2. Verify email/password are correct
3. Enable "Less secure app access" or use App Password for Gmail

### Images Not Loading

1. Check images exist in `public/` folder
2. Verify paths are correct (case-sensitive)
3. Use Next.js Image component

---

## 🎉 Post-Deployment

### Share Your Portfolio:
- LinkedIn: Add to profile
- GitHub: Pin repository
- Resume: Add portfolio link
- Twitter/X: Share with #webdev

### Monitor Performance:
- Vercel Analytics (built-in)
- Google Analytics (optional)
- Vercel Speed Insights

### Keep Updated:
```bash
# Make changes
git add .
git commit -m "Update projects"
git push

# Auto-deploys to Vercel!
```

---

## 📞 Support

If you face issues:
1. Check Vercel deployment logs
2. Run `npm run build` locally to debug
3. Check browser console for errors
4. Verify all dependencies are installed

---

## 🌟 Your Portfolio is Ready!

**Live URL:** `https://your-project.vercel.app`

**Features:**
✅ Cinematic animations with GSAP  
✅ Smooth Lenis scrolling  
✅ Horizontal scroll projects gallery  
✅ Glassmorphism design  
✅ Magnetic buttons  
✅ Spotlight cursor  
✅ Split-text reveals  
✅ Fully responsive  
✅ SEO optimized  
✅ Performance optimized  

**Next Steps:**
1. Deploy using one of the methods above
2. Add custom domain (optional)
3. Share with the world! 🚀

---

Made with ❤️ by Adarsh
