# GitHub Actions Automatic Deployment Setup

## ✅ Automatic Deployment Configured

I've created a GitHub Actions workflow that will automatically deploy your website to GitHub Pages whenever you push code to the `main` or `master` branch.

## 📁 Files Created

- `.github/workflows/deploy.yml` - Automatic deployment workflow

## 🚀 How It Works

1. **Push Code**: When you push code to `main` or `master` branch
2. **Automatic Build**: GitHub Actions automatically:
   - Installs dependencies
   - Builds your React app
   - Deploys to GitHub Pages
3. **Live Website**: Your site is automatically updated!

## ⚙️ Setup Steps

### 1. Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch**: `gh-pages` (or `main` if deploying from root)
   - **Folder**: `/ (root)` or `/dist` depending on your setup
4. Click **Save**

### 2. Configure Custom Domain (if not done)

1. In **Settings** → **Pages**
2. Under **Custom domain**, enter: `www.balajimobileshop.in`
3. Check **Enforce HTTPS** (after DNS propagates)
4. Click **Save**

### 3. Push Your Code

```bash
git add .
git commit -m "Setup automatic deployment"
git push origin main
```

That's it! GitHub Actions will automatically:
- Build your project
- Deploy to GitHub Pages
- Your site will be live in 1-2 minutes

## 📊 Monitor Deployment

1. Go to your repository on GitHub
2. Click **Actions** tab
3. You'll see deployment status:
   - ✅ Green checkmark = Success
   - ❌ Red X = Failed (check logs)

## 🔧 Workflow Details

The workflow (`deploy.yml`) does:
- ✅ Triggers on push to `main` or `master`
- ✅ Can be manually triggered (workflow_dispatch)
- ✅ Uses Node.js 20
- ✅ Installs dependencies with `npm ci`
- ✅ Builds with `npm run build`
- ✅ Deploys `dist` folder to GitHub Pages

## 🎯 Benefits

- **Automatic**: No manual deployment needed
- **Fast**: Deploys in 1-2 minutes
- **Reliable**: Builds on every push
- **History**: See all deployments in Actions tab
- **Rollback**: Easy to revert if needed

## 🔍 Troubleshooting

### Deployment Fails?

1. Check **Actions** tab for error logs
2. Common issues:
   - Build errors (check console)
   - Missing dependencies
   - Node version mismatch

### Site Not Updating?

1. Wait 1-2 minutes for deployment
2. Clear browser cache
3. Check GitHub Pages settings
4. Verify custom domain DNS

### Manual Deployment

If you need to deploy manually:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## 📝 Next Steps

1. ✅ Push your code to GitHub
2. ✅ Enable GitHub Pages in Settings
3. ✅ Configure custom domain
4. ✅ Watch automatic deployment happen!

---

**Note**: The first deployment might take 3-5 minutes. Subsequent deployments are usually faster (1-2 minutes).

