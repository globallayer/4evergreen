# Project Development Guidelines

## Skills - ALWAYS USE RELEVANT SKILLS

Always check and use the available skills (slash commands) that are relevant to the current task:

- `/frontend-design` — Use BEFORE writing any UI/component code to ensure distinctive, production-grade interfaces that avoid generic aesthetics
- `/browser-use` — Use when needing to navigate websites, interact with web pages, fill forms, take screenshots, or extract data from web pages
- `/remotion-best-practices` — Use when working with Remotion to create videos with React. All animations must use `useCurrentFrame()` — no CSS transitions or Tailwind animation classes
- `/simplify` — Use after writing code to review for reuse, quality, and efficiency

Do NOT ignore available skills. Always apply the right skill for the job.

---

## Development Rules

1. **Never mark a task done** until the user has tested it and explicitly confirmed it works.
2. **Always update TODO.md** after the user confirms a task is completed (if applicable).
3. **Frontend design**: When building any web component, page, or UI, invoke the `/frontend-design` skill BEFORE writing code.
4. **Browser automation**: When needing to navigate websites, interact with web pages, fill forms, take screenshots, or extract data from web pages, invoke the `/browser-use` skill.
5. **Video creation**: When working with Remotion code to create videos with React, invoke the `/remotion-best-practices` skill.

---

## Code Review Standards

After completing any implementation, review the code for:
- Functions longer than 30 lines (likely doing too much)
- Logic duplicated more than twice (extract to utility)
- Any `any` type usage in TypeScript (replace with real types)
- Components with more than 3 props that could be grouped into an object
- Missing error handling on async operations

**Run `/simplify` before presenting code to the user.**
