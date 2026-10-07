# Fahan Tabassum — Portfolio

Personal developer portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.

---

## About

I'm Fahan Tabassum, a Computer Science undergraduate with concentration in Artificial
Intelligence and Machine Learning (AIML). I love building new things. I build reliable,
scalable applications with a strong focus on clean backend systems.

| | |
|---|---|
| **Name** | Fahan Tabassum |
| **Education** | Final-year Engineering Student — Computer Science Undergraduate '27 |
| **Concentration** | Artificial Intelligence & Machine Learning |
| **Email** | [fahantabassum43@gmail.com](mailto:fahantabassum43@gmail.com) |
| **GitHub** | [github.com/tabby305](https://github.com/tabby305) |
| **LinkedIn** | [fahan-tabassum-18a3662ba](https://www.linkedin.com/in/fahan-tabassum-18a3662ba) |

## Skills

- **Languages:** Python, JavaScript, SQL
- **Web:** HTML, CSS, React
- **Tools:** Git, GitHub, Microsoft Office

## Projects

### [GitHub Issue Resolver](https://github.com/tabby305/GitHub-Issue-Resolver)
An agent that reads a GitHub issue and proposes a fix using classical NLP and static
analysis: TF-IDF code retrieval to locate relevant files, Python AST inspection to find
bug patterns, deterministic patch generation, and pytest validation — with human approval
required before any file is modified. Ships with a Streamlit interface and intentionally
uses no LLM.
`Python` `scikit-learn` `Streamlit` `pytest` `GitHub REST API`

### [Sales Analytics](https://github.com/tabby305/sales-analytics)
End-to-end analytics on the Superstore retail dataset: pandas cleaning and exploratory
analysis in a Jupyter notebook, plus an interactive Streamlit dashboard with Plotly
charts, region and category filters, KPI metrics and CSV export of filtered data.
`Python` `pandas` `Streamlit` `Plotly` `Jupyter`

### [Digital Doppelganger](https://github.com/tabby305/Digital-Doppelganger)
Detects possible online impersonation by scoring public identity signals — username,
name, bio and keywords — with weighted, explainable similarity metrics. Returns a 0–100
risk score with plain-language reasons, side-by-side profile comparison and recommended
next steps.
`React` `FastAPI` `Python` `Tailwind CSS`

## Experience

**Operations Head — E-Cell, SEACET** · June 2024 — June 2025

- Spearheaded the establishment of the Entrepreneurship Cell (E-Cell) at SEACET, focusing
  on strategic planning and team leadership.
- Organized 5+ successful events, fostering a vibrant entrepreneurial community and
  improving student engagement.

---

## Sections

Navbar · Hero · About · Skills · Projects · Experience · Contact · Footer

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Visiting from another device on your network? Use `http://<your-LAN-IP>:3000` — the
> browser will show "Not secure" because it is plain HTTP on your local network. That is
> expected; Vercel serves HTTPS once deployed.

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

```bash
npm run build
```

Deploys to Vercel (free Hobby plan) with HTTPS enabled — import the repo, framework is
auto-detected as Next.js, then hit Deploy.
