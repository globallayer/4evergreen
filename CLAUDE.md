# 4EverGreen - Project Guidelines

## Project Overview
Luxury semi-artificial trees website.

---

## Skills - ALWAYS USE RELEVANT SKILLS

Use `@skill-name` to invoke any of these project-relevant skills:

### SEO & Marketing
- `@seo` — General SEO best practices
- `@seo-audit` — Comprehensive SEO audits
- `@seo-content` — SEO-optimized content writing
- `@seo-technical` — Technical SEO implementation
- `@seo-schema` — Schema markup for rich snippets
- `@seo-images` — Image optimization for SEO
- `@programmatic-seo` — Programmatic SEO strategies

### Design & Frontend
- `@landing-page-generator` — Create high-converting landing pages
- `@tailwind-patterns` — Tailwind CSS best practices
- `/frontend-design` — Distinctive UI design (invoke before writing UI code)

### Automation
- `/browser-use` — Browser automation for testing

---

### Documentation & Diagrams
- `/excalidraw-diagram` — Create visual architecture diagrams, workflows, and system designs

## Development Rules

1. **Never mark a task done** until the user has tested it and explicitly confirmed it works.
2. **Frontend design**: When building any web component, page, or UI, invoke the `/frontend-design` skill BEFORE writing code.
3. **SEO first**: All pages must be SEO-optimized. Run `@seo-audit` before deploying.

---

## Code Review Standards

After completing any implementation, review the code for:
- Functions longer than 30 lines (likely doing too much)
- Logic duplicated more than twice (extract to utility)
- Missing meta tags, alt text, or schema markup
- Missing error handling on async operations

**Run `/simplify` before presenting code to the user.**
