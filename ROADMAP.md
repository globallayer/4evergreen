# 4EverGreen Project Roadmap

**Last Updated:** March 29, 2026

---

## Project Overview

**4EverGreen** is a luxury brand website for handcrafted semi-natural trees. The site combines preserved wood trunks with premium UV-resistant foliage for high-end interiors.

**Live URL:** https://4evergreen.co.uk
**Repository:** https://github.com/globallayer/4evergreen
**Hosting:** Vercel (Static)

---

## Comprehensive Audit Scores (March 29, 2026)

| Audit | Score | Status |
|-------|-------|--------|
| **SEO** | 82/100 | Good |
| **Accessibility** | 74/100 | Partial AA |
| **Performance** | 72/100 | Needs Work |
| **Security** | 78/100 | Good |

---

## Current Status: PRODUCTION READY (with improvements needed)

| Metric | Status |
|--------|--------|
| Website | Live |
| Domain | 4evergreen.co.uk |
| SSL | Active (Vercel) |
| Contact Form | Web3Forms configured |
| SEO | Good (missing analytics) |
| Mobile | Fully responsive |
| Accessibility | Partial (missing focus states) |
| Performance | Images need optimization |
| Security | Missing security headers |

---

## What's Working (100% Complete)

### Core Website
- [x] Home page with animated hero
- [x] Projects portfolio (7 luxury installations)
- [x] About/Craft page with pillars + FAQs
- [x] Contact page with Web3Forms
- [x] Mobile-responsive navigation
- [x] Footer with contact info

### Technical Implementation
- [x] Semantic HTML5 with Schema.org structured data
- [x] CSS custom properties design system
- [x] Vanilla JavaScript (no framework dependencies)
- [x] Scroll-triggered fade animations
- [x] Smooth scrolling navigation
- [x] Honeypot spam protection

### SEO & Discovery
- [x] Meta tags (title, description, OG, Twitter)
- [x] Schema.org JSON-LD (Organization, LocalBusiness, Product, FAQPage)
- [x] XML sitemap with priorities
- [x] robots.txt (AI-friendly)
- [x] llms.txt for AI systems
- [x] Geographic meta tags
- [x] Canonical URLs
- [x] Breadcrumb schema

### Assets
- [x] 7 high-quality project photos
- [x] 2 SVG logos (4EverGreen, 4EG)
- [x] EXIF metadata on all images
- [x] Favicon (SVG inline)

---

## Phase 1: Critical Fixes (This Week)

### Priority 1: Security Headers
| Task | Impact | Effort |
|------|--------|--------|
| Create vercel.json with security headers | Security +15 | 15 min |
| Add Content-Security-Policy | XSS prevention | 30 min |
| Add X-Frame-Options, X-Content-Type-Options | Clickjacking | 5 min |

### Priority 2: Accessibility (Level A)
| Task | Impact | Effort |
|------|--------|--------|
| Add skip link to all pages | Keyboard nav | 15 min |
| Add `<main>` landmark to all pages | Screen readers | 10 min |
| Add visible focus indicators (CSS) | Keyboard users | 20 min |
| Fix mobile menu focus trap | Keyboard nav | 30 min |

### Priority 3: Performance Quick Wins
| Task | Impact | Effort |
|------|--------|--------|
| Add width/height to all images | CLS fix | 15 min |
| Add loading="lazy" to below-fold images | LCP | 10 min |
| Add fetchpriority="high" to hero image | LCP | 5 min |
| Preload hero image | LCP | 5 min |

---

## Phase 2: Optimization (Weeks 1-2)

### Analytics & Tracking
| Task | Priority | Status |
|------|----------|--------|
| Add Google Analytics 4 | Critical | Pending |
| Add Google Search Console | Critical | Pending |
| Set up conversion tracking | High | Pending |
| Add Microsoft Clarity (heatmaps) | Medium | Pending |

### Image Optimization
| Task | Priority | Status |
|------|----------|--------|
| Convert images to WebP format | High | Pending |
| Generate AVIF versions | Medium | Pending |
| Create responsive sizes (400/800/1200) | High | Pending |
| Implement `<picture>` elements | High | Pending |

**Expected Results:**
- Page weight: 4.3MB → 1.5MB (65% reduction)
- Lighthouse Performance: 72 → 90+

### Accessibility (Level AA)
| Task | Priority | Status |
|------|----------|--------|
| Fix text contrast (--text-secondary) | High | Pending |
| Add aria-expanded to menu toggle | Medium | Pending |
| Add role="alert" to form messages | Medium | Pending |
| Add visible breadcrumbs | Low | Pending |

---

## Phase 3: Growth (Weeks 3-4)

### SEO & Trust Signals
| Task | Priority | Status |
|------|----------|--------|
| Create Google Business Profile | Critical | Pending |
| Add client testimonials | High | Pending |
| Expand About page (founder info) | High | Pending |
| Add Privacy Policy page | High | Pending |
| Add Terms of Service page | Medium | Pending |
| Add social profiles to Schema.org | Medium | Pending |

### Content Enhancement
| Task | Priority | Status |
|------|----------|--------|
| Individual project detail pages | Medium | Pending |
| Customer testimonials section | High | Pending |
| Video content (process) | Low | Pending |

---

## Phase 4: Lead Generation (Month 2)

### Conversion Optimization
| Task | Priority | Status |
|------|----------|--------|
| Add WhatsApp chat button | Medium | Pending |
| Create PDF brochure | Medium | Pending |
| Implement Calendly booking | Medium | Pending |
| Cookie consent banner | Medium | Pending |

### Marketing Integrations
| Task | Priority | Status |
|------|----------|--------|
| Pinterest business account | Medium | Pending |
| Houzz portfolio listing | Medium | Pending |
| Instagram feed integration | Low | Pending |

---

## Phase 5: Advanced Features (Future)

| Task | Priority | Status |
|------|----------|--------|
| Product configurator | Low | Backlog |
| Quote calculator | Low | Backlog |
| 3D visualization | Low | Backlog |
| AR preview | Low | Backlog |

---

## Audit Summary Details

### SEO Audit (Score: 82/100)
**Strengths:**
- Comprehensive meta tags
- Schema.org structured data
- AI-friendly robots.txt + llms.txt
- Proper canonical URLs

**Issues Found:**
- No Google Analytics (no traffic data)
- No Google Search Console (no indexing data)
- Empty sameAs array (no social profiles)
- No testimonials (E-E-A-T weakness)
- Missing Privacy Policy

### Accessibility Audit (Score: 74/100)
**Strengths:**
- All images have alt text
- Form labels properly associated
- HTML5 validation on forms
- Language attribute set

**Issues Found:**
- No skip link (WCAG 2.4.1)
- No `<main>` landmark (WCAG 1.3.1)
- Focus indicators removed (WCAG 2.4.7)
- Mobile menu lacks focus trap
- Secondary text contrast borderline

### Performance Audit (Score: 72/100)
**Strengths:**
- Minimal JavaScript (4.5KB)
- No framework overhead
- Vercel edge caching
- Preconnect for fonts

**Issues Found:**
- Images not WebP/AVIF (4.3MB total)
- Images oversized (2816px for 1200px display)
- No image dimensions (causes CLS)
- Hero image not preloaded
- CSS not minified

### Security Audit (Score: 78/100)
**Strengths:**
- HTTPS enforced (Vercel)
- No sensitive data exposed
- Honeypot spam protection
- No database vulnerabilities
- Static site = minimal attack surface

**Issues Found:**
- Missing Content-Security-Policy
- Missing X-Frame-Options
- Missing X-Content-Type-Options
- No SRI on CDN scripts
- No custom 404 page

---

## Performance Targets

| Metric | Current | Target | After Phase 2 |
|--------|---------|--------|---------------|
| LCP | ~2.8s | <2.5s | ~1.5s |
| CLS | ~0.15 | <0.1 | ~0.02 |
| FID | ~50ms | <100ms | ~30ms |
| Page Weight | 4.3MB | <2MB | ~1.5MB |
| Lighthouse (Mobile) | ~58 | 90+ | ~92 |
| Lighthouse (Desktop) | ~72 | 95+ | ~96 |

---

## Contact Information

- **Email:** contact@4evergreen.co.uk
- **Phone:** +44 7822 011 814
- **Web3Forms Key:** d20fd241-6f16-4973-9e4b-0cafd6c14bfa

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| Mar 26, 2026 | Static HTML over CMS | Simplicity, speed, no maintenance |
| Mar 26, 2026 | Web3Forms over custom backend | Zero server costs, instant setup |
| Mar 28, 2026 | Vercel over GoDaddy hosting | Better performance, auto-deploy |
| Mar 28, 2026 | Vanilla JS over React | Overkill for brochure site |
| Mar 29, 2026 | Comprehensive audit | SEO, A11y, Perf, Security review |
