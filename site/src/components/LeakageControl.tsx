import { ShieldCheck, Lock, AlertOctagon, CheckCircle2, UserCheck, CalendarCheck, FileCheck } from 'lucide-react';
import { CLIENT_SPLIT_STATS, LEAKAGE_AUDIT_STATS } from '../data/projectData';

export default function LeakageControl() {
  return (
    <section id="leakage" className="border-b border-slate-200 bg-[#F3F7F8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>05</span>
            <span>/</span>
            <span>Methodological Rigor</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Data Quality &amp; Leakage Prevention Protocols
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            In web intelligence ML systems, data leakage is the most common cause of illusory model performance. This capstone enacted strict temporal, client-level, and pipeline-level containment guards.
          </p>
        </div>

        {/* 4 Pillars of Integrity Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Pillar 1: Client Group Split */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0F1F2E]">Client-Grouped Data Splitting</h3>
                <span className="font-mono text-xs text-emerald-800 font-semibold">Zero Client-Domain Overlap</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standard random train/test page splits result in severe cross-client data leakage: a model learns domain-specific URL structures or brand signals rather than transferable ranking degradation patterns. To eliminate this, splitting was enforced strictly on client hashes.
            </p>

            <div className="mt-4 rounded-lg border border-slate-200 bg-[#F3F7F8] p-3.5 font-mono text-xs shadow-2xs">
              <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                <div>
                  <span className="text-slate-500">Train Population:</span>
                  <div className="text-[#0F1F2E] font-semibold">{CLIENT_SPLIT_STATS.trainRows.toLocaleString()} rows (22 clients)</div>
                  <div className="text-slate-500 text-[10px]">Positive rate: {(CLIENT_SPLIT_STATS.trainTargetRate * 100).toFixed(2)}%</div>
                </div>
                <div>
                  <span className="text-slate-500">Test Population:</span>
                  <div className="text-[#0F1F2E] font-semibold">{CLIENT_SPLIT_STATS.testRows.toLocaleString()} rows (6 clients)</div>
                  <div className="text-slate-500 text-[10px]">Positive rate: {(CLIENT_SPLIT_STATS.testTargetRate * 100).toFixed(2)}%</div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Client Domain Overlap: 0
                </span>
                <span className="text-slate-500">Client-Grouped Holdout Validation</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Temporal Boundary Guard */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-200 bg-sky-50 text-sky-800">
                <CalendarCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0F1F2E]">Temporal Boundary &amp; Future-Date Filtering</h3>
                <span className="font-mono text-xs text-sky-800 font-semibold">Strict Decision-Time Causality</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All feature variables are computed exclusively on or prior to decision timestamp $T_0$. The target is constructed from a subsequent evaluation window, strictly prohibiting future outcome information from entering the feature matrix.
            </p>

            <div className="mt-4 rounded-lg border border-slate-200 bg-[#F3F7F8] p-3.5 font-mono text-xs shadow-2xs">
              <div className="space-y-1 text-[11px] sm:text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-600">Future Created Records Excluded:</span>
                  <span className="text-rose-700 font-semibold">{LEAKAGE_AUDIT_STATS.futureCreatedRowsExcluded.toLocaleString()} anomalies</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Audited Future Update Timestamps:</span>
                  <span className="text-amber-800 font-semibold">{LEAKAGE_AUDIT_STATS.contentUpdatedDateFuture.toLocaleString()} rows</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Audited Future Optimization Dates:</span>
                  <span className="text-amber-800 font-semibold">{LEAKAGE_AUDIT_STATS.lastOptimizedDateFuture.toLocaleString()} rows</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Content Maturity Threshold:</span>
                  <span className="text-sky-800 font-semibold">&ge; 90 days required</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Eligible Age Range:</span>
                  <span className="text-[#0F1F2E] font-medium">{LEAKAGE_AUDIT_STATS.eligibleAgeMin} to {LEAKAGE_AUDIT_STATS.eligibleAgeMax} days observed</span>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> {LEAKAGE_AUDIT_STATS.targetLeakageStatement}
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Pipeline-Safe Preprocessing */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50 text-indigo-700">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0F1F2E]">Pipeline-Bound Imputation</h3>
                <span className="font-mono text-xs text-indigo-800 font-semibold">No Global Matrix Leakage</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A frequent blunder in applied ML is computing imputation medians or standard scalers across the entire dataset prior to splitting. In this project, all imputation transformers were fitted strictly on training folds via Scikit-learn Pipelines.
            </p>

            <div className="mt-4 rounded-lg border border-slate-200 bg-[#F3F7F8] p-3.5 font-mono text-xs shadow-2xs">
              <div className="space-y-1 text-[11px]">
                <div className="text-slate-600">Processed Training Matrix: <span className="text-[#0F1F2E] font-semibold">{CLIENT_SPLIT_STATS.trainProcessedShape}</span></div>
                <div className="text-slate-600">Processed Testing Matrix: <span className="text-[#0F1F2E] font-semibold">{CLIENT_SPLIT_STATS.testProcessedShape}</span></div>
                <div className="text-emerald-700 pt-1 font-medium">Transformers: ColumnTransformer + SimpleImputer(median)</div>
              </div>
            </div>
          </div>

          {/* Pillar 4: Metric Bounds & Ratio Sanity */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-200 bg-amber-50 text-amber-700">
                <FileCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0F1F2E]">Boundary Checks &amp; Denominator Sanity</h3>
                <span className="font-mono text-xs text-amber-800 font-semibold">Physical Ratio Verification</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Telemetry feeds often generate erratic ratios when event denominators are tiny (e.g. 1 scroll event over 1 session). Rigorous physical bounds checks were executed across all observable rows:
            </p>

            <div className="mt-4 rounded-lg border border-slate-200 bg-[#F3F7F8] p-3.5 font-mono text-xs shadow-2xs">
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">CTR &gt; 100%:</span>
                  <span className="text-emerald-700 font-bold">0 violations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Engagement Rate &gt; 100%:</span>
                  <span className="text-emerald-700 font-bold">0 violations</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Duplicate (client, page) pairs:</span>
                  <span className="text-emerald-700 font-bold">0 duplicates</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Small-denominator anomalies:</span>
                  <span className="text-amber-800 font-semibold">Flagged &amp; audited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

