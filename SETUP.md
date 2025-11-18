# Quick Setup Guide

Follow these steps to get your portfolio up and running:

## Step 1: Rename Files

You need to rename the following files in the `public` folder:

### Profile Image
```bash
# Current name: adarsh image.jpg
# Rename to: profile.webp
```

**Windows Command:**
```powershell
cd public
ren "adarsh image.jpg" profile.jpg
# Then convert to webp using an online converter or image editor
# Or simply update Hero.js to use profile.jpg instead
```

**Alternative:** Update `components/Hero.js` line 82 to use your current image:
```js
src="/adarsh image.jpg"  // or convert to profile.webp
```

### Resume PDF
```bash
# Current name: SW_resume.pdf
# Rename to: AdarshResume.pdf
```

**Windows Command:**
```powershell
cd public
ren "SW_resume.pdf" "AdarshResume.pdf"
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Set Up Email (Optional)

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**How to get Gmail App Password:**
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Go to https://myaccount.google.com/apppasswords
4. Create a new app password for "Mail"
5. Copy the 16-character password

## Step 4: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Step 5: Customize Content

Update the following files with your information:

- `components/Hero.js` - Name, tagline, social links
- `components/About.js` - Bio and stats
- `components/Skills.js` - Your skills
- `components/Projects.js` - Your projects
- `components/Experience.js` - Work experience
- `components/Education.js` - Education details
- `components/Achievements.js` - Achievements and certifications
- `components/Contact.js` - Contact email

## Step 6: Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Add environment variables (EMAIL_USER, EMAIL_PASS)
5. Deploy!

## Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel
```

## Need Help?

Check the main README.md for detailed documentation.
