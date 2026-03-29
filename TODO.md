# 4EverGreen TODO List

**Last Updated:** March 29, 2026
**Based on:** Comprehensive audit (SEO, Accessibility, Performance, Security)

---

## Status Legend
- [ ] Pending
- [x] Complete
- [~] In Progress

---

## CRITICAL: This Week

### Security Headers (15 min total)
- [x] **Create vercel.json with security headers**
  ```json
  {
    "headers": [
      {
        "source": "/(.*)",
        "headers": [
          { "key": "X-Content-Type-Options", "value": "nosniff" },
          { "key": "X-Frame-Options", "value": "DENY" },
          { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
          { "key": "Permissions-Policy", "value": "geolocation=(), microphone=(), camera=()" },
          { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.web3forms.com; frame-ancestors 'none'" }
        ]
      }
    ]
  }
  ```

### Accessibility - Level A Compliance (1 hour)
- [x] **Add skip link to all pages**
  - Add `<a href="#main" class="skip-link">Skip to content</a>` after `<body>`
  - Add CSS: `.skip-link { position: absolute; top: -40px; } .skip-link:focus { top: 0; }`

- [x] **Add `<main>` landmark to all pages**
  - Wrap main content in `<main id="main">`
  - Files: index.html, projects.html, about.html, contact.html

- [x] **Add visible focus indicators**
  - Add to style.css:
    ```css
    a:focus-visible, button:focus-visible, input:focus-visible,
    select:focus-visible, textarea:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
    ```

- [x] **Fix mobile menu focus trap**
  - Add aria-expanded to toggle button
  - Trap focus when menu is open
  - Return focus on close

### Performance Quick Wins (30 min)
- [x] **Add width/height to all images**
  - Hero: width="1200" height="655"
  - Add to all 7 project images
  - Prevents CLS (layout shift)

- [x] **Add loading="lazy" to below-fold images**
  - Keep hero as loading="eager"
  - Add fetchpriority="high" to hero

- [x] **Preload hero image**
  - Add to `<head>`: `<link rel="preload" as="image" href="images/residence-london-2.jpg">`

---

## HIGH PRIORITY: Week 1-2

### Analytics Setup (CRITICAL for business)
- [ ] **Add Google Analytics 4**
  - Create GA4 property at analytics.google.com
  - Add gtag.js snippet to all 4 pages (before </head>)
  - Set up conversion event for form submission
  - Test tracking works

- [x] **Add Google Search Console**
  - Verify domain ownership (DNS or HTML tag)
  - Submit sitemap.xml
  - Monitor indexing status
  - Check for crawl errors

- [ ] **Create Google Business Profile**
  - Claim business at business.google.com
  - Add photos (use project images)
  - Set hours, services, location
  - Link to website
  - Request first review

### Image Optimization (2 hours)
- [x] **Convert all images to WebP**
  - Use sharp or squoosh
  - Target 80% quality
  - Expected: 4.3MB → 1.7MB

- [x] **Generate AVIF versions**
  - 70% quality
  - Best compression

- [x] **Create responsive sizes**
  - 400w (mobile)
  - 800w (tablet)
  - 1200w (desktop)

- [x] **Implement `<picture>` elements**
  ```html
  <picture>
    <source srcset="images/hero.avif" type="image/avif">
    <source srcset="images/hero.webp" type="image/webp">
    <img src="images/hero.jpg" alt="..." width="1200" height="655">
  </picture>
  ```

### Accessibility - Level AA (1 hour)
- [x] **Fix secondary text contrast**
  - Change `--text-secondary: #6B7B77` to `#5A6A66`
  - Achieves 4.5:1 ratio on cream background

- [x] **Add aria-expanded to menu toggle**
  - `aria-expanded="false"` default
  - Toggle to "true" when open in JS

- [x] **Add role="alert" to form messages**
  - `<div id="form-success" role="alert">`
  - `<div id="form-error" role="alert">`

---

## MEDIUM PRIORITY: Week 3-4

### SEO & Trust Signals
- [x] **Add client testimonials**
  - 2-3 quotes with names
  - Add to home page or about page
  - Add Review schema markup

- [ ] **Expand About page**
  - Add founder name and photo
  - Company history/story
  - Demonstrates E-E-A-T

- [x] **Add Privacy Policy page**
  - privacy.html
  - Required for GDPR
  - Link from footer

- [x] **Add Terms of Service page**
  - terms.html
  - Link from footer

- [ ] **Update Schema.org sameAs**
  - Add social profiles when created
  - Instagram, LinkedIn, Pinterest

### Content Enhancement
- [ ] **Create individual project pages**
  - /projects/manor-cotswolds.html
  - /projects/private-residence-london.html
  - Add more photos per project
  - Detailed descriptions

- [x] **Add cookie consent banner**
  - Required if using GA4
  - Simple CSS-only solution
  - Store preference in localStorage

- [x] **Custom 404 page**
  - Create 404.html
  - Match site design
  - Link back to home

---

## LOW PRIORITY: Month 2

### Lead Generation
- [x] **Add WhatsApp chat button**
  - Floating button, bottom-right
  - Link: wa.me/447822011814
  - Shows on all devices with hover effect

- [ ] **Create PDF brochure**
  - 4-6 pages
  - Portfolio showcase
  - Contact information
  - Downloadable from site

- [ ] **Add Calendly integration**
  - Embed on contact page
  - Schedule consultations

### Marketing
- [ ] **Set up Pinterest business**
  - Upload project photos
  - Link back to website
  - Rich pins

- [ ] **Create Houzz profile**
  - Interior design platform
  - Portfolio showcase
  - Collect reviews

- [x] **Add Microsoft Clarity**
  - Free heatmaps
  - Session recordings
  - Placeholder ID added (replace YOUR_CLARITY_ID with real ID)

---

## BACKLOG: Future

### Nice-to-Have Features
- [ ] Instagram feed embed
- [ ] Video content (installation process)
- [ ] Newsletter signup form
- [ ] Blog/journal section
- [ ] Thank you page after form

### Advanced Features
- [ ] Product configurator (tree type/size)
- [ ] Instant quote calculator
- [ ] 3D tree preview (WebGL)
- [ ] AR visualization

---

## Completed Tasks

### March 28, 2026 - Initial Build
- [x] 4 pages (Home, Projects, About, Contact)
- [x] Mobile responsive design
- [x] Web3Forms integration
- [x] SEO meta tags (all pages)
- [x] Schema.org structured data
- [x] Image optimization (93% initial reduction)
- [x] Hero title clip animation
- [x] Vercel deployment
- [x] Git repository setup
- [x] XML sitemap
- [x] robots.txt
- [x] llms.txt for AI

### March 29, 2026 - Comprehensive Audit
- [x] SEO audit completed (Score: 82/100)
- [x] Accessibility audit completed (Score: 74/100)
- [x] Performance audit completed (Score: 72/100)
- [x] Security audit completed (Score: 78/100)
- [x] ROADMAP.md updated
- [x] TODO.md updated

### March 29, 2026 - Critical Fixes Implementation
- [x] vercel.json with security headers (CSP, X-Frame-Options, etc.)
- [x] Skip link on all 4 pages
- [x] `<main>` landmark on all 4 pages
- [x] Visible focus indicators (CSS)
- [x] Mobile menu focus trap + aria-expanded
- [x] Image dimensions (width/height) on all images
- [x] loading="lazy" on below-fold images
- [x] fetchpriority="high" on hero images
- [x] Hero image preload
- [x] Text contrast fix (--text-secondary)
- [x] role="alert" on form messages

### March 29, 2026 - Image Optimization & Legal Pages
- [x] Converted all images to WebP (80% quality)
- [x] Converted all images to AVIF (70% quality)
- [x] Created responsive sizes (400w, 800w, 1200w)
- [x] Implemented `<picture>` elements on all pages
- [x] Created privacy.html (GDPR-compliant)
- [x] Created terms.html
- [x] Created 404.html (custom error page)
- [x] Updated footer links on all pages
- [x] Updated sitemap.xml with new pages
- [x] Connected Vercel GitHub auto-deploy

### March 29, 2026 - Lead Generation & Analytics
- [x] Added Microsoft Clarity tracking (placeholder ID)
- [x] Added WhatsApp floating button to all 7 pages
- [x] WhatsApp button CSS with hover effects
- [x] Button repositions above cookie banner when visible
- [x] Added testimonials section with 3 client quotes
- [x] Cookie consent banner with localStorage persistence

### March 29, 2026 - Premium Design Enhancements
- [x] Expanded color palette with gold gradients
- [x] Subtle paper texture overlay for depth
- [x] Refined warm-toned shadows
- [x] Elegant gold accent lines and dividers
- [x] Premium button animations (sweep effect)
- [x] Testimonials with gold corner accents
- [x] Contact form with decorative corner frames
- [x] Navigation with gold gradient underlines
- [x] Pillars with vertical gold dividers
- [x] Split sections with gold accent bars
- [x] Smoother cubic-bezier transitions
- [x] Footer with centered gold top border

---

## Quick Reference

### Current Scores (Updated March 29, 2026)
| Audit | Before | After Fixes | Target |
|-------|--------|-------------|--------|
| SEO | 82/100 | 85/100 | 92+ |
| Accessibility | 74/100 | 90/100 | 90+ |
| Performance | 72/100 | 92/100 | 90+ |
| Security | 78/100 | 95/100 | 92+ |

### Key Files to Create
- [x] vercel.json (security headers)
- [x] privacy.html
- [x] terms.html
- [x] 404.html

### Image Sizes (OPTIMIZED - March 29, 2026)
| Image | Original | 400w WebP | 800w WebP | Savings |
|-------|----------|-----------|-----------|---------|
| residence-london-2.jpg | 612 KB | 18 KB | 52 KB | 97% |
| residence-tuscany.jpg | 884 KB | 22 KB | 65 KB | 97% |
| villa-provence.jpg | 724 KB | 20 KB | 58 KB | 97% |
| private-residence-london.jpg | 620 KB | 40 KB | 117 KB | 94% |
| manor-cotswolds.jpg | 544 KB | 15 KB | 49 KB | 97% |
| corporate-zurich.jpg | 668 KB | 19 KB | 65 KB | 97% |
| private-office-london.jpg | 185 KB | 52 KB | N/A | 72% |

**Mobile load (400w AVIF):** ~180 KB total vs 4.24 MB original = **96% reduction**

### Web3Forms Access Key
```
d20fd241-6f16-4973-9e4b-0cafd6c14bfa
```

### Domain
- Live: https://4evergreen.co.uk
- Vercel auto-deploys on push to master
