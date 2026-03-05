# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1️⃣ Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Choose a repository name (e.g., `ingenious-repair-website`)
4. Keep it **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

---

### 2️⃣ Update Configuration Files

**IMPORTANT:** Replace the placeholders in these two files:

#### **File: `package.json`**
Find this line:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
```

Replace with your actual details:
```json
"homepage": "https://yourusername.github.io/ingenious-repair-website",
```

#### **File: `vite.config.ts`**
Find this line:
```javascript
base: '/YOUR_REPO_NAME/',
```

Replace with your repo name:
```javascript
base: '/ingenious-repair-website/',
```

---

### 3️⃣ Initialize Git and Push to GitHub

Open your terminal in the project folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Ingenious Innovate & Repair website"

# Add your GitHub repository as remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example with actual username:**
```bash
git remote add origin https://github.com/johnsmith/ingenious-repair-website.git
```

---

### 4️⃣ Deploy to GitHub Pages

Once your code is on GitHub, run this command to deploy:

```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Create a `gh-pages` branch
3. Deploy the `dist` folder to GitHub Pages
4. Your site will be live in 1-2 minutes!

---

### 5️⃣ Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

---

### 6️⃣ Access Your Live Website

Your website will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/
```

For example:
```
https://johnsmith.github.io/ingenious-repair-website/
```

---

## 🔄 Updating Your Website

Whenever you make changes to your website:

```bash
# 1. Save your changes
git add .
git commit -m "Description of your changes"

# 2. Push to GitHub
git push

# 3. Deploy updated version
npm run deploy
```

Your changes will be live in 1-2 minutes!

---

## ⚠️ Troubleshooting

### Problem: Blank page or 404 errors

**Solution:** Make sure you updated both files correctly:
- `package.json` → `homepage` field
- `vite.config.ts` → `base` field

Both should use the **exact same repository name**.

### Problem: CSS not loading

**Solution:** The `base` path in `vite.config.ts` must match your repository name and include the slashes:
```javascript
base: '/your-repo-name/',  // ✅ Correct
base: '/your-repo-name',   // ❌ Missing trailing slash
base: 'your-repo-name/',   // ❌ Missing leading slash
```

### Problem: "gh-pages not found" error

**Solution:** Make sure you installed gh-pages:
```bash
npm install gh-pages --save-dev
```

---

## 🎉 Your Website is Live!

Once deployed, share your website:
- **URL:** https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/
- **Email:** jbsingaporerepair1818@gmail.com
- **Service Area:** Singapore and Malaysia (based SG & JB)

---

## 📝 Quick Reference Commands

```bash
# Deploy website
npm run deploy

# Save changes to GitHub
git add .
git commit -m "Your message"
git push

# View deployment status
git status
```

---

## 💡 Pro Tips

1. **Custom Domain:** You can use your own domain name (e.g., www.ingeniousrepair.com) by:
   - Going to repository Settings → Pages
   - Adding your custom domain
   - Updating your DNS settings

2. **HTTPS:** GitHub Pages automatically provides free HTTPS

3. **Free Forever:** GitHub Pages is completely free for public repositories

4. **Updates are Automatic:** Every time you run `npm run deploy`, your live site updates

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
