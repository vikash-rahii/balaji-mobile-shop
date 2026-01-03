# Domain Setup Guide for balajimobileshop.in

## ✅ Domain Configuration Completed

All domain references have been updated to: **http://www.balajimobileshop.in/**

### Files Updated:
- ✅ `public/sitemap.xml` - All URLs updated
- ✅ `public/robots.txt` - Sitemap URL updated
- ✅ `index.html` - Open Graph and Twitter Card URLs updated
- ✅ `src/components/SEO.jsx` - Automatically uses your domain (no changes needed)

## 🔒 Important: HTTPS Setup (Recommended)

Your domain currently uses **HTTP**. For better SEO and security, it's highly recommended to set up **HTTPS (SSL Certificate)**.

### Why HTTPS is Important:
1. **Better SEO Rankings**: Google favors HTTPS websites
2. **Security**: Protects user data
3. **Trust**: Shows security badge in browser
4. **Required for**: Modern web features, better search rankings

### How to Get HTTPS:

#### Option 1: GitHub Pages (Free)
If deploying via GitHub Pages:
1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `www.balajimobileshop.in`
3. Check "Enforce HTTPS" (available after DNS propagates)
4. GitHub provides free SSL certificate automatically

#### Option 2: Cloudflare (Free)
1. Sign up for Cloudflare (free plan)
2. Add your domain
3. Update nameservers at your domain registrar
4. Cloudflare provides free SSL automatically
5. Enable "Always Use HTTPS"

#### Option 3: Let's Encrypt (Free)
If using your own hosting:
1. Install Certbot
2. Get free SSL certificate from Let's Encrypt
3. Configure automatic renewal

### After HTTPS Setup:
Once HTTPS is active, update these files to use `https://` instead of `http://`:
- `public/sitemap.xml`
- `public/robots.txt`
- `index.html`

## 📍 DNS Configuration

Ensure your DNS is properly configured:

### For GitHub Pages:
- **CNAME Record**: Point `www` to `username.github.io`
- **A Records** (if using root domain): Point to GitHub IPs
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

### For Custom Hosting:
- Point A record to your server IP
- Point CNAME for www to your domain

## ✅ Current Status

- Domain: `http://www.balajimobileshop.in/`
- All SEO files updated
- Ready for deployment
- **Next Step**: Set up HTTPS (highly recommended)

## 🚀 Deployment Steps

1. Build your project: `npm run build`
2. Deploy `dist` folder to your hosting
3. Configure DNS settings
4. Set up HTTPS/SSL
5. Submit sitemap to Google Search Console
6. Verify website is accessible

---

**Note**: The SEO component will automatically use your actual domain when the site is live, so dynamic meta tags will work correctly.

