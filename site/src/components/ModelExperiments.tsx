import { AlertTriangle, TrendingUp, CheckCircle, Info, BarChart3, HelpCircle, Layers, ShieldCheck } from 'lucide-react';
import { MODEL_RESULTS, GROUP_K_FOLD_DATA } from '../data/projectData';

export default function ModelExperiments() {
  return (
    <section id="experiments" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>06</span>
            <span>/</span>
            <span>Supervised Modeling &amp; Metrics</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Supervised Model Comparison &amp; Evaluation
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Three supervised model architectures were benchmarked against the held-out client test set. The models are evaluated on both classical classification statistics and decision-critical ranking precision.
          </p>
        </div>

        {/* Critical Interpretation Notice */}
        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50/70 p-5 shadow-2xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h4 className="text-sm font-semibold text-amber-900">
                Critical Methodological Interpretation: Classification vs. Prioritization
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Standard binary classification metrics across the entire distribution are relatively weak (accuracies ~30–36%, ROC-AUC ~0.28–0.39). We explicitly report these numbers without artificial inflation. Because web search dynamics are subject to unobserved confounding factors, editorial teams do <strong>not</strong> consume all 40,000 predictions simultaneously; they review content in top-N batches.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Therefore, the operational utility rests upon <strong className="text-slate-900">Precision@50</strong>. In this ranking domain, <strong className="text-sky-900">Random Forest achieved 0.54 Precision@50</strong>, exceeding Decision Tree (0.30) and the Heuristic Baseline (0.40).
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xs">
          <div className="border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#F3F7F8]">
            <div>
              <h3 className="text-base font-semibold text-[#0F1F2E]">Supervised Model Benchmark Matrix</h3>
              <p className="text-xs text-slate-500 font-mono">Evaluated on held-out test split (6,580 rows across 6 unseen clients)</p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-900 bg-sky-100 border border-sky-300 px-3 py-1 rounded-md font-semibold">
              <BarChart3 className="h-3.5 w-3.5 text-sky-800" />
              <span>North Star: Precision@50</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-mono text-[11px]">
                  <th className="py-3 px-4">Model Architecture</th>
                  <th className="py-3 px-4 text-center">Accuracy</th>
                  <th className="py-3 px-4 text-center">Precision</th>
                  <th className="py-3 px-4 text-center">Recall</th>
                  <th className="py-3 px-4 text-center">F1 Score</th>
                  <th className="py-3 px-4 text-center">ROC-AUC</th>
                  <th className="py-3 px-4 text-center">Avg Precision</th>
                  <th className="py-3 px-4 text-center bg-sky-50 text-sky-950 font-bold border-x border-sky-200">
                    Precision@50
                  </th>
                  <th className="py-3 px-4 text-center">Operational Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {MODEL_RESULTS.map((model) => (
                  <tr
                    key={model.name}
                    className={`transition-colors ${
                      model.highlight
                        ? 'bg-sky-50/50 hover:bg-sky-50 font-medium'
                        : 'hover:bg-slate-50/70'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-sans font-semibold text-[#0F1F2E] flex items-center gap-2">
                      {model.highlight && (
                        <span className="h-2 w-2 rounded-full bg-sky-700"></span>
                      )}
                      <span>{model.name}</span>
                      {model.highlight && (
                        <span className="rounded bg-sky-100 px-1.5 py-0.5 text-[10px] font-mono text-sky-900 font-semibold border border-sky-300">
                          Selected Model
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-700">{model.accuracy.toFixed(4)}</td>
                    <td className="py-3.5 px-4 text-center text-slate-700">{model.precision.toFixed(4)}</td>
                    <td className="py-3.5 px-4 text-center text-slate-700">{model.recall.toFixed(4)}</td>
                    <td className="py-3.5 px-4 text-center text-slate-700">{model.f1.toFixed(4)}</td>
                    <td className="py-3.5 px-4 text-center text-slate-500">{model.rocAuc.toFixed(4)}</td>
                    <td className="py-3.5 px-4 text-center text-slate-700">{model.averagePrecision.toFixed(4)}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-sm bg-sky-50 border-x border-sky-200 text-sky-900">
                      {model.precisionAt50.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 text-center font-sans text-xs text-slate-600">
                      {model.name === 'Random Forest'
                        ? 'Top-tail prioritizer'
                        : model.name === 'Decision Tree'
                        ? 'Overfits top tail'
                        : 'Linear lower bound'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#F3F7F8] text-xs text-slate-600 font-sans border-t border-slate-200">
            <strong>Key Insight:</strong> Random Forest produced the strongest observed top-50 Precision@50 (<strong>0.54</strong>) among the tested models, although its full-distribution ROC-AUC indicates that the model is not a reliable general classifier and requires further validation. Decision Tree attained a Precision@50 of <strong>0.30</strong>, below the test-set positive prevalence of 50.08%.
          </div>
        </div>

        {/* 5-Fold Client-Grouped Validation Table */}
        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xs">
          <div className="border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#F3F7F8]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">Cross-Validation Architecture</span>
              <h3 className="text-base font-semibold text-[#0F1F2E] mt-0.5">Client-Grouped Holdout Validation (5-Fold GroupKFold Partitioning Scheme)</h3>
              <p className="text-xs text-slate-500 font-mono">Ensuring strict zero-overlap client containment across evaluation splits</p>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>0 Client Overlap Across All Folds</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 text-[11px]">
                  <th className="py-3 px-4">Fold</th>
                  <th className="py-3 px-4">Train Rows</th>
                  <th className="py-3 px-4">Test Rows</th>
                  <th className="py-3 px-4">Train Clients</th>
                  <th className="py-3 px-4">Test Clients</th>
                  <th className="py-3 px-4 text-center">Client Overlap</th>
                  <th className="py-3 px-4 text-center">Train Target Rate</th>
                  <th className="py-3 px-4 text-center">Test Target Rate</th>
                  <th className="py-3 px-4 text-right">Split Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {GROUP_K_FOLD_DATA.map((fold) => (
                  <tr
                    key={fold.fold}
                    className={`transition-colors ${
                      fold.isSelectedSplit
                        ? 'bg-sky-50/50 hover:bg-sky-50 font-semibold'
                        : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="py-3 px-4 font-bold text-[#0F1F2E] flex items-center gap-2">
                      {fold.isSelectedSplit && <span className="h-2 w-2 rounded-full bg-sky-700"></span>}
                      <span>Fold {fold.fold}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-700">{fold.trainRows.toLocaleString()}</td>
                    <td className="py-3 px-4 text-slate-700">{fold.testRows.toLocaleString()}</td>
                    <td className="py-3 px-4 text-slate-700">{fold.trainClients}</td>
                    <td className="py-3 px-4 text-slate-700">{fold.testClients}</td>
                    <td className="py-3 px-4 text-center text-emerald-700 font-bold">{fold.clientOverlap}</td>
                    <td className="py-3 px-4 text-center text-slate-700">{fold.trainTargetRate.toFixed(2)}%</td>
                    <td className="py-3 px-4 text-center text-slate-700">{fold.testTargetRate.toFixed(2)}%</td>
                    <td className="py-3 px-4 text-right font-sans">
                      {fold.isSelectedSplit ? (
                        <span className="rounded bg-sky-100 px-2 py-0.5 text-[10px] font-mono text-sky-900 border border-sky-300 font-semibold">
                          Selected Split (22 vs 6)
                        </span>
                      ) : (
                        <span className="text-slate-400 text-[11px]">Validation Fold</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#F3F7F8] text-xs text-slate-600 font-sans border-t border-slate-200">
            <strong>Methodology Note:</strong> Primary model evaluation was conducted using <strong>Client-Grouped Holdout Validation</strong>, corresponding to Fold 2 of the GroupKFold partitioning scheme. This split enforced zero client overlap between the <strong>22 training clients (35,283 rows, 55.69% positive)</strong> and <strong>6 held-out test clients (6,580 rows, 50.08% positive)</strong>.
          </div>
        </div>

        {/* Deep Dive Breakdown Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {MODEL_RESULTS.map((model) => (
            <div
              key={model.name}
              className={`rounded-lg border p-5 flex flex-col justify-between shadow-2xs ${
                model.highlight
                  ? 'border-sky-300 bg-sky-50/40'
                  : 'border-slate-200 bg-[#F3F7F8]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[#0F1F2E]">{model.name}</h4>
                  <span className="font-mono text-xs text-sky-900 font-bold">
                    P@50: {model.precisionAt50.toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {model.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 font-mono text-[11px] flex justify-between text-slate-500">
                <span>ROC-AUC: {model.rocAuc.toFixed(4)}</span>
                <span>F1: {model.f1.toFixed(4)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

