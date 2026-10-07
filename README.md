# Fahan Tabassum — Portfolio

Personal developer portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npx tsc --noEmit   # typecheck
npm run lint       # eslint
npm run build      # production build
```

## Structure

```
src/
  app/
    layout.tsx        # fonts, metadata, globals
    page.tsx          # composes the sections
    globals.css       # Tailwind theme + shared classes
    icon.svg          # favicon
  components/         # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, Reveal, SectionHeading
  lib/
    data.ts           # all personal content — edit this file first
```

All copy, links, skills, projects and experience live in `src/lib/data.ts`.
The profile photo is `public/profile.jpg`.

## Deploy

Builds are static (`npm run build`) and can be deployed to any Node host or Vercel.
