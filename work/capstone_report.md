# Capstone Report — Content Refresh Prioritization

- **Author:** Shoriful Islam
- **Lane:** Content Refresh Prioritization / Refresh and Content Opportunity Scoring
- **Repo:** `shoriful-mynul/flyrank-ml-internship`
- **Deployed paper:** https://ais-dev-pl3cncgmk4mtv6gt4t3wwl-391675207724.asia-southeast1.run.app/
- **Date:** September 2026

> This report summarizes the research implementation in `work/notebooks/capstone.ipynb` and the deployed technical case study in `site/`.

## 0. Abstract

This capstone asks whether decision-time search, traffic, engagement, SEO/SERP, and content signals can help prioritize mature web pages for human review before future measurable search-performance decline. The analysis uses pseudonymized FlyRank internship warehouse data, with March 2026 as the decision window and April 2026 as the future evaluation window. The workflow applies temporal target construction, client-grouped holdout validation, pipeline-safe missing-value handling, a transparent heuristic baseline, and supervised models including Logistic Regression, Decision Tree, and Random Forest. Random Forest achieved the strongest top-50 prioritization result among the tested approaches, with Precision@50 of 0.54 versus 0.40 for the heuristic baseline. The resulting ranked queue is a decision-support artifact for editorial review, not a causal model, automatic content editor, or predictor of Google's exact ranking algorithm.

## 1. Problem framing

### Decision

The supported decision is:

> Which mature content pages should an editorial team review first, using only information available before the review decision?

### Unit of analysis

The primary unit is a **client-page pair**. Client identifiers are used for grouping and validation, not as predictive features.

### Output

The system produces a ranked queue containing an estimated decline probability, selected decision-time signals, diagnostic reason codes, and a recommended editorial review action.

### Human action

An editor can use the queue to prioritize limited review capacity, inspect the flagged page, assess search intent and content quality, and decide whether a refresh is appropriate.

### Why ML is useful

A large mature-content population may contain heterogeneous combinations of search performance, traffic, engagement, demand, and content signals that are difficult to combine consistently with a single fixed rule. The ML system is therefore evaluated primarily as a ranking mechanism for the highest-priority pages.

## 2. Data safety

The notebook accesses the approved pseudonymized FlyRank internship warehouse through DuckDB and Hugging Face authentication. The research uses `dim_content`, `dim_clients`, and `fact_content_daily_performance` for the March decision window and April outcome window.

The public repository does not intentionally expose client names, domains, private queries, credentials, or raw private warehouse exports. Client and page identifiers remain pseudonymized.

The model uses decision-time signals only. Future April performance is reserved for target construction and evaluation. Label-derived fields are not used as predictive features, and client/page identifiers are not used as model inputs.

The repository's public-safety rule is simple: keep private client data, credentials, and secret-bearing environment files out of Git.

## 3. Baseline

The first benchmark is a transparent heuristic composite score built from available historical search and performance signals.

On the held-out supervised test cohort:

- Test positive rate: **50.08%**
- Heuristic Precision@50: **0.40**
- Declining pages in the heuristic top 50: **20 / 50**
- Lift versus test positive rate: **0.7988×**

Across the broader observable population, the heuristic baseline achieved Precision@50 of **0.24**.

This is a fair benchmark because it uses the same decision framing and the same operational ranking metric as the learned models.

## 4. Model / analysis

### Decision and outcome windows

- Decision window: **1–31 March 2026**
- Future evaluation window: **1–30 April 2026**
- Decision cutoff: **31 March 2026**
- Maturity requirement: **content age ≥90 days**
- Demand requirement in the notebook framing: **≥500 March GSC impressions**
- Target: **April impressions ≤80% of March impressions**, among pages with observable GSC data in both periods
- Primary ranking metric: **Precision@50**

### Population derivation

The research workflow begins with **331,437 rows across 32 clients**. It excludes **2,124 future-dated rows** and **78,254 pages younger than 90 days**, leaving **251,059 decision-time mature pages**.

The supervised observable cohort contains **41,863 pages across 28 clients**. Four clients do not have observable outcomes in the supervised target construction.

### Features

The final model uses **22 features across 12 signal domains**, covering:

- search performance
- traffic
- engagement
- AI traffic
- data availability
- content age
- search demand
- competition
- off-page SEO
- taxonomy
- content length

Selected missingness rates include:

- backlinks: **52.29%**
- engagement rate: **39.49%**
- character/word count: **27.34%**
- GA4 measures: **26.85%**
- search volume / competition / CPC: **1.35%**

### Validation

The supervised split is grouped by client:

- Train: **22 clients / 35,283 rows**
- Held-out test: **6 clients / 6,580 rows**
- Client overlap: **0**

Missing-value handling is performed inside the modeling pipeline to reduce data snooping risk.

## 5. Evaluation

### Model results

| Model | Precision@50 | Accuracy | Precision | Recall | F1 | ROC-AUC | Average Precision |
|---|---:|---:|---:|---:|---:|---:|---:|
| **Random Forest** | **0.54** | 0.3260 | 0.3324 | 0.3429 | 0.3376 | 0.2843 | 0.3861 |
| Logistic Regression | 0.44 | 0.3064 | 0.2874 | 0.2604 | 0.2732 | 0.2969 | 0.3866 |
| Decision Tree | 0.30 | 0.3602 | 0.3730 | 0.4079 | 0.3897 | 0.3949 | 0.4734 |
| Heuristic baseline | 0.40 | — | — | — | — | — | — |

Random Forest placed **27 declining pages in the top 50**, compared with **20 / 50** for the heuristic baseline.

### Interpretation of model selection

Random Forest is selected as the prototype scorer because the operational objective is top-tail prioritization. It is **not** presented as the best broad-distribution classifier. Decision Tree has stronger full-distribution F1, ROC-AUC, and Average Precision values in this experiment, while all tested models show weak broad-distribution discrimination.

The project therefore reports both ranking utility and full-distribution metrics rather than hiding the negative or weak results.

## 6. Interpretation

The final queue uses rule-based diagnostic reason codes to summarize observed signals such as very low CTR, weak average search position, and mature content. These codes are intended to make a ranked item easier for an editor to inspect.

They are **not causal explanations**. A reason code does not establish that changing that signal will cause an improvement in search performance.

The final score range is **0.9288 to 0.0842**, and the final queue is ordered by descending estimated decline probability.

## 7. Recommendation

The recommended workflow is:

1. Start with the highest-ranked mature pages.
2. Inspect the observed search and content signals.
3. Review title/meta alignment, search intent, content freshness, and editorial quality where the diagnostic codes indicate potential review areas.
4. Decide manually whether a refresh is justified.
5. Measure subsequent outcomes rather than assuming that a flagged page will improve after editing.

The final output contains **41,912 scored pages** and **11 canonical output columns**. Validation checks confirmed no duplicate client-page pairs, no missing decline probabilities, valid probability bounds, and descending ranking order.

The system should therefore be treated as a prioritization aid that helps allocate editorial attention—not as an autonomous decision maker.

## 8. Reproducibility

### Main notebook

[`work/notebooks/capstone.ipynb`](notebooks/capstone.ipynb)

The notebook is designed to run from a fresh kernel after approved warehouse access is configured. It uses DuckDB for warehouse queries and Python tooling for analysis and modeling.

### Website

```bash
cd site
npm install
npm run dev
```

Production build:

```bash
cd site
npm run build
```

### Reproducibility safeguards

- separate decision-time features from future outcomes;
- group validation by client;
- keep imputation inside the modeling pipeline;
- validate feature and target populations;
- validate final output schema and ranking order;
- do not commit private data or credentials.

## 9. Acknowledgments & data credit

Built on the **FlyRank ML Internship** dataset and capstone methodology. FlyRank: https://flyrank.ai

## Limitations and future work

This is a research prototype, not a production ranking system. Important limitations include weak broad-distribution classification performance, limited client population, substantial missingness in several feature groups, the specific March-to-April target formulation, and the observational nature of the study.

Future work should explore longitudinal rolling-window validation, learning-to-rank methods, probability calibration, TreeSHAP explanations, semantic content embeddings, stronger temporal/client generalization tests, and randomized experiments to estimate the actual effect of recommended refresh actions.
