export interface MLFeature {
  id: number;
  name: string;
  category: string;
  source: 'GSC' | 'GA4' | 'SEO/SERP' | 'Content Metadata' | 'System Flag';
  missingPct: number;
  description: string;
  dtype: string;
}

export const ML_FEATURES: MLFeature[] = [
  { id: 1, name: 'impressions_30d', category: 'Search Performance', source: 'GSC', missingPct: 0.0, description: 'Total search impressions over 30-day decision window', dtype: 'int64' },
  { id: 2, name: 'clicks_30d', category: 'Search Performance', source: 'GSC', missingPct: 0.0, description: 'Total organic clicks from SERP over 30-day window', dtype: 'int64' },
  { id: 3, name: 'weighted_avg_position_30d', category: 'Search Performance', source: 'GSC', missingPct: 0.0, description: 'Impression-weighted average ranking position in Google Search', dtype: 'float64' },
  { id: 4, name: 'ctr_30d', category: 'Search Performance', source: 'GSC', missingPct: 0.0, description: 'Click-through rate (clicks / impressions) in decision period', dtype: 'float64' },
  { id: 5, name: 'pageviews_30d', category: 'Traffic', source: 'GA4', missingPct: 26.85, description: 'Total pageviews recorded in Google Analytics 4', dtype: 'float64' },
  { id: 6, name: 'sessions_30d', category: 'Traffic', source: 'GA4', missingPct: 26.85, description: 'Total web sessions initiating or viewing this page', dtype: 'float64' },
  { id: 7, name: 'users_30d', category: 'Traffic', source: 'GA4', missingPct: 26.85, description: 'Unique active users visiting the page', dtype: 'float64' },
  { id: 8, name: 'engaged_sessions_30d', category: 'Engagement', source: 'GA4', missingPct: 26.85, description: 'Sessions lasting >10s, with >=2 views, or conversion event', dtype: 'float64' },
  { id: 9, name: 'engagement_rate_30d', category: 'Engagement', source: 'GA4', missingPct: 39.49, description: 'Ratio of engaged sessions to total sessions', dtype: 'float64' },
  { id: 10, name: 'scroll_events_30d', category: 'Engagement', source: 'GA4', missingPct: 26.85, description: 'Tracked deep scroll threshold interactions (90% scroll)', dtype: 'float64' },
  { id: 11, name: 'ai_sessions_30d', category: 'AI Traffic', source: 'GA4', missingPct: 26.85, description: 'Sessions originating from AI search engines and answer bots', dtype: 'float64' },
  { id: 12, name: 'days_observed', category: 'Data Availability', source: 'System Flag', missingPct: 0.0, description: 'Continuous observation window duration at decision point', dtype: 'int64' },
  { id: 13, name: 'has_gsc_data', category: 'Data Availability', source: 'System Flag', missingPct: 0.0, description: 'Binary indicator flag: presence of Search Console telemetry', dtype: 'int64' },
  { id: 14, name: 'has_ga4_data', category: 'Data Availability', source: 'System Flag', missingPct: 0.0, description: 'Binary indicator flag: presence of GA4 behavioral telemetry', dtype: 'int64' },
  { id: 15, name: 'content_age_days', category: 'Content Age', source: 'Content Metadata', missingPct: 0.0, description: 'Days elapsed since original published date (>=90 required)', dtype: 'int64' },
  { id: 16, name: 'search_volume', category: 'Search Demand', source: 'SEO/SERP', missingPct: 1.35, description: 'Estimated monthly search volume for primary page topic', dtype: 'float64' },
  { id: 17, name: 'competition', category: 'Competition', source: 'SEO/SERP', missingPct: 1.35, description: 'Keyword competition density index (0.0 to 1.0)', dtype: 'float64' },
  { id: 18, name: 'cpc', category: 'Search Demand', source: 'SEO/SERP', missingPct: 1.35, description: 'Commercial intent indicator: Estimated cost per click in USD', dtype: 'float64' },
  { id: 19, name: 'backlinks', category: 'Off-Page SEO', source: 'SEO/SERP', missingPct: 52.29, description: 'External inbound referring link count pointing to page URL', dtype: 'float64' },
  { id: 20, name: 'category_count', category: 'Taxonomy', source: 'Content Metadata', missingPct: 0.0, description: 'Number of associated content categories or topic tags', dtype: 'int64' },
  { id: 21, name: 'char_count', category: 'Content Length', source: 'Content Metadata', missingPct: 27.34, description: 'Total character length of the main editorial content body', dtype: 'float64' },
  { id: 22, name: 'word_count', category: 'Content Length', source: 'Content Metadata', missingPct: 27.34, description: 'Total word count of parsed editorial article text', dtype: 'float64' },
];

export interface ModelMetricResult {
  name: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1: number;
  rocAuc: number;
  averagePrecision: number;
  precisionAt50: number;
  liftVsTestRate: number;
  description: string;
  highlight?: boolean;
}

export const MODEL_RESULTS: ModelMetricResult[] = [
  {
    name: 'Random Forest',
    accuracy: 0.3260,
    precision: 0.3324,
    recall: 0.3429,
    f1: 0.3376,
    rocAuc: 0.2843,
    averagePrecision: 0.3861,
    precisionAt50: 0.54,
    liftVsTestRate: 1.0784,
    description: 'Achieved the highest Precision@50 among the tested models at 0.54 (27 declining pages out of 50, lift = 1.0784) and was selected as the prototype scorer for the final ranking experiment.',
    highlight: true
  },
  {
    name: 'Decision Tree',
    accuracy: 0.3602,
    precision: 0.3730,
    recall: 0.4079,
    f1: 0.3897,
    rocAuc: 0.3949,
    averagePrecision: 0.4734,
    precisionAt50: 0.30,
    liftVsTestRate: 0.5990,
    description: 'Single CART decision tree. Attained higher broad metrics across the full distribution (F1 = 0.3897, ROC-AUC = 0.3949), but exhibited weak top-50 prioritization (0.30 Precision@50).',
  },
  {
    name: 'Logistic Regression',
    accuracy: 0.3064,
    precision: 0.2874,
    recall: 0.2604,
    f1: 0.2732,
    rocAuc: 0.2969,
    averagePrecision: 0.3866,
    precisionAt50: 0.44,
    liftVsTestRate: 0.8786,
    description: 'Linear baseline with standard L2 penalty. Moderate ranking performance (0.44 Precision@50), constrained by complex non-linear feature interactions.',
  },
];

export const HEURISTIC_BASELINE = {
  name: 'Heuristic Baseline Score',
  population: 41863,
  mean: 50.00,
  min: 3.22,
  max: 89.90,
  precisionAt50: 0.40,
  liftVsTestRate: 0.7988,
  fullPopPrecisionAt50: 0.24,
  description: 'Rule-based composite scoring formula using available historical search and performance signals. Achieved 0.40 Precision@50 on the held-out test cohort (20 declining pages out of top 50, lift = 0.7988 relative to the 50.08% test positive rate) and 0.24 Precision@50 across the broader observable population.'
};

export interface SampleRankedPage {
  priorityRank: number;
  clientHash: string;
  contentHash: string;
  declineProbability: number;
  impressions30d: number;
  clicks30d: number;
  ctr30d: number;
  weightedAvgPosition30d: number;
  contentAgeDays: number;
  reasonCodes: string[];
  recommendedAction: string;
}

/**
 * ONLY verified top-rank examples from the capstone project results are displayed.
 * No row-level values or fields are fabricated.
 */
export const SAMPLE_RANKED_PAGES: SampleRankedPage[] = [
  {
    priorityRank: 1,
    clientHash: 'client_anonymized_01',
    contentHash: 'cnt_verified_001',
    declineProbability: 0.9288,
    impressions30d: 704,
    clicks30d: 0,
    ctr30d: 0.0,
    weightedAvgPosition30d: 15.0369,
    contentAgeDays: 266,
    reasonCodes: ['Very low CTR', 'Weak average search position', 'Mature content'],
    recommendedAction: 'Review title/meta and search-intent alignment'
  },
  {
    priorityRank: 2,
    clientHash: 'client_anonymized_01',
    contentHash: 'cnt_verified_002',
    declineProbability: 0.9288,
    impressions30d: 901,
    clicks30d: 0,
    ctr30d: 0.0,
    weightedAvgPosition30d: 11.9023,
    contentAgeDays: 266,
    reasonCodes: ['Very low CTR', 'Weak average search position', 'Mature content'],
    recommendedAction: 'Review title/meta and search-intent alignment'
  },
  {
    priorityRank: 3,
    clientHash: 'client_anonymized_02',
    contentHash: 'cnt_verified_003',
    declineProbability: 0.9276,
    impressions30d: 749,
    clicks30d: 0,
    ctr30d: 0.0,
    weightedAvgPosition30d: 17.7557,
    contentAgeDays: 278,
    reasonCodes: ['Very low CTR', 'Weak average search position', 'Mature content'],
    recommendedAction: 'Review title/meta and search-intent alignment'
  },
  {
    priorityRank: 4,
    clientHash: 'client_anonymized_01',
    contentHash: 'cnt_verified_004',
    declineProbability: 0.9207,
    impressions30d: 937,
    clicks30d: 0,
    ctr30d: 0.0,
    weightedAvgPosition30d: 7.1003,
    contentAgeDays: 266,
    reasonCodes: ['Very low CTR', 'Weak average search position', 'Mature content'],
    recommendedAction: 'Review title/meta and search-intent alignment'
  },
];

export const PIPELINE_STEPS = [
  { step: 1, title: 'Define ML Problem', desc: 'Formulate as decision-support content refresh prioritization under decision-time operational constraints.' },
  { step: 2, title: 'Inspect & Validate Source', desc: 'Audit schema, join keys, datetime stamps, client hashes, and telemetry channels across 32 clients.' },
  { step: 3, title: 'Build Feature Frame', desc: 'Aggregate multi-source metrics across 331,437 rows spanning GSC, GA4, SERP, and CMS.' },
  { step: 4, title: 'Apply Eligibility Rules', desc: 'Exclude future dates (2,124 rows) and immature pages <90 days (78,254 rows), retaining 251,059 mature pages.' },
  { step: 5, title: 'Quality & Sanity Checks', desc: 'Validate bounds: CTR <= 100%, Engagement <= 100%, audit small-denominator ratio anomalies.' },
  { step: 6, title: 'Construct Observable Target', desc: 'Define binary decline label using later performance window (41,863 observable pages, 54.81% rate).' },
  { step: 7, title: 'Prevent Temporal Leakage', desc: 'Strict separation of decision-time features T₀ from outcome measurement window T_later.' },
  { step: 8, title: 'Build Supervised Dataset', desc: 'Construct modeling matrix with 22 validated features across 41,863 ground-truth pages in 28 clients.' },
  { step: 9, title: 'Pipeline-Safe Imputation', desc: 'Encapsulate median missing value handling inside Scikit-learn preprocessing pipelines to prevent data snooping.' },
  { step: 10, title: 'Client-Based Splitting', desc: 'GroupSplit by client (22 train clients: 35,283 rows; 6 test clients: 6,580 rows; 0 overlap).' },
  { step: 11, title: 'Train Baseline & ML Models', desc: 'Fit Logistic Regression, Decision Tree, Random Forest, and construct Heuristic Baseline benchmark.' },
  { step: 12, title: 'Evaluate Model Performance', desc: 'Analyze full distribution metrics (AUC, AP, F1, Accuracy) alongside ranking behavior.' },
  { step: 13, title: 'Compare Heuristic vs ML', desc: 'Evaluate top-50 ranking utility: Random Forest achieves 0.54 Precision@50 vs 0.40 baseline.' },
  { step: 14, title: 'Score Eligible Population', desc: 'Predict continuous decline probabilities across all 41,912 final eligible pages.' },
  { step: 15, title: 'Rank by Decline Risk', desc: 'Sort scored population in strict descending order of probability (0.9288 to 0.0842).' },
  { step: 16, title: 'Generate Reason Codes', desc: 'Map observed signal anomalies to explainable rule-based diagnostic codes and action recommendations.' },
  { step: 17, title: 'Export Prioritization File', desc: 'Generate validated 11-column final dataset: final_content_refresh_ranking.csv.' }
];

export const DATASET_POPULATIONS = [
  {
    name: 'Original Raw Feature Frame',
    count: 331437,
    description: 'Initial merged dataset across 32 client domains and tracking instruments.',
    badge: '32 Clients Covered',
    status: 'Raw Ingestion'
  },
  {
    name: 'Future-Dated Exclusions',
    count: 2124,
    description: 'Pages with creation timestamps strictly after the decision point (t_created > T₀) excluded as data anomalies.',
    badge: 'Data Hygiene',
    status: 'Excluded'
  },
  {
    name: 'Young Page Exclusions (<90d)',
    count: 78254,
    description: 'Pages younger than 90 days excluded from the decision-time refresh-prioritization population due to early volatility.',
    badge: 'Maturity Threshold',
    status: 'Excluded'
  },
  {
    name: 'Decision-Time Eligible Pages',
    count: 251059,
    description: 'Mature pages passing the >=90 days age requirement. Observed age range spans 95 to 494 days.',
    badge: 'Maturity Pool',
    status: 'Eligible Pool'
  },
  {
    name: 'Supervised Observable Dataset',
    count: 41863,
    description: 'Pages across 28 clients with observable ground-truth in the later target window, used for supervised training (22 clients) and evaluation (6 clients).',
    badge: '28 Clients (22 train / 6 test)',
    status: 'Supervised Cohort'
  },
  {
    name: 'Final Ranked Scoring Queue',
    count: 41912,
    description: 'Final eligible pages receiving model scores from the Random Forest prototype, exported to final_content_refresh_ranking.csv.',
    badge: 'Scoring Population',
    status: 'Prioritization Queue'
  }
];

export const TARGET_STATS = {
  totalObservable: 41863,
  declining: 22945,
  nonDeclining: 18918,
  declineRate: 0.5481,
  definition: 'A page is labeled as declining when its later-period impressions are <= 80% of its March baseline impressions, among pages where the later-period outcome is observable.',
  wording: 'Among target-observable pages, 54.81% satisfied the defined impression-decline rule.'
};

export const CLIENT_SPLIT_STATS = {
  originalClients: 32,
  supervisedClients: 28,
  trainRows: 35283,
  testRows: 6580,
  trainClients: 22,
  testClients: 6,
  clientOverlap: 0,
  trainTargetRate: 0.5569,
  testTargetRate: 0.5008,
  trainProcessedShape: '35,283 × 35',
  testProcessedShape: '6,580 × 35',
  clarification: 'The original feature frame covered 32 clients. The supervised evaluation cohort contained 28 clients with observable target outcomes, with 22 clients used for training and 6 held out for testing. The final client-grouped split used: 22 training clients, 6 held-out test clients, 0 client overlap.'
};

export const GROUP_K_FOLD_DATA = [
  { fold: 1, trainRows: 41802, testRows: 61, trainClients: 27, testClients: 1, clientOverlap: 0, trainTargetRate: 54.83, testTargetRate: 42.62, isSelectedSplit: false },
  { fold: 2, trainRows: 35283, testRows: 6580, trainClients: 22, testClients: 6, clientOverlap: 0, trainTargetRate: 55.69, testTargetRate: 50.08, isSelectedSplit: true },
  { fold: 3, trainRows: 33165, testRows: 8698, trainClients: 26, testClients: 2, clientOverlap: 0, trainTargetRate: 49.88, testTargetRate: 73.61, isSelectedSplit: false },
  { fold: 4, trainRows: 16165, testRows: 25698, trainClients: 13, testClients: 15, clientOverlap: 0, trainTargetRate: 64.66, testTargetRate: 48.61, isSelectedSplit: false },
  { fold: 5, trainRows: 41037, testRows: 826, trainClients: 24, testClients: 4, clientOverlap: 0, trainTargetRate: 54.14, testTargetRate: 88.26, isSelectedSplit: false },
];

export const FEATURE_MISSINGNESS_DATA = [
  { name: 'backlinks', missingPct: 52.29, source: 'SEO/SERP', description: 'External inbound links' },
  { name: 'engagement_rate_30d', missingPct: 39.49, source: 'GA4', description: 'Engaged sessions / sessions' },
  { name: 'word_count', missingPct: 27.34, source: 'Content Metadata', description: 'Parsed article word count' },
  { name: 'char_count', missingPct: 27.34, source: 'Content Metadata', description: 'Parsed article character length' },
  { name: 'pageviews_30d', missingPct: 26.85, source: 'GA4', description: 'Total pageviews in GA4' },
  { name: 'sessions_30d', missingPct: 26.85, source: 'GA4', description: 'Total web sessions' },
  { name: 'ai_sessions_30d', missingPct: 26.85, source: 'GA4', description: 'Sessions from AI answer engines' },
  { name: 'users_30d', missingPct: 26.85, source: 'GA4', description: 'Unique active users' },
  { name: 'engaged_sessions_30d', missingPct: 26.85, source: 'GA4', description: 'Sessions >10s or with conversions' },
  { name: 'scroll_events_30d', missingPct: 26.85, source: 'GA4', description: 'Tracked 90% scroll interactions' },
  { name: 'competition', missingPct: 1.35, source: 'SEO/SERP', description: 'Keyword competition density' },
  { name: 'cpc', missingPct: 1.35, source: 'SEO/SERP', description: 'Cost per click in USD' },
  { name: 'search_volume', missingPct: 1.35, source: 'SEO/SERP', description: 'Monthly search volume index' },
];

export const CONTENT_AGE_GROUPS = [
  { range: '0–29 days', count: 26505, pct: 8.0486, eligible: false, note: 'Young page exclusion' },
  { range: '30–59 days', count: 27215, pct: 8.2642, eligible: false, note: 'Young page exclusion' },
  { range: '60–89 days', count: 24534, pct: 7.4501, eligible: false, note: 'Young page exclusion' },
  { range: '90–179 days', count: 36638, pct: 11.1256, eligible: true, note: 'Decision-time eligible' },
  { range: '180–364 days', count: 181930, pct: 55.2453, eligible: true, note: 'Primary mature cohort' },
  { range: '365+ days', count: 32491, pct: 9.8663, eligible: true, note: 'Long-term mature cohort' },
];

export const IMPRESSIONS_DISTRIBUTION = {
  march: {
    mean: 4604.04,
    median: 2027,
    min: 500,
    max: 617124
  },
  april: {
    mean: 4153.31,
    median: 1536,
    min: 1,
    max: 799358
  },
  changePct: {
    mean: -10.8849,
    median: -24.7046,
    min: -99.9805,
    max: 4262.0381
  },
  decisionTimeAge: {
    mean: 260.475,
    std: 86.900,
    min: 95,
    max: 494
  }
};

export const LEAKAGE_AUDIT_STATS = {
  contentUpdatedDateFuture: 33703,
  lastOptimizedDateFuture: 23623,
  optimizationEligibleDateFuture: 23623,
  contentCreatedDateFuture: 0,
  futureCreatedRowsExcluded: 2124,
  under90DaysExcluded: 78254,
  eligibleAgeMin: 95,
  eligibleAgeMax: 494,
  clientDomainOverlap: 0,
  targetLeakageStatement: 'No target leakage identified in the audited feature pipeline.',
  overlapStatement: 'Verified — 0 Client-Domain Overlap'
};

export const FINAL_VERIFICATION_CHECKS = {
  negativeImpressions: 0,
  negativeClicks: 0,
  ctrExceeding100: 0,
  engagementRateExceeding100: 0,
  duplicateClientPagePairs: 0,
  invalidFinalProbabilities: 0,
  missingFinalDeclineProbabilities: 0,
  missingReasonCodes: 0,
  missingRecommendedActions: 0,
  rankSequenceValid: true,
  probabilitiesSortedDescending: true,
  minProbability: 0.0842,
  maxProbability: 0.9288,
  totalScoredPages: 41912,
  canonicalColumns: 11
};

export const REASON_CODE_SYSTEM = {
  disclaimer: 'Reason codes and recommended actions are rule-based diagnostic heuristics triggered by observable decision-time signals. They are not causal explanations of the model\'s predictions.',
  verifiedReasons: [
    {
      code: 'Very low CTR',
      trigger: 'ctr_30d < 1.0% (or 0 clicks relative to impression opportunity)',
      description: 'Search impressions generated with negligible or zero click capture.'
    },
    {
      code: 'Weak average search position',
      trigger: 'weighted_avg_position_30d > 10 (or lower second-page placement)',
      description: 'Impression-weighted ranking position trailing outside prime search visibility.'
    },
    {
      code: 'Mature content',
      trigger: 'content_age_days >= 90 days',
      description: 'Established editorial page with sustained historical indexing.'
    }
  ],
  verifiedAction: {
    action: 'Review title/meta and search-intent alignment',
    editorialRole: 'Actionable directive for content editors to audit SERP snippet relevance, headline alignment, and search intent match.'
  }
};

export const LIMITATIONS_DATA = [
  {
    title: 'Relatively Weak Standard Classification Metrics',
    details: 'On the held-out test cohort, conventional classification performance was weak, with accuracy around 32.6% and ROC-AUC around 0.28 for Random Forest. Full-distribution classification is limited, which is why evaluation centers on top-N ranking.'
  },
  {
    title: 'Precision@50 as the Operational Target Metric',
    details: 'Evaluation emphasizes Precision@50 because the intended application is a limited-capacity human review queue (e.g. 20–50 URLs weekly), not broad automated action across tens of thousands of pages.'
  },
  {
    title: 'Dataset Scope & Client Generalization',
    details: 'The supervised dataset spans 28 clients (22 train, 6 test). While zero client overlap provides a client-held-out evaluation design and tests cross-client transfer on this cohort, performance on fundamentally different verticals or CMS platforms remains to be tested.'
  },
  {
    title: 'Client Count Discrepancy Clarification',
    details: 'The original feature frame covered 32 clients. The supervised evaluation cohort contained 28 clients with observable target outcomes, with 22 clients used for training and 6 held out for testing. The remaining 4 clients had unobservable outcomes in the target period.'
  },
  {
    title: 'Feature Missingness in GA4 and Off-Page Signals',
    details: 'Substantial missingness exists in backlinks (52.29%) and engagement rate (39.49%). While handled safely through Scikit-learn Pipeline median imputers, missing signals reduce predictive granularity.'
  },
  {
    title: 'Specific Target Formulation',
    details: 'The observable target is based on a specific later-period impression decline rule (later-period impressions <= 80% of March baseline). This captures one form of decline but may not capture seasonal patterns, ranking position changes without traffic loss, or intentional page consolidations.'
  },
  {
    title: 'Correlative Associations, Not Causal Proof',
    details: 'Model predictions reflect statistical associations in the observation period, not causal proof that refreshing a page will restore search performance. Refresh decisions require editorial validation.'
  },
  {
    title: 'Decision-Support Prototype Status',
    details: 'The system is a decision-support prototype. It does not replace editorial judgment or SEO expertise; it prioritizes human attention where review is most urgently needed.'
  },
  {
    title: 'Honest Production Readiness Assessment',
    details: 'The observed Precision@50 improvement is promising for the tested cohort (54% vs 40% heuristic baseline), but further longitudinal validation is required before production deployment.'
  }
];

export const FUTURE_WORK_DATA = [
  {
    title: 'Longitudinal Rolling-Window Validation',
    category: 'Validation',
    description: 'Implement walk-forward temporal cross-validation over multi-year quarterly intervals to test stability across seasonal fluctuations.'
  },
  {
    title: 'Learning-to-Rank (LTR) Architecture',
    category: 'Modeling',
    description: 'Transition from point-wise binary classification to pairwise/listwise ranking objectives (e.g., LightGBM / XGBoost Ranker with NDCG loss).'
  },
  {
    title: 'Probability Calibration',
    category: 'Post-Processing',
    description: 'Apply Isotonic Regression or Platt Scaling to improve probabilistic calibration for confidence-bounded thresholding.'
  },
  {
    title: 'Local Interpretability via TreeSHAP',
    category: 'Explainability',
    description: 'Integrate Shapley Additive Explanations (TreeSHAP) alongside rule-based reason codes to quantify exact feature attributions per page.'
  },
  {
    title: 'Semantic Content & Heading Embeddings',
    category: 'Feature Engineering',
    description: 'Incorporate dense neural text representations (e.g. ModernBERT/RoBERTa embeddings) of H1/H2 headings to quantify semantic drift.'
  },
  {
    title: 'Randomized Controlled Trial (RCT) Experimentation',
    category: 'Causal Validation',
    description: 'Conduct A/B refresh experiments where top-ranked pages are randomly assigned to immediate refresh vs observational control.'
  }
];

export const TECH_STACK = [
  { name: 'Python', role: 'Core ML programming language', type: 'Language' },
  { name: 'Pandas', role: 'Feature frame manipulation & temporal alignment', type: 'Data Processing' },
  { name: 'NumPy', role: 'Vectorized mathematical operations & metrics', type: 'Computation' },
  { name: 'DuckDB', role: 'High-performance SQL queries over raw Parquet/CSV', type: 'Data Engine' },
  { name: 'Scikit-learn', role: 'Pipelines, GroupKFold, imputation & model training', type: 'ML Library' },
  { name: 'Google Colab', role: 'Cloud compute environment for training pipelines', type: 'Environment' },
  { name: 'Jupyter Notebook', role: 'Reproducible workflow documentation', type: 'Interactive Notebook' },
  { name: 'GitHub', role: 'Version control and public repository hosting', type: 'Code Hosting' },
];
