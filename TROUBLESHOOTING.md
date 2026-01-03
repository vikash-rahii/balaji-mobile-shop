# Troubleshooting GitHub Pages 404 Error

## 🔴 Issue: Getting 404 "There isn't a GitHub Pages site here"

This means GitHub Pages isn't configured or the deployment hasn't completed yet.

## ✅ Step-by-Step Fix

### Step 1: Enable GitHub Pages with GitHub Actions

1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (NOT "Deploy from a branch")
5. Click **Save**

### Step 2: Check Your Workflow

1. Go to **Actions** tab in your repository
2. Check if the workflow has run:
   - ✅ **Green checkmark** = Success (wait 1-2 minutes for site to update)
   - ❌ **Red X** = Failed (check error logs)
   - ⚠️ **No workflow** = Push code to trigger it

### Step 3: Trigger Deployment

If the workflow hasn't run yet:

**Option A: Push Code (Automatic)**
```bash
git add .
git commit -m "Fix deployment"
git push origin main
```

**Option B: Manual Trigger**
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button (top right)
4. Select branch: `main`
5. Click **Run workflow**

### Step 4: Configure Custom Domain

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `www.balajimobileshop.in`
3. Check **Enforce HTTPS** (wait for DNS to propagate first)
4. Click **Save**

### Step 5: Wait for Deployment

- First deployment: 3-5 minutes
- Subsequent deployments: 1-2 minutes
- Check **Actions** tab for status

## 🔍 Common Issues

### Issue: "Workflow not found"
**Solution**: Make sure `.github/workflows/deploy.yml` is committed and pushed

### Issue: "Build failed"
**Solution**: 
1. Check **Actions** tab for error logs
2. Fix any build errors
3. Push again

### Issue: "Site still shows 404 after deployment"
**Solution**:
1. Wait 2-3 minutes (DNS propagation)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private window
4. Check if CNAME file is in `public/` folder

### Issue: "Custom domain not working"
**Solution**:
1. Verify DNS settings (A records pointing to GitHub IPs)
2. Wait 24-48 hours for DNS propagation
3. Check CNAME file in repository root (should be `www.balajimobileshop.in`)

## 📋 Checklist

- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Workflow file exists: `.github/workflows/deploy.yml`
- [ ] CNAME file exists: `public/CNAME`
- [ ] Code pushed to `main` or `master` branch
- [ ] Workflow ran successfully (check Actions tab)
- [ ] Custom domain configured in GitHub Pages settings
- [ ] Waited 2-3 minutes after deployment

## 🚀 Quick Fix Commands

```bash
# 1. Make sure all files are committed
git add .
git commit -m "Setup GitHub Pages deployment"

# 2. Push to trigger deployment
git push origin main

# 3. Check Actions tab on GitHub for deployment status
```

## 📞 Still Not Working?

1. Check **Actions** tab for detailed error messages
2. Verify repository is public (or you have GitHub Pro)
3. Check if branch name is `main` or `master` (update workflow if different)
4. Ensure `package.json` has correct build script

