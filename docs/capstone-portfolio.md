# Capstone Portfolio

## Machine Learning–Driven Content Refresh Prioritization

**FlyRank ML Engineering Internship Capstone — Lane 2: Refresh / Content Opportunity Scoring**

### Live portfolio

https://ais-dev-pl3cncgmk4mtv6gt4t3wwl-391675207724.asia-southeast1.run.app

The live portfolio presents the research question, data and decision-time framing, leakage-aware methodology, model comparison, ranking results, limitations, and future research directions.

### Source notebook

- `work/notebooks/capstone.ipynb`
- [Open the capstone notebook on GitHub](https://github.com/shoriful-mynul/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb)
- [Open the capstone notebook in Google Colab](https://colab.research.google.com/github/shoriful-mynul/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb?flush_cache=true)

### Final artifact

`final_content_refresh_ranking.csv`

The notebook creates the operational ranking queue and performs final artifact-quality checks for rank sequence, duplicate client-page pairs, missing probabilities, probability bounds, reason codes, recommended actions, and descending probability order.

### Verified headline results

- **41,912** pages scored in the final operational ranking queue.
- **Random Forest Precision@50: 54%** on the selected client-held-out test set.
- **Heuristic baseline Precision@50: 40%** on the same holdout.
- Difference: **+14 percentage points**.
- **22 ML features** across search performance, analytics, content metadata, and data-availability signals.
- Final evaluation uses client-grouped separation to avoid placing the same client in both train and test data.

### Important interpretation

This project is a **decision-support ranking system**, not a causal model. The decline probability is a prioritization score, not a guarantee of future decline or traffic recovery. Reason codes are rule-based diagnostics of observable signals, not causal explanations.

### Public-data note

The repository is intended to remain public-safe. Client and content identifiers are pseudonymized, and the project should not include private client data, credentials, raw warehouse exports, or other sensitive information.

### Website source code

The live portfolio was created in Google AI Studio Build Mode and deployed to Cloud Run. The `run.app` URL exposes the deployed application, not the editable AI Studio project source. Therefore, the website source should only be added to this repository after exporting/downloading or syncing the AI Studio project source to GitHub.

Until that export is available, this repository treats the **capstone notebook as the canonical research/code artifact** and the deployed site as the presentation layer.
