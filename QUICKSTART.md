# Quick Start Guide

Get your portfolio running in 5 minutes!

## ✅ Files Already Set Up

- ✓ Profile image renamed to `profile.jpg`
- ✓ Resume renamed to `AdarshResume.pdf`
- ✓ Dependencies installed

## 🚀 Start Development Server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser!

## 📧 Enable Contact Form (Optional)

1. Create `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

2. Get Gmail App Password:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification
   - Go to https://myaccount.google.com/apppasswords
   - Create password for "Mail"
   - Copy the 16-character password

## 🎨 Customize Your Portfolio

### Update Personal Info

1. **Hero Section** - `components/Hero.js`
   - Line 87-91: Update GitHub/LinkedIn URLs
   - Line 73-78: Update tagline/description

2. **About Section** - `components/About.js`
   - Line 18-32: Update bio text

3. **Skills** - `components/Skills.js`
   - Line 7-24: Add/remove skills

4. **Projects** - `components/Projects.js`
   - Line 8-31: Update project details
   - Add your GitHub repo links

5. **Experience** - `components/Experience.js`
   - Line 7-39: Update work experience

6. **Contact** - `components/Contact.js`
   - Line 79: Update email address
   - Line 71-77: Update social links

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts!
```

Or use the Vercel Dashboard:
1. Push to GitHub
2. Go to vercel.com
3. Import your repository
4. Add environment variables
5. Deploy!

## 📱 Test Your Site

- ✓ Check all sections scroll smoothly
- ✓ Test mobile responsiveness
- ✓ Verify images load
- ✓ Test contact form
- ✓ Download resume works
- ✓ Social links work

## 🎯 Next Steps

1. **Customize Content**: Update all sections with your info
2. **Add Projects**: Add your real projects with links
3. **Test Locally**: Make sure everything works
4. **Deploy**: Push to production
5. **Share**: Share your portfolio URL!

## 💡 Tips

- Use high-quality images (profile photo)
- Keep project descriptions concise
- Update social media links
- Test on multiple devices
- Check loading speed

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Images Not Loading
- Check file names match exactly
- Ensure images are in `public` folder
- Clear browser cache

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## 📚 Documentation

- Full README: `README.md`
- Setup Guide: `SETUP.md`
- Deployment: `DEPLOYMENT.md`

---

Need help? Check the README or open an issue!
