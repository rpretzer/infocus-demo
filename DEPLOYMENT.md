# Deployment Guide

This guide covers deploying the Jodi Photography website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Node.js 20.x or higher installed
- Sanity project created and configured
- Web3Forms account and access key

## Step 1: Prepare Your Environment

### 1.1 Create Sanity Project

1. Visit [sanity.io/manage](https://www.sanity.io/manage)
2. Click "Create new project"
3. Name: "Jodi Photography" (or your preference)
4. Select "production" as dataset name
5. Copy your **Project ID** (you'll need this)

### 1.2 Get Web3Forms Access Key

1. Visit [web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Create a new access key
4. Copy the access key (you'll need this)

### 1.3 Update Configuration Files

**Update `.env`:**
```env
PUBLIC_SANITY_PROJECT_ID=abc123xyz  # Your Sanity project ID
PUBLIC_SANITY_DATASET=production
PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
```

**Update `sanity/sanity.config.ts`:**
```typescript
export default defineConfig({
  name: 'default',
  title: 'Jodi Photography',
  projectId: 'abc123xyz',  // Replace with your project ID
  dataset: 'production',
  // ... rest of config
});
```

**Update `astro.config.mjs`:**
```javascript
const site = 'https://yourusername.github.io';
const base = '/your-repo-name'; // Only if deploying to subdirectory
```

## Step 2: Create GitHub Repository

### 2.1 Create New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `jodi-photography` (or your preference)
3. Description: "Professional photography portfolio website"
4. Choose **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 2.2 Initialize Git Locally

```bash
# Navigate to your project directory
cd infocus-withJodi

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Jodi Photography website"

# Rename branch to main
git branch -M main

# Add remote repository (replace with your URL)
git remote add origin https://github.com/yourusername/jodi-photography.git

# Push to GitHub
git push -u origin main
```

## Step 3: Configure GitHub Repository

### 3.1 Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` (will be created by workflow)
   - **Folder**: `/ (root)`
5. Click **Save**

### 3.2 Add GitHub Secrets

1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Click **New repository secret**
3. Add these secrets one by one:

| Name | Value |
|------|-------|
| `PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `PUBLIC_SANITY_DATASET` | `production` |
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | Your Web3Forms access key |

### 3.3 Configure GitHub Actions Permissions

1. Go to **Settings** > **Actions** > **General**
2. Under "Workflow permissions":
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
3. Click **Save**

## Step 4: Deploy

### 4.1 Trigger Deployment

The GitHub Actions workflow will run automatically when you push to `main`:

```bash
git push origin main
```

### 4.2 Monitor Deployment

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Watch the "build" and "deploy" jobs
4. Wait for green checkmarks (usually 2-3 minutes)

### 4.3 View Your Site

Once deployment completes:
- Your site will be at: `https://yourusername.github.io/jodi-photography/`
- Check the Actions tab for the exact URL

## Step 5: Add Content via Sanity

### 5.1 Access Sanity Studio Locally

```bash
npm run sanity
```

This opens Sanity Studio at [http://localhost:3333](http://localhost:3333)

### 5.2 Deploy Sanity Studio (Optional)

For a hosted Studio accessible from anywhere:

```bash
npm run sanity:deploy
```

Follow the prompts. Your Studio will be at: `https://jodiphotography.sanity.studio`

### 5.3 Add Initial Content

**Create Site Settings:**
1. Open Sanity Studio
2. Click "Site Settings"
3. Fill in:
   - Site Name: "Jodi Photography"
   - Tagline: Your tagline
   - Contact Email: Your email
   - Phone: Your phone number
   - Business Hours
4. Click "Publish"

**Add Photos:**
1. Click "Photo" > "Create"
2. Upload an image
3. Add title and description
4. Select category
5. Check "Public Gallery" to show on website
6. Check "Featured" for homepage (select 3-6 photos)
7. Click "Publish"

Repeat for more photos.

**Rebuild Site:**
After adding content, trigger a rebuild:
```bash
git commit --allow-empty -m "Trigger rebuild"
git push origin main
```

Or go to Actions tab > "Deploy to GitHub Pages" > "Run workflow"

## Step 6: Custom Domain (Optional)

### 6.1 Add Custom Domain

If you have a custom domain:

1. Go to repository **Settings** > **Pages**
2. Under "Custom domain", enter: `www.jodiphotography.com`
3. Click **Save**

### 6.2 Update DNS Records

At your domain registrar (Namecheap, GoDaddy, etc.):

**For apex domain (jodiphotography.com):**
```
Type: A
Name: @
Value: 185.199.108.153
```
Add three more A records with these IPs:
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**For www subdomain:**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

### 6.3 Update Astro Config

Update `astro.config.mjs`:
```javascript
const site = 'https://www.jodiphotography.com';
const base = undefined; // Remove base path for custom domain
```

Commit and push:
```bash
git add astro.config.mjs
git commit -m "Update for custom domain"
git push origin main
```

### 6.4 Enable HTTPS

After DNS propagates (can take 24-48 hours):
1. Go to **Settings** > **Pages**
2. Check "Enforce HTTPS"
3. Click **Save**

## Troubleshooting

### Build Fails

**Check environment variables:**
- Verify secrets are set correctly in GitHub
- Check spelling of secret names (case-sensitive)

**Check build logs:**
```bash
npm run build
```
Fix any TypeScript or build errors.

### Site Shows 404

**If all pages show 404:**
- Check `base` path in `astro.config.mjs`
- For `username.github.io/repo-name`, set `base: '/repo-name'`
- For `username.github.io` or custom domain, set `base: undefined`

**Check deployment:**
- Go to **Settings** > **Pages**
- Verify "Source" is set to `gh-pages` branch

### Images Don't Load

**Check Sanity configuration:**
- Verify `PUBLIC_SANITY_PROJECT_ID` is set correctly
- Check that photos have "Public Gallery" enabled
- Try rebuilding: `git commit --allow-empty -m "Rebuild" && git push`

### Forms Don't Work

**Check Web3Forms:**
- Verify `PUBLIC_WEB3FORMS_ACCESS_KEY` is set
- Check spam folder for form submissions
- Test form locally first: `npm run build && npm run preview`

## Updating the Site

### Content Updates

Make changes in Sanity Studio, then trigger a rebuild:
```bash
# Trigger rebuild via empty commit
git commit --allow-empty -m "Content update"
git push origin main
```

Or manually trigger via GitHub Actions.

### Code Updates

```bash
# Make your changes
git add .
git commit -m "Describe your changes"
git push origin main
```

GitHub Actions will automatically rebuild and deploy.

### Manual Build

To test locally before deploying:

```bash
# Build
npm run build

# Preview
npm run preview
```

Open [http://localhost:4321](http://localhost:4321) to test the production build.

## Maintenance

### Regular Updates

**Monthly:**
- Update dependencies: `npm update`
- Check for Astro updates: `npm outdated`
- Review analytics (if enabled)

**Quarterly:**
- Review and update content
- Check for broken links
- Run accessibility audit
- Update legal pages if needed

### Backups

**Sanity:**
- Sanity keeps version history automatically
- Export data: `sanity dataset export production backup.tar.gz`

**Code:**
- GitHub keeps full git history
- Clone to backup: `git clone <repo-url>`

## Support

**Documentation:**
- Astro: [docs.astro.build](https://docs.astro.build)
- Sanity: [sanity.io/docs](https://www.sanity.io/docs)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)

**Issues:**
- Check GitHub Actions logs for deployment errors
- Review browser console for client-side errors
- Test locally with `npm run dev` for debugging

**Developer Support:**
Contact RSP Management Solutions for assistance.
