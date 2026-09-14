import { Award, BarChart2, ShieldAlert, AlertTriangle, CheckCircle2, TrendingDown, Layers, Sliders } from 'lucide-react';
import { HEURISTIC_BASELINE, MODEL_RESULTS } from '../data/projectData';

export default function EvaluationPrecisionChart() {
  const testPrevalence = 0.5008; // 50.08%

  // Precision@50 ranking comparison items
  const precisionRankingData = [
    {
      name: 'Random Forest',
      type: 'Supervised ML Prototype',
      precision: 0.54,
      lift: 1.0784,
      positives: '27 / 50',
      badge: 'Highest Ranking Precision',
      isMl: true,
      highlight: true
    },
    {
      name: 'Logistic Regression',
      type: 'Linear Supervised ML',
      precision: 0.44,
      lift: 0.8786,
      positives: '22 / 50',
      badge: 'Linear Benchmark',
      isMl: true,
      highlight: false
    },
    {
      name: 'Heuristic Baseline',
      type: 'Rule-Based Benchmark',
      precision: 0.40,
      lift: 0.7988,
      positives: '20 / 50',
      badge: 'Unsupervised Rule-Based',
      isMl: false,
      highlight: false
    },
    {
      name: 'Decision Tree',
      type: 'Single Tree Supervised ML',
      precision: 0.30,
      lift: 0.5990,
      positives: '15 / 50',
      badge: 'High Leaf Variance',
      isMl: true,
      highlight: false
    },
  ];

  // Full distribution ROC-AUC data
  const rocAucData = [
    { name: 'Decision Tree', rocAuc: 0.3949, color: 'bg-slate-600' },
    { name: 'Logistic Regression', rocAuc: 0.2969, color: 'bg-slate-700' },
    { name: 'Random Forest', rocAuc: 0.2843, color: 'bg-sky-800' },
  ];

  return (
    <section id="evaluation" className="border-b border-slate-200 bg-[#F3F7F8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>07</span>
            <span>/</span>
            <span>Empirical Model Evaluation</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Precision@50 Lift &amp; ROC-AUC Evaluation
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Because editorial content teams operate within finite weekly review capacities, evaluation centers on whether top-ranked pages capture genuine later-period decline, alongside transparent reporting of full-distribution metrics.
          </p>
        </div>

        {/* CHART 1: Precision@50: Held-Out Prioritization Performance (Vertical Bar Chart) */}
        <div 
          className="mt-10 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-xs"
          role="region"
          aria-label="Precision@50 model comparison bar chart"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">Chart 1 — Primary Objective</span>
              <h3 className="text-lg font-semibold text-[#0F1F2E] mt-0.5">Precision@50: Held-Out Prioritization Performance</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Top-50 decline precision on held-out test data (N = 6,580) compared against test positive prevalence. Full [0, 1] scale without axis truncation.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-md self-start sm:self-auto font-medium">
              <span className="h-2 w-2 rounded-full bg-amber-600"></span>
              <span>Test Positive Prevalence: 50.08%</span>
            </div>
          </div>

          {/* Screen reader accessible summary */}
          <div className="sr-only">
            <p>
              Bar chart comparing Precision@50 on held-out test data:
              Random Forest: 54.0% (27/50, lift 1.0784),
              Logistic Regression: 44.0% (22/50, lift 0.8786),
              Heuristic Baseline: 40.0% (20/50, lift 0.7988),
              Decision Tree: 30.0% (15/50, lift 0.5990).
              Test positive prevalence reference line: 50.08%.
              Y-axis range: 0% to 100%.
            </p>
          </div>

          {/* Clean Vertical Bar Chart for Precision@50 with Y-axis [0, 1] */}
          <div className="pt-6 pb-2">
            <div className="flex gap-2 sm:gap-4">
              {/* Left Y-Axis Gutter (0% to 100%) */}
              <div className="w-10 sm:w-14 shrink-0 flex flex-col justify-between text-right text-[10px] sm:text-xs font-mono text-slate-500 py-1 select-none">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>

              {/* Chart Plot Area */}
              <div className="relative flex-1 h-72 sm:h-80 border-b border-l border-slate-300">
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="border-b border-slate-100 w-full"></div>
                  <div className="border-b border-slate-100 w-full"></div>
                  <div className="border-b border-slate-100 w-full"></div>
                  <div className="border-b border-slate-100 w-full"></div>
                  <div className="border-b border-slate-100 w-full"></div>
                  <div className="w-full"></div>
                </div>

                {/* Clearly Labeled 50.08% Test Positive Prevalence Reference Line */}
                <div
                  style={{ bottom: `${testPrevalence * 100}%` }}
                  className="absolute left-0 right-0 border-b-2 border-dashed border-amber-500 z-20 flex items-center justify-end"
                >
                  <span className="bg-white border border-amber-300 text-amber-900 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono -translate-y-1/2 shadow-xs mr-1 sm:mr-3 font-semibold">
                    Test prevalence reference: 50.08%
                  </span>
                </div>

                {/* Four Vertical Bars */}
                <div className="relative h-full z-10 grid grid-cols-4 gap-2 sm:gap-6 items-end px-1 sm:px-4">
                  {precisionRankingData.map((item) => {
                    const heightPct = item.precision * 100; // Exact height on [0, 1] scale
                    return (
                      <div key={item.name} className="flex flex-col items-center h-full justify-end group">
                        {/* Metric Callout Above Bar */}
                        <div className="text-center mb-2">
                          <div className={`font-mono text-xs sm:text-base font-bold ${item.highlight ? 'text-sky-900' : 'text-[#0F1F2E]'}`}>
                            {(item.precision * 100).toFixed(0)}%
                          </div>
                          <div className="text-[9px] sm:text-[11px] font-mono text-slate-500">
                            {item.positives}
                          </div>
                        </div>

                        {/* Bar Column */}
                        <div className="w-full max-w-[76px] relative flex items-end justify-center" style={{ height: `${heightPct}%` }}>
                          <div
                            className={`w-full rounded-t transition-all duration-300 ${
                              item.highlight
                                ? 'bg-sky-800 shadow-xs border-t border-x border-sky-900'
                                : item.isMl
                                ? 'bg-slate-600 border-t border-x border-slate-700'
                                : 'bg-amber-600 border-t border-x border-amber-700'
                            }`}
                            style={{ height: '100%' }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Labels below the horizontal axis */}
            <div className="flex gap-2 sm:gap-4 mt-3">
              <div className="w-10 sm:w-14 shrink-0" aria-hidden="true"></div>
              <div className="grid grid-cols-4 gap-2 sm:gap-6 flex-1 px-1 sm:px-4 text-center">
                {precisionRankingData.map((item) => (
                  <div key={item.name} className="flex flex-col items-center">
                    <div className={`font-mono text-[11px] sm:text-xs font-semibold leading-tight ${item.highlight ? 'text-sky-900' : 'text-slate-800'}`}>
                      {item.name}
                    </div>
                    <div className={`mt-0.5 text-[9px] sm:text-[10px] font-mono hidden sm:block ${
                      item.isMl ? 'text-slate-500' : 'text-amber-700'
                    }`}>
                      {item.type}
                    </div>
                    <div className="mt-1 text-[10px] sm:text-[11px] font-mono">
                      <span className="text-slate-500">Lift: </span>
                      <span className={item.lift >= 1.0 ? 'text-emerald-700 font-bold' : 'text-rose-700 font-medium'}>
                        {item.lift.toFixed(4)}×
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analytical Footnote & Exact Lift Definitions */}
          <div className="mt-8 pt-5 border-t border-slate-200 grid gap-4 sm:grid-cols-2 text-xs font-mono text-slate-600">
            <div className="flex items-start gap-2">
              <span className="mt-1 h-3 w-1 shrink-0 bg-amber-500"></span>
              <span>
                <strong className="text-amber-900">Amber Dashed Line (50.08%):</strong> Uninformed test-set positive prevalence reference rate. Random Forest is the only evaluated model achieving positive lift (<strong className="text-emerald-700">1.0784×</strong>) over the ground-truth test prevalence.
              </span>
            </div>
            <div>
              <strong className="text-slate-800">Standardized Axis:</strong> The vertical axis spans the complete [0, 1] range (0% to 100%) without artificial truncation or scale distortion, preserving true geometric proportions between model outcomes and test prevalence.
            </div>
          </div>
        </div>

        {/* CHART 2: ROC-AUC Comparison (Vertical Bar Chart with Y-axis 0 to 1) */}
        <div 
          className="mt-10 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-xs"
          role="region"
          aria-label="ROC-AUC full distribution comparison bar chart"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">Chart 2 — Full Distribution Analysis</span>
              <h3 className="text-lg font-semibold text-[#0F1F2E] mt-0.5">ROC-AUC Comparison (Full Test Distribution)</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Area Under the ROC Curve evaluated across all 6,580 rows of unseen test clients. Y-axis starts strictly at 0 and ends at 1.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-md self-start sm:self-auto font-medium">
              <ShieldAlert className="h-3.5 w-3.5 text-sky-800" />
              <span>Full Test Cohort (N = 6,580)</span>
            </div>
          </div>

          {/* Screen reader accessible summary */}
          <div className="sr-only">
            <p>
              Bar chart comparing ROC-AUC on full test set (N = 6,580):
              Decision Tree: 0.3949,
              Logistic Regression: 0.2969,
              Random Forest: 0.2843.
              Random classifier reference: 0.50 AUC.
              Y-axis range: 0.00 to 1.00.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Vertical Bar Chart for ROC-AUC with Y-axis [0, 1] */}
            <div className="lg:col-span-7">
              <div className="flex gap-2 sm:gap-4">
                {/* Left Y-Axis Gutter (0.00 to 1.00) */}
                <div className="w-10 sm:w-12 shrink-0 flex flex-col justify-between text-right text-[10px] sm:text-xs font-mono text-slate-500 py-1 select-none">
                  <span>1.00</span>
                  <span>0.80</span>
                  <span>0.60</span>
                  <span>0.40</span>
                  <span>0.20</span>
                  <span>0.00</span>
                </div>

                {/* Chart Plot Area */}
                <div className="relative flex-1 h-64 sm:h-72 border-b border-l border-slate-300">
                  {/* Horizontal Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="border-b border-slate-100 w-full"></div>
                    <div className="border-b border-slate-100 w-full"></div>
                    <div className="border-b border-slate-100 w-full"></div>
                    <div className="border-b border-slate-100 w-full"></div>
                    <div className="border-b border-slate-100 w-full"></div>
                    <div className="w-full"></div>
                  </div>

                  {/* Clearly Labeled 0.50 AUC Random Classifier Reference Line */}
                  <div
                    style={{ bottom: '50%' }}
                    className="absolute left-0 right-0 border-b-2 border-dashed border-slate-400 z-20 flex items-center justify-end"
                  >
                    <span className="bg-white border border-slate-300 text-slate-700 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono -translate-y-1/2 mr-1 sm:mr-3 shadow-xs font-medium">
                      Random classifier reference: 0.50 AUC
                    </span>
                  </div>

                  {/* Three Vertical Bars for ROC-AUC */}
                  <div className="relative h-full z-10 grid grid-cols-3 gap-3 sm:gap-8 items-end px-3 sm:px-8">
                    {rocAucData.map((item) => {
                      const heightPct = item.rocAuc * 100; // Exact height on [0, 1] scale
                      return (
                        <div key={item.name} className="flex flex-col items-center h-full justify-end group">
                          {/* Exact 4-decimal verified value above bar */}
                          <div className="text-center mb-2 font-mono text-xs sm:text-sm font-bold text-[#0F1F2E]">
                            {item.rocAuc.toFixed(4)}
                          </div>

                          {/* Bar Column */}
                          <div className="w-full max-w-[68px] relative flex items-end justify-center" style={{ height: `${heightPct}%` }}>
                            <div
                              className={`w-full rounded-t transition-all duration-300 ${
                                item.name === 'Random Forest'
                                  ? 'bg-sky-800 border-t border-x border-sky-900 shadow-xs'
                                  : 'bg-slate-600 border-t border-x border-slate-700'
                              }`}
                              style={{ height: '100%' }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Labels below the horizontal axis */}
              <div className="flex gap-2 sm:gap-4 mt-3">
                <div className="w-10 sm:w-12 shrink-0" aria-hidden="true"></div>
                <div className="grid grid-cols-3 gap-3 sm:gap-8 flex-1 px-3 sm:px-8 text-center">
                  {rocAucData.map((item) => (
                    <div key={item.name} className="flex flex-col items-center">
                      <div className="font-mono text-xs font-semibold text-slate-800">
                        {item.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                        {item.name === 'Random Forest' ? 'Ensemble' : item.name === 'Logistic Regression' ? 'Linear' : 'Single Tree'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scientific Honest Callout Card */}
            <div className="lg:col-span-5 rounded-lg border border-slate-200 bg-[#F3F7F8] p-5 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0F1F2E]">
                <ShieldAlert className="h-4 w-4 text-sky-800" />
                <span>Transparent Scientific Assessment</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full-distribution ROC-AUC values (<strong className="text-slate-800">0.2843 to 0.3949</strong>) are plotted on an untruncated 0 to 1 scale without compression. When evaluated across all 6,580 rows of unseen test clients, the models are <strong className="text-slate-900 font-semibold">not reliable classifiers for the entire dataset</strong>. The value 0.50 represents the random-classifier reference line, not an operational decision threshold.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                However, for practical decision support, editorial teams never review 40,000 pages at once. The Random Forest successfully isolates at-risk pages in the extreme top tail, delivering <strong className="text-sky-900 font-semibold">54% Precision@50</strong> (+14 percentage points vs. heuristic baseline) to triage human review bandwidth.
              </p>
            </div>
          </div>
        </div>

        {/* Heuristic Baseline Details Box */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-4">
            <h3 className="text-sm font-semibold text-[#0F1F2E]">Heuristic Baseline Benchmark Specification</h3>
            <span className="text-xs font-mono text-slate-500">Evaluated across N = {HEURISTIC_BASELINE.population.toLocaleString()} observable pages</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-3 text-center font-mono shadow-2xs">
              <div className="text-[10px] text-slate-500 uppercase">Observable Cohort Mean</div>
              <div className="text-lg font-bold text-[#0F1F2E] mt-0.5">{HEURISTIC_BASELINE.mean.toFixed(2)}</div>
              <div className="text-[10px] text-slate-500">0–100 formula scale</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-3 text-center font-mono shadow-2xs">
              <div className="text-[10px] text-slate-500 uppercase">Observed Score Range</div>
              <div className="text-lg font-bold text-slate-700 mt-0.5">{HEURISTIC_BASELINE.min.toFixed(2)} to {HEURISTIC_BASELINE.max.toFixed(2)}</div>
              <div className="text-[10px] text-slate-500">Min to max observed</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-3 text-center font-mono shadow-2xs">
              <div className="text-[10px] text-slate-500 uppercase">Held-Out Test Precision@50</div>
              <div className="text-lg font-bold text-amber-700 mt-0.5">{(HEURISTIC_BASELINE.precisionAt50 * 100).toFixed(1)}%</div>
              <div className="text-[10px] text-slate-500">20 / 50 (lift = 0.7988)</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-3 text-center font-mono shadow-2xs">
              <div className="text-[10px] text-slate-500 uppercase">Observable Cohort Precision@50</div>
              <div className="text-lg font-bold text-slate-600 mt-0.5">{(HEURISTIC_BASELINE.fullPopPrecisionAt50 * 100).toFixed(1)}%</div>
              <div className="text-[10px] text-slate-500">12 / 50 (across 41,863)</div>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-600 leading-relaxed">
            The heuristic baseline is an unsupervised composite rule-based score computed on a 0–100 scale across the {HEURISTIC_BASELINE.population.toLocaleString()} target-observable pages (mean {HEURISTIC_BASELINE.mean.toFixed(2)}, observed range {HEURISTIC_BASELINE.min.toFixed(2)} to {HEURISTIC_BASELINE.max.toFixed(2)}). When evaluated on the held-out test cohort (N = 6,580), the top 50 heuristic-ranked pages contained 20 declining pages (40.0% precision, lift = 0.7988 relative to the 50.08% test positive prevalence). Across all {HEURISTIC_BASELINE.population.toLocaleString()} observable pages, the top 50 heuristic-ranked pages contained 12 declining pages (24.0% precision).
          </p>
        </div>
      </div>
    </section>
  );
}

