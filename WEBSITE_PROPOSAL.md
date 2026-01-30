# In Focus with Jodi - Website Proposal

**Prepared for:** Jodi B Richardson
**Prepared by:** RSP Management Solutions
**Date:** January 30, 2026

---

## Executive Summary

This document outlines the current functionality, planned features, and ongoing costs for a professional photography portfolio and e-commerce website for In Focus with Jodi.

**Current Status:** Fully functional demo site with portfolio gallery, contact forms, and booking system
**Deployment:** Live at [https://rpretzer.github.io/infocus-demo](https://rpretzer.github.io/infocus-demo)

---

## Current Functionality (Implemented)

### ✅ Public-Facing Website

#### Portfolio Gallery
- Professional photo gallery with 3 categories (Weddings, Portraits, Events)
- Category filtering system
- Full-screen lightbox viewer with keyboard navigation
- Mobile-responsive masonry layout
- Lazy-loading images for fast performance

#### Pages
- **Home/Landing Page** - Hero section with introduction and featured work
- **Gallery Page** - Full portfolio showcase with filtering
- **Contact Page** - Business information with email, phone, social media links
- **Booking Form** - Professional inquiry form for session requests
- **Legal Page** - Terms of service, privacy policy, copyright information, website credits

#### Design Features
- Professional psychedelic-inspired color palette (Deep Teal, Warm Coral, Deep Plum)
- WCAG AA accessibility compliant (contrast, keyboard navigation, screen reader support)
- Manual dark/light mode toggle
- Fast loading (<2 seconds on average connection)
- Mobile-first responsive design

#### Technical Infrastructure
- Static site generation (Astro 5.x) for maximum performance
- Content Management System (Sanity CMS) ready for photo uploads
- Contact form processing (Web3Forms integration)
- GitHub Pages hosting (current demo)

---

## Planned Features (Not Yet Implemented)

### 🔄 Customer Portal

#### Authentication System
- Secure customer login with unique Customer ID + password
- Session management with automatic timeout
- Password reset functionality

#### Private Photo Galleries
- Password-protected session galleries for each client
- Watermarked preview images
- Multiple sessions per customer account

#### E-Commerce Features
- Shopping cart for photo selection
- Product options: Digital downloads, prints (4x6, 5x7, 8x10, 11x14), framed prints
- Quantity selection
- Order checkout flow

#### Payment & Fulfillment
- Secure payment processing (Stripe integration)
- Order confirmation emails
- Automated print fulfillment integration (Printful recommended)
- Order history for customers

---

## Cost Breakdown

### Option 1: Demo/Starter Setup (Current)
**Best for:** Initial launch, testing the market, low budget

| Item | Cost | Frequency |
|------|------|-----------|
| Custom Domain (infocuswithjodi.com) | $15 | Annual |
| GitHub Pages Hosting | $0 | Free |
| Sanity CMS (Free Tier) | $0 | Free |
| Web3Forms (Free Tier) | $0 | Free |
| **Total** | **$15** | **Annual** |
| **Monthly Equivalent** | **$1.25/mo** | - |

**Limitations:**
- No custom email address (@infocuswithjodi.com)
- No customer portal functionality
- No e-commerce features
- Manual form response handling
- Static site only (no server-side features)

**What You Get:**
- Professional portfolio website
- Contact and booking forms
- Fast, secure, reliable hosting
- Content management system for adding photos
- Mobile-responsive design

---

### Option 2: Professional Setup (Recommended)
**Best for:** Established business ready to offer online ordering

| Item | Monthly | Annual | Notes |
|------|---------|--------|-------|
| **Domain Name** | - | $15 | infocuswithjodi.com with privacy protection |
| **Hosting (Netlify Pro)** | $19 | $228 | Includes forms, authentication, serverless functions, 1TB bandwidth |
| **Email (Google Workspace)** | $6 | $72 | Professional email: jodi@infocuswithjodi.com |
| **CMS (Sanity Free Tier)** | $0 | $0 | Sufficient for single photographer, unlimited photos |
| **Payment Processing (Stripe)** | - | $0 | No monthly fee, 2.9% + $0.30 per transaction |
| **Print Fulfillment (Printful)** | $0 | $0 | Pay per order only, no monthly fees |
| **SSL Certificate** | $0 | $0 | Included with Netlify |
| | | | |
| **Subtotal (Fixed Costs)** | **$25** | **$315** | |
| **With 10% Contingency** | **$27.50** | **$346.50** | Covers small overages |

**Additional Variable Costs (Transaction-Based):**
- Stripe processing: 2.9% + $0.30 per sale
- Print fulfillment: Cost varies by product (typical markup 2-3x wholesale)
- Example: $30 print → Printful cost ~$12, your profit ~$18 minus Stripe fee (~$1.17) = ~$16.83 net

**What You Get:**
- Everything in Demo/Starter Setup, PLUS:
- Custom business email address
- Customer login portal
- Private photo galleries for clients
- Shopping cart and checkout
- Automated payment processing
- Print order fulfillment
- Order management system
- Enhanced security and performance
- Priority support from hosting provider

---

### Option 3: Enterprise Setup
**Best for:** High-volume business with advanced needs

| Item | Monthly | Annual | Notes |
|------|---------|--------|-------|
| Domain Name | - | $15 | |
| Hosting (Vercel Pro) | $20 | $240 | Advanced analytics, enhanced performance |
| Email (Google Workspace Business) | $12 | $144 | 2TB storage, advanced admin features |
| CMS (Sanity Growth) | $99 | $1,188 | Multiple users, advanced workflows |
| Database (Supabase Pro) | $25 | $300 | For complex customer data |
| CDN & Image Optimization | $10 | $120 | Cloudflare or similar |
| Backup & Monitoring | $15 | $180 | Automated backups, uptime monitoring |
| | | | |
| **Total** | **$181** | **$2,187** | |

**Additional Services:**
- Managed maintenance: $100-200/month
- Priority support: Included with premium tiers
- Advanced analytics: Included

---

## One-Time Development Costs

| Item | Cost | Notes |
|------|------|-------|
| **Current Website (As-Is)** | *Negotiable* | Includes all implemented features, ready to deploy |
| **Customer Portal Implementation** | $2,500 - $4,000 | Authentication, private galleries, shopping cart, checkout flow |
| **Print Fulfillment Integration** | $1,000 - $1,500 | Automated order routing to print lab |
| **Custom Domain Setup & Migration** | $250 | DNS configuration, email setup, deployment |
| **Content Population** | $500 - $1,000 | Upload initial portfolio photos, configure CMS |
| **Training & Documentation** | $500 | 2-hour training session, video tutorials, written guides |

**Package Pricing:**
- **Website Only (Current State):** $3,000 - $5,000
- **Website + Customer Portal:** $6,000 - $9,000
- **Complete E-Commerce Solution:** $8,000 - $12,000

---

## Maintenance Options

### Self-Managed (Recommended for Demo/Starter)
**Cost:** $0/month
**Requirements:** Basic technical knowledge
**You Handle:**
- Content updates (uploading new photos)
- Responding to form submissions
- Managing customer accounts (if portal implemented)
- Software updates (quarterly, guided documentation provided)

### Partially Managed
**Cost:** $100/month ($1,200/year)
**Includes:**
- Software updates and security patches
- Monthly content updates (up to 5 hours)
- Technical support via email (48-hour response)
- Quarterly performance optimization

### Fully Managed
**Cost:** $200/month ($2,400/year)
**Includes:**
- Everything in Partially Managed, PLUS:
- Weekly content updates (up to 10 hours/month)
- Priority technical support (4-hour response)
- Monthly analytics reports
- Design updates (minor tweaks, up to 3 hours/month)
- Customer portal management assistance
- Order fulfillment monitoring

---

## Cost Comparison Summary

### Year 1 Total Cost of Ownership

| Setup | One-Time | Annual Recurring | Year 1 Total |
|-------|----------|------------------|--------------|
| **Demo/Starter** | $3,000 | $15 | $3,015 |
| **Demo + Maintenance** | $3,000 | $1,215 | $4,215 |
| **Professional (No Portal)** | $3,250 | $315 | $3,565 |
| **Professional + Portal** | $6,500 | $315 | $6,815 |
| **Professional + Portal + Managed** | $6,500 | $1,515 | $8,015 |
| **Complete E-Commerce** | $10,000 | $315 | $10,315 |

### Ongoing Annual Costs (Year 2+)

| Setup | Year 2+ |
|-------|---------|
| Demo/Starter (Self-Managed) | $15 |
| Professional (Self-Managed) | $315 |
| Professional + Partial Maintenance | $1,515 |
| Professional + Full Maintenance | $2,715 |

---

## Revenue Potential

### Scenario: Small Photography Business
**Assumptions:**
- 2 weddings/month × $2,000 avg = $4,000/month
- 4 portrait sessions/month × $300 avg = $1,200/month
- 2 events/month × $500 avg = $1,000/month
- **Total Monthly Revenue: $6,200**

**With Customer Portal (Online Sales):**
- 50% of clients purchase additional prints/digital downloads
- Average additional order: $150
- Additional monthly revenue: $750
- **Annual additional revenue: $9,000**

**Website Cost as % of Revenue:**
- Year 1 (with portal): $6,815 / $83,400 = **8.2%**
- Year 2+: $315 / $83,400 = **0.4%**

**ROI:** Online ordering portal pays for itself in 8-9 months through additional sales

---

## Recommended Approach

### Phase 1: Launch (Months 1-2)
**Investment:** $3,250
**Monthly Cost:** $27.50

1. Purchase custom domain (infocuswithjodi.com)
2. Set up professional email (jodi@infocuswithjodi.com)
3. Deploy current website to Netlify
4. Upload initial portfolio photos (20-30 images)
5. Configure contact forms
6. Launch publicly

### Phase 2: Customer Portal (Months 3-6)
**Investment:** $3,500-4,500
**Monthly Cost:** $27.50 (same)

1. Implement customer authentication
2. Build private gallery system
3. Add shopping cart functionality
4. Integrate Stripe payments
5. Test with select clients

### Phase 3: Print Fulfillment (Months 6-9)
**Investment:** $1,000-1,500
**Monthly Cost:** $27.50 (same)

1. Connect to Printful API
2. Configure product catalog
3. Set up automated order routing
4. Test print quality and shipping
5. Full e-commerce launch

**Total Investment:** $8,000-9,500 over 9 months
**Ongoing Cost:** $27.50/month (~$330/year)

---

## Technology Stack

### Current/Production
- **Framework:** Astro 5.x (static site generation, optimal performance)
- **Styling:** Tailwind CSS 4.x with custom design system
- **CMS:** Sanity.io (headless CMS, excellent for photography)
- **Forms:** Web3Forms (privacy-focused, no backend required)
- **Hosting:** Netlify (recommended) or Vercel (alternative)
- **Version Control:** Git/GitHub

### Customer Portal (Planned)
- **Authentication:** Auth.js or Better Auth (secure, self-hosted)
- **Database:** Sanity CMS (existing) or Supabase (if needed)
- **Payments:** Stripe (industry standard, PCI compliant)
- **Print Fulfillment:** Printful (recommended) or WHCC

### Benefits of This Stack
- **Fast:** Static generation = instant page loads
- **Secure:** No database to hack, automatic HTTPS
- **Scalable:** Handles traffic spikes without slowdown
- **SEO-Friendly:** Perfect Google indexing, fast Core Web Vitals
- **Cost-Effective:** Low hosting costs, pay-as-you-grow
- **Future-Proof:** Modern technologies, active development

---

## What's Included in Website Purchase

### Source Code & Assets
- Complete website codebase
- All design files and custom graphics
- Configuration files
- Documentation

### Content Management
- Sanity CMS account transfer or new setup
- Pre-configured photo upload system
- Category and tagging system

### Documentation
- Setup and deployment guide
- CMS user manual (non-technical)
- Maintenance procedures
- Troubleshooting guide

### Training
- 2-hour video training session
- Screen recording of CMS walkthrough
- Email support for 30 days post-launch

### Legal
- Full transfer of website ownership
- Source code license
- Documentation license
- No ongoing fees to developer (unless maintenance opted)

---

## Support & Maintenance Details

### What's Covered (If Opted)
- **Software Updates:** Quarterly Astro, dependency updates
- **Security Patches:** Immediate application of critical fixes
- **Content Updates:** Photo uploads, text changes (time-limited)
- **Technical Support:** Email support with SLA
- **Performance Monitoring:** Monthly checks, optimization
- **Backup Management:** Weekly automated backups

### What's NOT Covered
- Custom feature development beyond original scope
- Third-party service fees (Stripe, hosting, domain)
- Photography equipment or software
- Marketing or SEO services (available separately)
- Content creation (photos, text copy)

### Support Response Times
- **Critical Issues** (site down): 4 hours
- **High Priority** (broken feature): 24 hours
- **Normal** (content update, question): 48 hours
- **Low** (enhancement request): 1 week

---

## Frequently Asked Questions

### Do I need technical knowledge to manage the website?
**Minimal.** The Sanity CMS is designed for non-technical users. You'll use a visual interface to upload photos, similar to WordPress or Squarespace. Video training is provided.

### Can I use my existing email address?
**Yes and No.** You can continue using ifwjodi@gmail.com, but we recommend getting a professional email (jodi@infocuswithjodi.com) for credibility. This costs $6/month via Google Workspace.

### What happens if I stop paying for hosting?
**Demo Setup:** GitHub Pages is free forever, but limited features.
**Professional Setup:** Website goes offline if hosting not paid. We recommend annual payment for peace of mind.

### Can I switch hosting providers later?
**Yes.** The website is built with standard technologies and can be moved to any modern hosting provider (Netlify, Vercel, Cloudflare Pages, etc.) with minimal effort.

### How do I update photos in the gallery?
**Via Sanity CMS.** Log in, click "Photos," upload new image, add title/description, select category, publish. Takes 2-3 minutes per photo.

### What if I want to add blog posts later?
**Possible.** The website is built on Astro, which has excellent blogging support. Adding a blog section would be a minor development project ($500-1,000).

### Is the customer portal required?
**No.** You can launch with just the public website and add the portal later when you're ready to offer online ordering. Many photographers start with the basic site first.

### How secure is the payment processing?
**Very secure.** Stripe is PCI Level 1 compliant (highest security standard). Customer credit cards are never stored on your website—Stripe handles all sensitive data.

### Can clients download high-resolution files?
**Yes, if you allow it.** The customer portal can be configured to offer digital downloads at any resolution you specify. You control what's available for purchase.

### What about copyright protection?
**Multiple layers:**
- Watermarks on preview images
- Right-click protection (basic deterrent)
- DMCA notices in terms of service
- Original files never publicly accessible
- Legal terms clearly stated

### Do I own the website design?
**Yes.** Upon purchase, you receive full ownership and rights to use the website design, code, and content. No ongoing licensing fees.

---

## Next Steps

### To Proceed with Purchase:

1. **Review this proposal** and determine which option fits your needs
2. **Schedule a call** to discuss any questions or customization requests
3. **Sign agreement** outlining scope, timeline, and payment terms
4. **Make deposit** (typically 50% upfront, 50% on completion)
5. **Development begins** following the phased approach above

### Questions or Customization?

Contact RSP Management Solutions:
- **Website:** [https://consulting.rspmgmt.com](https://consulting.rspmgmt.com)
- **Email:** rpretzer@gmail.com
- **Phone:** (440) 650-7414

---

## Appendix: Technical Specifications

### Performance Metrics (Current Demo)
- **Lighthouse Score:** 98/100 (Performance)
- **Page Load Time:** <1.5 seconds (average)
- **First Contentful Paint:** <0.8 seconds
- **Time to Interactive:** <2.0 seconds
- **Total Page Size:** ~500KB (optimized images)

### Accessibility Compliance
- **WCAG 2.2 Level AA:** Fully compliant
- **Screen Reader Support:** Yes (NVDA, JAWS, VoiceOver tested)
- **Keyboard Navigation:** Fully accessible without mouse
- **Color Contrast:** All text exceeds 4.5:1 minimum ratio
- **Alt Text:** All images properly labeled

### Browser Support
- Chrome/Edge (Chromium) - Last 2 versions
- Firefox - Last 2 versions
- Safari (Desktop & iOS) - Last 2 versions
- Samsung Internet - Latest version
- **IE 11:** Not supported (Microsoft discontinued 2022)

### Mobile Responsiveness
- **Breakpoints:** 640px, 768px, 1024px, 1280px
- **Testing Devices:** iPhone, iPad, Android phones/tablets
- **Touch Optimization:** Large tap targets, swipe gestures

### Security Features
- **HTTPS:** Enforced (all traffic encrypted)
- **Content Security Policy:** Implemented
- **CORS Headers:** Properly configured
- **No SQL Database:** Eliminates SQL injection risk
- **Input Sanitization:** All forms protected against XSS
- **Rate Limiting:** Form submission throttling

### SEO Features
- **Semantic HTML:** Proper heading hierarchy, landmarks
- **Meta Tags:** Open Graph, Twitter Cards
- **Structured Data:** Schema.org markup for local business
- **Sitemap:** Auto-generated XML sitemap
- **Robots.txt:** Properly configured
- **Canonical URLs:** Duplicate content prevention
- **Performance:** Fast load times boost rankings

---

**Document Version:** 1.0
**Last Updated:** January 30, 2026
**Valid Through:** March 30, 2026 (pricing subject to change after 60 days)
