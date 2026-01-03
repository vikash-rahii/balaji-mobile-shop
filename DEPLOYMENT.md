# Deployment Guide for GitHub Pages with Custom Domain

This guide will help you deploy your Balaji Mobile website to GitHub Pages with a custom domain.

## Prerequisites
- GitHub account
- Custom domain name
- Git installed on your machine

## Deployment Steps

### 1. Build the Project
```bash
npm run build
```
This creates a `dist` folder with all the production-ready files.

### 2. GitHub Repository Setup

#### Option A: Deploy to `gh-pages` branch (Recommended)
1. Install `gh-pages` package (optional but helpful):
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

#### Option B: Deploy to `main` branch (Root directory)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source: "Deploy from a branch"
4. Select branch: `main` (or `master`)
5. Select folder: `/ (root)`
6. Click Save

### 3. Custom Domain Configuration

1. **In your domain registrar:**
   - Add a CNAME record pointing to: `username.github.io` (replace username with your GitHub username)
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

2. **In your GitHub repository:**
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain (e.g., `balazimobile.com`)
   - Check "Enforce HTTPS" (available after DNS propagates)

3. **Create `CNAME` file in `public` folder:**
   ```
   yourdomain.com
   ```
   (This file is automatically copied to dist during build)

### 4. Important Files Created

- **`.nojekyll`**: Prevents Jekyll processing (needed for React apps)
- **`404.html`**: Handles client-side routing for GitHub Pages
- **`vite.config.js`**: Configured with base path for root domain

### 5. Verify Deployment

1. Wait 5-10 minutes for DNS propagation
2. Visit your custom domain
3. Test all routes (they should work with the 404.html fallback)
4. Check browser console for any errors

## Troubleshooting

### Routes not working?
- Ensure `404.html` is in the `dist` folder after build
- Check that `vite.config.js` has `base: '/'`

### Images not loading?
- All images should use imports (not `/path/to/image`)
- Check that assets are in the `dist/assets` folder

### HTTPS issues?
- Wait for DNS to fully propagate (can take up to 48 hours)
- Ensure "Enforce HTTPS" is enabled in GitHub Pages settings

## Notes

- The `base` in `vite.config.js` is set to `/` for root domain deployment
- If deploying to a subdirectory (e.g., `/repo-name/`), change base to `/repo-name/`
- BrowserRouter works fine with custom domains (no need for HashRouter)
- All asset paths are relative, so they work on any domain

## Build Output

After running `npm run build`, the `dist` folder contains:
- All HTML, CSS, and JavaScript files
- Optimized assets
- `.nojekyll` file
- `404.html` for SPA routing

Push the `dist` folder contents to your deployment branch.

