# Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## Prerequisites

- Git installed and repository pushed to GitHub
- Node.js 18+ installed locally
- All files renamed correctly (profile.jpg, AdarshResume.pdf)

## Deploy to Vercel (Recommended - Free)

Vercel is the easiest and fastest way to deploy Next.js applications.

### Method 1: Using Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables**
   - In Project Settings → Environment Variables
   - Add:
     - `EMAIL_USER`: your-email@gmail.com
     - `EMAIL_PASS`: your-gmail-app-password

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add EMAIL_USER
vercel env add EMAIL_PASS

# Deploy to production
vercel --prod
```

## Deploy to Netlify (Alternative - Free)

### Using Netlify Dashboard

1. **Push to GitHub** (same as above)

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

4. **Environment Variables**
   - Site settings → Environment variables
   - Add EMAIL_USER and EMAIL_PASS

5. **Deploy**
   - Click "Deploy site"

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

## Deploy to Railway (Alternative - Free Tier)

1. **Push to GitHub**

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Environment Variables**
   - Add EMAIL_USER and EMAIL_PASS in Variables section

4. **Deploy**
   - Railway will automatically deploy

## Deploy to AWS Amplify

1. **Push to GitHub**

2. **AWS Amplify Console**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New app" → "Host web app"
   - Connect to GitHub

3. **Build Settings**
   - Amplify will auto-detect Next.js
   - Add environment variables in App settings

4. **Deploy**
   - Click "Save and deploy"

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records

## Post-Deployment Checklist

- [ ] Test all sections load correctly
- [ ] Verify images display properly
- [ ] Test contact form functionality
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify resume download works
- [ ] Test social media links
- [ ] Check animations work smoothly
- [ ] Test on different browsers
- [ ] Verify SEO meta tags

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check for TypeScript errors
- Review build logs for specific errors

### Images Not Loading
- Ensure images are in public folder
- Check file names match exactly (case-sensitive)
- Verify image paths in components

### Contact Form Not Working
- Verify environment variables are set
- Check email credentials are correct
- Test with Gmail App Password (not regular password)
- Check API route logs

### Animations Not Working
- Clear browser cache
- Check if GSAP and Framer Motion loaded
- Verify no JavaScript errors in console

## Performance Optimization

After deployment, check performance:

1. **Google PageSpeed Insights**
   - Test at: https://pagespeed.web.dev/
   - Aim for 90+ score

2. **Lighthouse Audit**
   - Run in Chrome DevTools
   - Check Performance, Accessibility, SEO

3. **Optimization Tips**
   - Enable image optimization in next.config.js
   - Use webp format for images
   - Minimize JavaScript bundle size
   - Enable caching headers

## Continuous Deployment

Once set up, any push to your main branch will automatically trigger a new deployment!

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Deployment happens automatically!
```

## Support

If you encounter issues:
1. Check the platform's documentation
2. Review build logs
3. Check environment variables
4. Test locally first with `npm run build`

---

Happy deploying! 🚀
