# Jodi Photography Website

A professional photography portfolio and customer portal built with Astro, Tailwind CSS, and Sanity CMS.

## Features

### Public Website
- **Landing Page**: Hero section with services overview and call-to-action
- **Portfolio Gallery**: Filterable photo gallery with categories
- **Contact Page**: Business information and contact details
- **Booking Form**: Session booking request with email notifications
- **Legal Page**: Terms of service, privacy policy, and credits

### Customer Portal (Coming Soon)
- **Private Galleries**: Password-protected photo sessions
- **Photo Selection**: Browse watermarked photos and add to cart
- **Shopping Cart**: Select products (digital, prints, framed)
- **Checkout**: Order submission via email (payment processing to be added)

### Design Highlights
- **WCAG AA Accessible**: Meets WCAG 2.2 Level AA accessibility standards
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Static site generation for fast loading
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **[Astro 5](https://astro.build/)** - Static site framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling
- **[Sanity.io](https://www.sanity.io/)** - Headless CMS
- **[Web3Forms](https://web3forms.com/)** - Form backend
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** - Password hashing

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or pnpm
- A Sanity account (free tier available)
- A Web3Forms account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd infocus-withJodi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

   Update the values in `.env`:
   ```env
   PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   PUBLIC_SANITY_DATASET=production
   PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
   ```

4. **Configure Sanity**

   Update `sanity/sanity.config.ts` with your project ID:
   ```typescript
   projectId: 'your_project_id', // Replace with your Sanity project ID
   dataset: 'production',
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

## Sanity CMS Setup

### Create a Sanity Project

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click "Create project"
3. Choose a project name
4. Select "production" dataset
5. Copy your Project ID

### Deploy Sanity Studio

The Sanity Studio is included in this project. To run it locally:

```bash
npm run sanity
```

This starts Sanity Studio at [http://localhost:3333](http://localhost:3333).

To deploy the Studio to Sanity's hosted service:

```bash
npm run sanity:deploy
```

### Content Schemas

The project includes these Sanity schemas:

- **Customer**: Customer accounts with authentication
- **Photo Session**: Private photo galleries for customers
- **Photo**: Photos with pricing and category information
- **Site Settings**: Global site configuration

### Adding Content

1. Start Sanity Studio (`npm run sanity`)
2. Navigate to the content type you want to create
3. Click "Create" and fill in the fields
4. Publish your changes

#### Adding Photos to Public Gallery

1. Create a new Photo document
2. Upload the image
3. Add title and description
4. Select a category (Weddings, Portraits, Events, Other)
5. Check "Public Gallery" to display on the website
6. Check "Featured" to show on the homepage (max 6)
7. Publish

## Development

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Astro dev server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run sanity` | Start Sanity Studio at localhost:3333 |
| `npm run sanity:deploy` | Deploy Sanity Studio to hosting |
| `npm run check-deploy` | Type-check and build for deployment |

### Project Structure

```
infocus-withJodi/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment
├── public/
│   └── placeholder-images/      # Static assets
├── sanity/
│   ├── schemas/                 # Sanity content schemas
│   │   ├── customer.ts
│   │   ├── photo.ts
│   │   ├── photoSession.ts
│   │   └── siteSettings.ts
│   └── sanity.config.ts         # Sanity configuration
├── src/
│   ├── components/
│   │   ├── cart/                # Shopping cart (coming soon)
│   │   ├── customer/            # Customer portal (coming soon)
│   │   ├── forms/               # Form components
│   │   ├── gallery/             # Gallery components
│   │   ├── layout/              # Header, Footer, etc.
│   │   └── ui/                  # Reusable UI components
│   ├── layouts/
│   │   └── Layout.astro         # Base page layout
│   ├── lib/
│   │   ├── auth.ts              # Authentication utilities (coming soon)
│   │   ├── cart.ts              # Cart management (coming soon)
│   │   ├── sanity.ts            # Sanity client configuration
│   │   ├── sanity-queries.ts    # GROQ queries
│   │   └── types.ts             # TypeScript type definitions
│   ├── pages/
│   │   ├── customer/            # Customer portal pages (coming soon)
│   │   ├── book.astro           # Booking form
│   │   ├── contact.astro        # Contact page
│   │   ├── gallery.astro        # Public gallery
│   │   ├── index.astro          # Homepage
│   │   └── legal.astro          # Legal information
│   ├── styles/
│   │   └── global.css           # Global styles and CSS variables
│   └── utils/
│       ├── password.ts          # Password utilities (coming soon)
│       └── session.ts           # Session management (coming soon)
├── .env.example                 # Environment variables template
├── astro.config.mjs             # Astro configuration
├── package.json
├── tailwind.config.mjs          # Tailwind configuration (if needed)
└── tsconfig.json                # TypeScript configuration
```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

#### Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Configure GitHub Repository**
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Click Save

3. **Add Secrets**

   Go to Settings > Secrets and variables > Actions, and add:
   - `PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
   - `PUBLIC_SANITY_DATASET`: `production`
   - `PUBLIC_WEB3FORMS_ACCESS_KEY`: Your Web3Forms access key

4. **Update Site Configuration**

   In `astro.config.mjs`, update the site URL:
   ```javascript
   site: 'https://username.github.io',
   base: '/repo-name', // Only if deploying to a subpath
   ```

5. **Deploy**

   Push to the `main` branch to trigger automatic deployment:
   ```bash
   git push origin main
   ```

The site will be available at `https://username.github.io/repo-name/` (or your custom domain).

### Manual Deployment

Build the site locally:

```bash
npm run build
```

The static files in `./dist/` can be deployed to any static hosting service.

## Customization

### Theme Colors

Colors are defined using CSS custom properties in `src/styles/global.css`. Update the `:root` section to customize:

```css
:root {
  --color-primary-600: #yourcolor;
  --color-accent-600: #yourcolor;
  /* ... */
}
```

All colors meet WCAG AA contrast requirements (4.5:1 for body text, 3:1 for large text).

### Site Information

Update site details in Sanity Studio:
1. Open Sanity Studio
2. Navigate to "Site Settings"
3. Update business name, tagline, contact info, etc.

### Adding Pages

Create new `.astro` files in `src/pages/`. They'll automatically become routes:

```
src/pages/about.astro → /about
src/pages/services.astro → /services
```

## Customer Portal (Coming Soon)

The customer portal features are planned and schemas are ready, but implementation is pending:

- Customer authentication
- Private photo galleries
- Shopping cart
- Checkout flow

To complete the customer portal setup, implement tasks #10-14 from the project plan.

## Accessibility

This site follows WCAG 2.2 Level AA standards:

- ✅ Semantic HTML5 structure
- ✅ ARIA labels and landmarks
- ✅ Keyboard navigation support
- ✅ Color contrast ratios (4.5:1 minimum)
- ✅ Responsive text sizing
- ✅ Focus indicators
- ✅ Screen reader compatibility

## Support & Maintenance

### Updating Content

All content is managed through Sanity Studio. No code changes needed for:
- Adding/removing photos
- Updating business information
- Changing contact details
- Managing customer accounts (when implemented)

### Theme Updates

To update colors, typography, or spacing:
1. Edit `src/styles/global.css`
2. Run `npm run dev` to see changes
3. Deploy via git push

### Future Enhancements

Planned features for post-purchase:
- Stripe payment integration
- Print fulfillment API (Printful/WHCC)
- Server-side authentication (migrate to Netlify/Vercel)
- Email notifications
- Analytics integration

## Credits

**Website created by [RSP Management Solutions](https://www.stillgotitcollective.com/legal)**

### Technologies
- Framework: Astro 5
- Styling: Tailwind CSS 4
- CMS: Sanity.io
- Deployment: GitHub Pages
- Forms: Web3Forms

## License

Copyright © 2026 Jodi Photography. All rights reserved.

---

For questions or support, please contact:
- Developer: RSP Management Solutions
- Business: hello@jodiphotography.com
