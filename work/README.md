# `work/` — Capstone Work Area

This directory contains the project-specific research work for the **FlyRank ML Engineering Capstone**. The main deliverable is the `capstone.ipynb` notebook, supported by any project-specific scripts, figures, and written research artifacts kept here.

## Capstone focus

**Google Search Ranking & Discoverability Intelligence — Content Refresh Prioritization System**

The project frames content refresh as a decision-support ranking problem: prioritize mature pages for human review using information available at decision time, then evaluate the ranking against a later measurable search-performance outcome.

### Core decision design

- Decision window: March 2026
- Future evaluation window: April 2026
- Maturity threshold: 90 days
- Decline target: April impressions ≤80% of March impressions
- Supervised cohort: 41,863 observable pages across 28 clients
- Client-grouped validation: 22 train clients / 6 held-out test clients
- Primary operational metric: Precision@50

## Main notebook

[`notebooks/capstone.ipynb`](notebooks/capstone.ipynb)

The notebook contains the end-to-end research workflow: data access, schema checks, decision-time feature construction, eligibility filtering, future-window target construction, leakage controls, client-grouped modeling, baseline comparison, model evaluation, final scoring, ranking validation, reason codes, and output checks.

[Open the capstone notebook in Colab](https://colab.research.google.com/github/shoriful-mynul/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb?flush_cache=true)

## Submission paper

The deployed technical case study is stored in `submission/paper_url.txt` and presented from the repository's `site/` application.

**Live case study:** https://flyrank-ml-internship-omega.vercel.app/

## Research artifacts

```text
work/
├── README.md
├── capstone_report_template.md
├── notebooks/
│   └── capstone.ipynb
└── ...
```

The repository may contain additional assignment notebooks and artifacts depending on the internship workflow. The capstone notebook is the authoritative project-specific analysis for this final deliverable.

## Reproducibility rules

1. Keep decision-time inputs separate from future outcomes.
2. Keep client grouping intact during validation.
3. Perform imputation inside the modeling pipeline.
4. Preserve random seeds where stochastic models are used.
5. Validate final ranking order and output schema before treating results as final.
6. Do not commit raw private client data, credentials, or secret-bearing environment files.

## Interpretation rules

The project reports measured and directional findings. It does not claim that the model discovers Google's ranking algorithm or that refreshing a flagged page will necessarily improve performance. Reason codes describe observed signals used for editorial review and are not causal explanations.
