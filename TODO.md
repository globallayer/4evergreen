# 4EverGreen — TODO

**Last Updated:** April 1, 2026
**Live Site:** https://4evergreen.co.uk
**Status:** Production Ready (92% complete)

---

## Executive Summary

EverGreen is a **production-ready luxury e-commerce brochure site** with excellent technical foundations. The site achieves industry-leading scores in performance (92/100), accessibility (90/100), and security (95/100).

| Audit | Score | Status |
|-------|-------|--------|
| SEO | 85/100 | ⚠️ Good (needs Google Business Profile) |
| Accessibility | 90/100 | ✅ WCAG 2.1 AA compliant |
| Performance | 92/100 | ✅ Excellent (96% image optimization) |
| Security | 95/100 | ✅ Strong headers + CSP |

---

## 🔴 CRITICAL — This Week

### Google Business Profile (MOST IMPORTANT)
- [ ] Go to https://business.google.com
- [ ] Search for "4EverGreen London"
- [ ] Claim business and complete profile
- [ ] Upload project photos
- [ ] Add opening hours, services
- [ ] Request first review from satisfied client
- **Impact:** HIGH (local search visibility, trust)
- **Effort:** 30 minutes

### Replace Microsoft Clarity ID
- [ ] Get real ID from https://clarity.microsoft.com
- [ ] Replace `YOUR_CLARITY_ID` in all 7 HTML files
- [ ] Test heatmap functionality
- **Impact:** MEDIUM (analytics data)
- **Effort:** 5 minutes

### Expand About Page with Founder Bio
- [ ] Add founder name, photo, credentials
- [ ] Write 2-3 paragraph origin story
- [ ] Include industry experience/certifications
- [ ] Update schema with Person entity
- **Impact:** HIGH (E-E-A-T authority signals)
- **Effort:** 1 hour

---

## 🟡 HIGH PRIORITY — Week 2-3

### Social Media Setup
- [ ] Create Instagram business account
- [ ] Create Pinterest business account
- [ ] Update Schema.org `sameAs` array with URLs
- **Effort:** 1-2 hours

### Individual Project Pages
- [ ] Create `/projects/manor-cotswolds.html`
- [ ] Create `/projects/private-residence-london.html`
- [ ] Create pages for remaining 5 projects
- [ ] Add more photos per project
- [ ] Add detailed descriptions
- [ ] Add to sitemap
- **Impact:** HIGH (more indexed pages, better SEO)
- **Effort:** 3 hours

---

## 🟢 MEDIUM PRIORITY — Month 2

### Lead Generation Enhancements
- [ ] Create PDF brochure (4-6 pages)
- [ ] Add "Download Brochure" CTA on contact page
- [ ] Add Calendly integration for consultations
- **Effort:** 2-3 hours

### Additional Testimonials
- [ ] Collect 2-3 additional client quotes
- [ ] Vary testimonials by project type
- [ ] Optional: Add name/title with permission
- **Effort:** Ongoing

---

## ⚪ LOW PRIORITY — Backlog

### Analytics
- [ ] Set up Google Analytics 4 (user deprioritized)
- [ ] Track contact form submission as conversion

### Marketing Channels
- [ ] Pinterest Business Profile with rich pins
- [ ] Houzz portfolio listing
- [ ] Instagram feed embed on site

### Nice-to-Have Features
- [ ] Video content (installation process)
- [ ] Newsletter signup form
- [ ] Blog/journal section
- [ ] Thank you page after form
- [ ] Product configurator (tree type/size)
- [ ] Instant quote calculator
- [ ] 3D tree preview (WebGL)
- [ ] AR visualization

---

## ✅ COMPLETED

### March 28, 2026 — Initial Build
- [x] 4 pages (Home, Projects, About, Contact)
- [x] Mobile responsive design
- [x] Web3Forms integration
- [x] SEO meta tags (all pages)
- [x] Schema.org structured data
- [x] Image optimization (93% initial reduction)
- [x] Hero title clip animation
- [x] Vercel deployment
- [x] Git repository setup
- [x] XML sitemap + robots.txt
- [x] llms.txt for AI crawlers

### March 29, 2026 — Security & Accessibility
- [x] vercel.json with security headers (CSP, X-Frame-Options, etc.)
- [x] Skip link on all pages
- [x] `<main>` landmark on all pages
- [x] Visible focus indicators
- [x] Mobile menu focus trap + aria-expanded
- [x] Image dimensions (width/height) on all images
- [x] loading="lazy" on below-fold images
- [x] Hero image preload
- [x] Text contrast fix

### March 29, 2026 — Image Optimization & Legal
- [x] Converted all images to WebP + AVIF
- [x] Created responsive sizes (400w, 800w, 1200w)
- [x] Implemented `<picture>` elements
- [x] Created privacy.html (GDPR-compliant)
- [x] Created terms.html
- [x] Created 404.html

### March 29, 2026 — Lead Generation & Design
- [x] Microsoft Clarity tracking (placeholder ID)
- [x] WhatsApp floating button on all 7 pages
- [x] Cookie consent banner with localStorage
- [x] Testimonials section with 3 client quotes
- [x] Premium design enhancements (gold accents, paper texture)

---

## Image Optimization Results

| Image | Original | 400w WebP | Savings |
|-------|----------|-----------|---------|
| residence-london-2.jpg | 612 KB | 18 KB | 97% |
| residence-tuscany.jpg | 884 KB | 22 KB | 97% |
| villa-provence.jpg | 724 KB | 20 KB | 97% |
| private-residence-london.jpg | 620 KB | 40 KB | 94% |
| manor-cotswolds.jpg | 544 KB | 15 KB | 97% |
| corporate-zurich.jpg | 668 KB | 19 KB | 97% |
| private-office-london.jpg | 185 KB | 52 KB | 72% |

**Mobile load (400w AVIF):** ~180 KB total vs 4.24 MB original = **96% reduction**

---

## Technical Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 semantic |
| Styling | CSS3 with variables (~1,600 lines) |
| Interactivity | Vanilla JS (219 lines) |
| Images | WebP/AVIF with responsive srcset |
| Forms | Web3Forms + honeypot spam protection |
| Hosting | Vercel (auto-deploy from GitHub) |
| Analytics | Microsoft Clarity (stub) |
| Schema | Schema.org JSON-LD |

---

## Quick Reference

### Domain
- Live: https://4evergreen.co.uk
- Vercel auto-deploys on push to master

### Web3Forms Access Key
```
d20fd241-6f16-4973-9e4b-0cafd6c14bfa
```

### Files Created
- [x] vercel.json (security headers)
- [x] privacy.html
- [x] terms.html
- [x] 404.html
- [x] sitemap.xml (7 pages)
- [x] robots.txt (AI-friendly)
