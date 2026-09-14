# Research Website — Google Search Ranking & Discoverability Intelligence

This directory contains the Vite + React + TypeScript source for the deployed FlyRank ML Engineering capstone case study.

## Purpose

The site is a technical research presentation for the **Content Refresh Prioritization System**. It documents the problem framing, temporal design, data populations, feature engineering, leakage controls, supervised modeling, ranking evaluation, final prioritization queue, interpretability workflow, limitations, and future research.

## Live deployment

https://flyrank-ml-internship-omega.vercel.app/

## Local development

**Prerequisite:** Node.js

```bash
npm install
npm run dev
```

The Vite development server runs on the port configured by the `dev` script in `package.json`.

## Production build

```bash
npm run build
```

Optional type-check:

```bash
npm run lint
```

## Source layout

```text
site/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── metadata.json
├── .env.example
├── .gitignore
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── components/
    └── data/
        └── projectData.ts
```

## Data and secrets

No private client data or credentials belong in this directory. The checked-in `.env.example` contains placeholders only. Keep real `.env.local` or other secret-bearing files out of Git.

The current case study is primarily a static presentation: the research values displayed by the site are stored in `src/data/projectData.ts` and are intended to match the verified capstone results.

## Research integrity

The website must preserve the same methodological boundaries as the notebook:

- it is a decision-support prioritization prototype;
- it does not predict or reverse-engineer Google's exact ranking algorithm;
- it does not guarantee ranking or traffic recovery;
- it does not automatically modify content;
- reason codes are diagnostic rules, not causal explanations;
- observed results should not be presented as causal effects.
