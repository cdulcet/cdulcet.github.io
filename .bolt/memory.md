# Project memory

## Product intent & audience

- Personal CV/portfolio website for a programmer and IT director.
- Dark space-themed aesthetic; production-quality, non-cookie-cutter design.
- Target: recruiters, peers, and professional network viewing career background.
- Deploy target: GitHub Pages.

## Brand personality & voice

- Professional yet visually striking; conveys technical leadership and depth.
- Site content is in **Spanish** (user communicates in Spanish).

## Visual design & UX direction

- Vite + React with Tailwind CSS, React hooks, Lucide React icons.
- Dark space theme: deep backgrounds, star/cosmic motifs, accent highlights.
- Experience section uses cards (company, role, product/project, date range).
- Layout emphasizes readability of career history with elegant, modern styling.
- Fully responsive and accessible; production-ready polish.

## Decisions, constraints & rationale

- Tech stack locked to template defaults (JSX, Tailwind, Lucide React, `@/` alias). No extra UI/theme packages.
- Content entries are editable text (e.g., date ranges can be changed from "Presente" to explicit years like "2026").
- Deployment via GitHub Pages influences relative paths/build output expectations.

## Open questions & assumptions

- Assumption: GitHub Pages base path may need Vite `base` config; not yet confirmed.
- Unknown: full list of experience entries, education, skills, and contact sections beyond what has been edited.
- Unknown: whether i18n (English version) will be needed later.