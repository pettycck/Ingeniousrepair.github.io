# 🚀 Quick Deployment Guide - Ingenious Innovate & Repair

## Prerequisites
- Git installed on your computer
- GitHub account created
- Node.js installed (for running npm commands)

---

## ⚡ Quick Start (5 Steps)

### STEP 1: Create GitHub Repository

1. Go to https://github.com and login
2. Click **"+"** → **"New repository"**
3. Repository name: `ingenious-repair-website` (or your preferred name)
4. Set to **Public**
5. **DO NOT** check any initialization options
6. Click **"Create repository"**

**📝 Note:** Remember your repository name - you'll need it in Step 2!

---

### STEP 2: Update Configuration Files

You need to update TWO files with your GitHub username and repository name:

#### File 1: `package.json`
Find line 6 and replace:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
```

**Example:**
```json
"homepage": "https://jbrepair.github.io/ingenious-repair-website",
```

#### File 2: `vite.config.ts`
Find line 7 and replace:
```javascript
base: '/YOUR_REPO_NAME/',
```

**Example:**
```javascript
base: '/ingenious-repair-website/',
```

⚠️ **IMPORTANT:** 
- Use the **exact same** repository name in both files
- Keep the `/` slashes in `vite.config.ts`
- Use lowercase and hyphens (no spaces)

---

### STEP 3: Initialize Git & Push to GitHub

Open terminal/command prompt in your project folder and run these commands **one by one**:

```bash
# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Ingenious Innovate & Repair website"

# Add remote repository (replace with YOUR info)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example with real username:**
```bash
git remote add origin https://github.com/jbrepair/ingenious-repair-website.git
```

---

### STEP 4: Deploy to GitHub Pages

Run this single command:

```bash
npm run deploy
```

This will automatically:
✅ Build your website
✅ Create `gh-pages` branch
✅ Upload to GitHub Pages

Wait for "Published" message in terminal (takes 30-60 seconds).

---

### STEP 5: Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top right)
3. Click **"Pages"** in left sidebar
4. Under **"Source"**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
5. Click **"Save"**

**⏱️ Wait 1-2 minutes**, then visit:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 🎉 Your Website is LIVE!

Your website URL will be:
```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
```
https://jbrepair.github.io/ingenious-repair-website/
```

---

## 🔄 Making Updates Later

Whenever you make changes to your website:

```bash
# 1. Save changes to Git
git add .
git commit -m "Updated services section"
git push

# 2. Deploy to live site
npm run deploy
```

Changes will be live in 1-2 minutes! ✨

---

## ❌ Troubleshooting

### Problem: Blank page or 404 error

**Fix:** Check that both files have the **same repository name**:
- `package.json` → `homepage` field
- `vite.config.ts` → `base` field

### Problem: CSS/Images not loading

**Fix:** Make sure `vite.config.ts` has slashes:
```javascript
base: '/your-repo/',  // ✅ Correct (has both / /)
base: '/your-repo',   // ❌ Missing trailing /
base: 'your-repo/',   // ❌ Missing leading /
```

### Problem: "Permission denied" when pushing

**Fix:** You may need to authenticate with GitHub:
```bash
# Use personal access token instead of password
# Generate token at: https://github.com/settings/tokens
```

---

## 🌐 Custom Domain (Optional)

Want to use your own domain (e.g., www.ingeniousrepair.com)?

1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. Go to repository **Settings → Pages**
3. Enter your custom domain
4. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
5. Wait 24-48 hours for DNS propagation

---

## 📞 Support Information

**Website Contact:**
- **Email:** jbsingaporerepair1818@gmail.com
- **Service Area:** Singapore and Malaysia (based SG & JB)

**GitHub Pages Documentation:**
https://docs.github.com/en/pages

---

## ✅ Checklist

Before deploying, make sure:

- [ ] Updated `package.json` with your GitHub username and repo name
- [ ] Updated `vite.config.ts` with your repo name
- [ ] Created GitHub repository (public)
- [ ] Pushed code to GitHub
- [ ] Ran `npm run deploy`
- [ ] Enabled GitHub Pages in repository settings
- [ ] Waited 1-2 minutes and checked the live URL

---

**🎊 Congratulations! Your website is now live on the internet!**
