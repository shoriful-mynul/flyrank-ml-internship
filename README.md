# Google Search Ranking & Discoverability Intelligence

**Content Refresh Prioritization System — FlyRank ML Engineering Capstone**

A client-grouped machine-learning decision-support prototype for prioritizing mature web pages that are at higher estimated risk of future measurable search-performance decline.

**Author:** [Shoriful Islam](https://www.linkedin.com/in/shoriful2007)  
**Repository:** `shoriful-mynul/flyrank-ml-internship`  
**Data context:** FlyRank internship warehouse, March 2026 decision slice  
**Status:** Capstone research prototype

> **Research boundary:** This project does not reverse-engineer or predict Google's exact ranking algorithm, guarantee ranking or traffic improvement, automatically modify content, or replace human editorial judgment. It is a decision-support and prioritization system based on observed search-performance data.

---

## Live Research Website

**[View the deployed technical case study](https://ais-dev-pl3cncgmk4mtv6gt4t3wwl-391675207724.asia-southeast1.run.app/)**

The website presents the problem framing, temporal design, population derivation, feature engineering, leakage controls, model comparison, prioritization queue, interpretability workflow, limitations, and research extensions.

## Core Research Notebook

**[Open `work/notebooks/capstone.ipynb`](work/notebooks/capstone.ipynb)**

The notebook contains the reproducible research workflow behind the deployed case study, including data preparation, target construction, client-grouped validation, baseline comparison, supervised modeling, ranking evaluation, final scoring, and output validation.

## Website Source

The deployed case study source is maintained in **[`site/`](site/)** as a Vite + React + TypeScript application.

- [`site/README.md`](site/README.md) — website development notes
- [`site/package.json`](site/package.json) — frontend dependencies and scripts
- [`site/src/`](site/src/) — React application source

---

## Project Overview

The operational problem is straightforward: editorial teams may have thousands of mature pages but limited capacity to review all of them. The project therefore frames content refresh as a prioritization problem:

> **Given decision-time search, traffic, engagement, SEO/SERP, and content signals, which mature pages should be reviewed first because they have a higher estimated likelihood of measurable future search-performance decline?**

The system produces a ranked queue rather than an automatic content change. The final ranking is intended to narrow a large review population into a smaller, human-reviewable priority list.

### Target definition

A page is labeled as declining when its later impressions are **≤80% of its March decision-window baseline**. The project uses a strict temporal separation between decision-time features and later outcomes to reduce temporal leakage.

---

## Key Results

| Measure | Result |
|---|---:|
| Original feature frame | 331,437 rows |
| Clients in original frame | 32 |
| Future-dated rows excluded | 2,124 |
| Pages excluded for age <90 days | 78,254 |
| Decision-time mature pages | 251,059 |
| Observable supervised cohort | 41,863 |
| Clients with observable outcomes | 28 |
| Train clients | 22 |
| Held-out test clients | 6 |
| Client overlap | 0 |
| Test positive rate | 50.08% |
| Modeling features | 22 across 12 signal domains |
| Final scored population | 41,912 pages |
| Random Forest Precision@50 | **0.54** |
| Heuristic Precision@50 | 0.40 |
| Random Forest lift vs. test rate | 1.0784× |

### Model comparison

| Model | Precision@50 | ROC-AUC | F1 | Average Precision |
|---|---:|---:|---:|---:|
| **Random Forest** | **0.54** | 0.2843 | 0.3376 | 0.3861 |
| Logistic Regression | 0.44 | 0.2969 | 0.2732 | 0.3866 |
| Decision Tree | 0.30 | 0.3949 | 0.3897 | 0.4734 |
| Heuristic baseline | 0.40 | — | — | — |

**Why Random Forest was selected:** it produced the strongest **top-50 prioritization performance**, which is the operational objective of this prototype. It should not be described as the strongest broad-distribution classifier: several full-distribution metrics are weak, and the ROC-AUC values are below 0.5. The project therefore treats Precision@50 as the primary operational comparison while reporting the broader metrics transparently.

---

## Methodology

The capstone follows an end-to-end research workflow:

```text
Problem framing
      ↓
Data ingestion & schema validation
      ↓
Decision-time eligibility filtering
      ↓
Feature engineering
      ↓
Temporal target construction
      ↓
Client-grouped train/test split
      ↓
Pipeline-safe imputation
      ↓
Baseline + supervised models
      ↓
Full-distribution evaluation
      ↓
Top-50 prioritization evaluation
      ↓
Final population scoring
      ↓
Ranked review queue + diagnostic reason codes
```

### Validation design

- **Train:** 22 clients / 35,283 rows
- **Held-out test:** 6 clients / 6,580 rows
- **Client overlap:** 0
- Missing-value handling is performed inside modeling pipelines.
- Decision-time features are separated from the later outcome window.
- Final ranking order is validated for strict descending probability behavior.

### Feature domains

The 22 modeling features span search performance, traffic, engagement, AI traffic, data availability, content age, search demand, competition, off-page signals, taxonomy, and content length.

The largest observed missingness rates include backlinks (52.29%), engagement rate (39.49%), word/character count (27.34%), and GA4 measures (26.85%).

---

## Final Prioritization Output

The final scoring population contains **41,912 pages**. Each ranked record is represented by an anonymized client/page identifier, estimated decline probability, selected decision-time signals, rule-based diagnostic reason codes, and a recommended editorial review action.

The exported result is designed for human review—not autonomous publishing or content modification.

Final output validation includes:

- 41,912 ranked rows
- 11 canonical output columns
- no duplicate client-page pairs
- no missing decline probabilities
- probabilities constrained to valid bounds
- strict descending probability order
- final probability range of 0.9288 to 0.0842

Reason codes are **diagnostic rules**, not causal explanations.

---

## Repository Structure

```text
flyrank-ml-internship/
│
├── README.md                         # Capstone overview and entry point
├── DATA_USE.md                       # Public-data and privacy guidance
├── LICENSE                           # Repository license
│
├── data/                             # Starter data area; protected by gitignore/CI rules
├── docs/                             # FlyRank learning and data documentation
├── notebooks/                        # Starter/reference notebooks
├── outputs/                          # Small reference/example outputs
├── scripts/                          # Reference pipeline
├── skills/                           # Internship assistant guidance
│
├── work/                             # Capstone work and research artifacts
│   ├── notebooks/
│   │   └── capstone.ipynb            # Main capstone notebook
│   ├── README.md
│   └── ...
│
├── site/                             # Deployed technical case-study source
│   ├── src/
│   ├── public/                       # If present in the deployed source
│   ├── package.json
│   └── README.md
│
└── submission/
    └── paper_url.txt                 # Exact deployed paper URL
```

The reference pipeline remains separate from the capstone implementation. Capstone-specific work belongs under `work/`, while the website source belongs under `site/`.

---

## Reproducibility

### Research notebook

Open the main notebook in Google Colab or a compatible Jupyter environment:

[`work/notebooks/capstone.ipynb`](work/notebooks/capstone.ipynb)

The project uses Python-based data processing and machine-learning tooling, including pandas, DuckDB, scikit-learn, and visualization libraries used by the notebook.

### Website

```bash
cd site
npm install
npm run dev
```

For a production build:

```bash
cd site
npm run build
```

The current website is a static research presentation. Do not commit local environment files or secrets.

---

## Public-Safety & Data Handling

This repository is intended to remain safe for public portfolio use.

- Do not add raw private client data.
- Do not add client-identifying domains, URLs, titles, keywords, credentials, or secrets.
- Keep anonymized identifiers where examples are necessary.
- Use observed, measured, directional, and decision-support language.
- Do not turn correlations into causal claims.
- Do not claim to reproduce Google's ranking algorithm.

GitHub's browser upload interface has a 25 MiB per-file limit, and secrets should never be committed to a public repository. citeturn0search0

---

## Limitations

This is a research prototype rather than a production ranking system.

1. Broad-distribution classification performance is weak.
2. Precision@50 is the primary operational metric, so it does not summarize every modeling objective.
3. Generalization is tested across held-out clients but remains limited by the available client population.
4. Four clients do not have observable outcomes in the supervised target construction.
5. Several feature groups contain substantial missingness.
6. The decline label is tied to the selected March-to-later evaluation formulation.
7. Reason codes are rule-based diagnostics and should not be interpreted as causal explanations.
8. The study is observational and does not establish that refreshing a flagged page will cause improved search performance.
9. The current implementation is a prototype, not a production service.

### Future research

Promising extensions include:

- longitudinal rolling-window validation
- learning-to-rank approaches
- probability calibration
- TreeSHAP-based explanation
- semantic content embeddings
- stronger temporal and client-level generalization tests
- randomized experiments to measure whether recommended refresh actions actually improve outcomes

---

## Author

**Shoriful Islam**  
Machine Learning Engineering Student & Researcher

[LinkedIn](https://www.linkedin.com/in/shoriful2007) · [GitHub](https://github.com/shoriful-mynul)

---

## Acknowledgement

This project was developed as part of the **FlyRank ML Engineering Internship** capstone workflow using the internship's approved anonymized search-performance data environment and methodological framework.
