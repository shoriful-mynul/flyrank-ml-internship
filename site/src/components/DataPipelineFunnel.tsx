import { ArrowDown, CheckCircle2, GitBranch, AlertTriangle, ShieldCheck, Database, BarChart2, Calendar, TrendingDown } from 'lucide-react';
import { DATASET_POPULATIONS, TARGET_STATS, CLIENT_SPLIT_STATS, LEAKAGE_AUDIT_STATS, CONTENT_AGE_GROUPS, IMPRESSIONS_DISTRIBUTION } from '../data/projectData';

export default function DataPipelineFunnel() {
  const maxAgeCount = 181930;
  const maxTargetCount = 22945;

  return (
    <section id="pipeline" className="border-b border-slate-200 bg-[#F3F7F8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>03</span>
            <span>/</span>
            <span>Data Ingestion &amp; Populations</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Dataset Architecture &amp; Population Flow
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Data integrity was established by defining clear boundaries between raw telemetry ingestion, decision-time eligibility filters, ground-truth supervised observation, and the final scoring population.
          </p>
        </div>

        {/* Population Distinction & Client Scope Notice */}
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50/70 p-5 text-xs sm:text-sm text-slate-700 shadow-2xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-700 mt-0.5" />
            <div className="space-y-2">
              <div>
                <strong className="text-amber-900 font-semibold">Operational Cohort Distinction:</strong> The <strong>41,863</strong> supervised rows have observable later-period outcomes required for model training and evaluation, while the <strong>41,912</strong>-page scoring population represents the final eligible pages receiving model scores. These represent distinct operational cohorts rather than a simple nested subset.
              </div>
              <div className="pt-2 border-t border-amber-200/80 text-xs text-amber-900 font-mono">
                <strong>Client Coverage:</strong> {CLIENT_SPLIT_STATS.clarification}
              </div>
            </div>
          </div>
        </div>

        {/* CHART 1: Visual Branching Population Flow */}
        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">Funnel Structure — Methodology</span>
              <h3 className="text-base font-semibold text-[#0F1F2E] mt-0.5">End-to-End Population Flow &amp; Cohort Derivation</h3>
            </div>
            <span className="font-mono text-xs text-slate-500">331,437 Raw Ingested &rarr; Dual Target/Scoring Outputs</span>
          </div>

          <div className="space-y-4">
            {/* Level 1: Raw Ingestion */}
            <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="text-sm font-semibold text-[#0F1F2E]">Original Raw Feature Frame</span>
                  <span className="rounded bg-white border border-slate-200 px-2 py-0.5 font-mono text-xs text-slate-700">32 Clients</span>
                </div>
                <div className="font-mono text-lg font-bold text-[#0F1F2E] sm:text-xl">331,437 rows</div>
              </div>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Initial merged telemetry spanning Google Search Console, Google Analytics 4, keyword demand indices, and CMS metadata across 32 enterprise client properties.
              </p>
            </div>

            {/* Filter Transition Indicator */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-mono text-rose-800">
                <ArrowDown className="h-3.5 w-3.5" />
                <span>Exclusions: 2,124 future-dated records + 78,254 young pages (&lt;90 days)</span>
              </div>
            </div>

            {/* Level 2: Decision-Time Eligible Pool */}
            <div className="rounded-lg border border-sky-200 bg-sky-50/40 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-sky-700"></span>
                  <span className="text-sm font-semibold text-sky-950">Decision-Time Eligible Pages</span>
                  <span className="rounded bg-sky-100 px-2 py-0.5 font-mono text-xs text-sky-800 border border-sky-200 font-medium">Maturity Verified</span>
                </div>
                <div className="font-mono text-lg font-bold text-sky-900 sm:text-xl">251,059 pages</div>
              </div>
              <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                Mature pages passing the &ge;90 days age requirement. Observed decision-time eligible age range: <strong>{LEAKAGE_AUDIT_STATS.eligibleAgeMin} to {LEAKAGE_AUDIT_STATS.eligibleAgeMax} days</strong> (mean: {IMPRESSIONS_DISTRIBUTION.decisionTimeAge.mean} days, std: {IMPRESSIONS_DISTRIBUTION.decisionTimeAge.std}).
              </p>
            </div>

            {/* Branching Split Header */}
            <div className="pt-2 flex items-center justify-center">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <GitBranch className="h-4 w-4 text-sky-700" />
                <span>Operational Branching Point (Observable Supervised vs. Scored Queue)</span>
              </div>
            </div>

            {/* Level 3: Dual Operational Cohorts (Branching) */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Branch A: Supervised Modeling Cohort */}
              <div className="rounded-lg border border-sky-200 bg-[#F3F7F8] p-4 relative shadow-2xs">
                <div className="flex items-center justify-between font-mono text-xs text-sky-800 font-semibold mb-1">
                  <span>Branch A: Supervised Dataset</span>
                  <span className="font-bold">28 Clients</span>
                </div>
                <div className="text-2xl font-bold font-mono text-[#0F1F2E]">41,863 pages</div>
                <div className="mt-1 text-xs font-semibold text-slate-800">Target-Observable Supervised Cohort</div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Pages with confirmed ground-truth performance in the subsequent observation window. Divided strictly by client into <strong>22 training clients (35,283 rows)</strong> and <strong>6 held-out test clients (6,580 rows)</strong> with <strong>0 client overlap</strong>.
                </p>
                <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] font-mono text-emerald-700 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>54.81% observed decline rate</span>
                </div>
              </div>

              {/* Branch B: Final Scoring Population */}
              <div className="rounded-lg border border-indigo-200 bg-[#F3F7F8] p-4 relative shadow-2xs">
                <div className="flex items-center justify-between font-mono text-xs text-indigo-800 font-semibold mb-1">
                  <span>Branch B: Scored Population</span>
                  <span className="font-bold">Operational Queue</span>
                </div>
                <div className="text-2xl font-bold font-mono text-[#0F1F2E]">41,912 pages</div>
                <div className="mt-1 text-xs font-semibold text-slate-800">Final Operational Scoring Queue</div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  The final operational population scored with the trained Random Forest prototype and sorted descending by estimated decline probability (<span className="font-mono text-sky-800 font-medium">p = 0.9288 to 0.0842</span>) into <span className="font-mono text-slate-700">final_content_refresh_ranking.csv</span>.
                </p>
                <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] font-mono text-indigo-700 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>100% complete continuous scores</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CHART 5: Content Age Distribution (Vertical Column Chart) */}
        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">Chart 5 — Age Structure</span>
              <h3 className="text-lg font-semibold text-[#0F1F2E] mt-0.5">Content Age Distribution</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Most eligible content falls into the 180–364 day age band. Six discrete age groups across 329,313 valid rows.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-700 bg-[#F3F7F8] border border-slate-200 px-3 py-1.5 rounded-md">
              <Calendar className="h-3.5 w-3.5 text-sky-700" />
              <span>Decision-Time Mean: 260.5 Days</span>
            </div>
          </div>

          {/* Age Buckets Vertical Column Chart */}
          <div className="pt-6 pb-2">
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-4 items-end h-56">
              {CONTENT_AGE_GROUPS.map((group) => {
                const heightPct = Math.max(12, (group.count / maxAgeCount) * 100);
                return (
                  <div key={group.range} className="flex flex-col items-center h-full justify-end group">
                    <div className="font-mono text-[11px] font-bold text-[#0F1F2E] mb-1.5">
                      {group.count.toLocaleString()}
                    </div>
                    <div className="font-mono text-[10px] text-slate-500 mb-2 font-medium">
                      {group.pct.toFixed(1)}%
                    </div>
                    <div className="w-full relative flex items-end justify-center" style={{ height: `${heightPct}%` }}>
                      <div
                        className={`w-full rounded-t-md transition-all duration-300 ${
                          group.eligible
                            ? group.range === '180–364 days'
                              ? 'bg-sky-700 group-hover:bg-sky-800'
                              : 'bg-sky-600/80 group-hover:bg-sky-700'
                            : 'bg-slate-300 border border-slate-300'
                        }`}
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <div className="font-mono text-xs font-semibold text-slate-800">{group.range}</div>
                      <div className={`text-[10px] font-mono mt-0.5 font-medium ${group.eligible ? 'text-sky-800' : 'text-rose-700'}`}>
                        {group.eligible ? 'Eligible' : 'Excluded (<90d)'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Age Distribution Legend & Descriptive Stats */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-xs bg-slate-300 border border-slate-400"></span>
                  <span>Immature Excluded (&lt;90 days: 78,254 rows)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-xs bg-sky-700"></span>
                  <span>Mature Eligible (&ge;90 days: 251,059 rows)</span>
                </span>
              </div>
              <div className="text-slate-500 text-[11px]">
                Observed Decision Age: Min {IMPRESSIONS_DISTRIBUTION.decisionTimeAge.min}d • Mean {IMPRESSIONS_DISTRIBUTION.decisionTimeAge.mean}d • Max {IMPRESSIONS_DISTRIBUTION.decisionTimeAge.max}d
              </div>
            </div>
          </div>
        </div>

        {/* CHART 3: Observed Future Decline Distribution (Vertical Column Chart) */}
        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">Chart 3 — Target Distribution</span>
              <h3 className="text-lg font-semibold text-[#0F1F2E] mt-0.5">Observed Future Decline Distribution</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Target-observable pages (N = 41,863) with verified later-period outcomes across 28 clients.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Binary Ground-Truth Formulation</span>
            </div>
          </div>

          {/* Formal Target Definition Box */}
          <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-4 text-xs sm:text-sm text-slate-700 mb-6">
            <span className="font-semibold text-[#0F1F2E]">Target Formulation Rule: </span>
            <span className="text-slate-600">{TARGET_STATS.definition}</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 items-end">
            {/* Vertical Column Chart for the Two Target Categories */}
            <div className="lg:col-span-6 rounded-lg border border-slate-200 bg-[#F3F7F8] p-6 shadow-2xs">
              <div className="text-xs font-mono text-slate-500 mb-4 flex justify-between">
                <span>Observed Decline vs Non-Decline</span>
                <span>N = 41,863</span>
              </div>

              <div className="grid grid-cols-2 gap-6 items-end h-48 pt-2">
                {/* Column 1: Declining */}
                <div className="flex flex-col items-center h-full justify-end">
                  <div className="font-mono text-base font-bold text-rose-700 mb-1">
                    {TARGET_STATS.declining.toLocaleString()}
                  </div>
                  <div className="font-mono text-xs text-rose-800 font-semibold mb-2">
                    54.81%
                  </div>
                  <div className="w-full relative flex items-end justify-center h-32">
                    <div
                      className="w-full rounded-t-md bg-rose-600 transition-all duration-300"
                      style={{ height: '100%' }}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="font-mono text-xs font-bold text-[#0F1F2E]">Declining</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">Label = 1</div>
                  </div>
                </div>

                {/* Column 2: Not Declining */}
                <div className="flex flex-col items-center h-full justify-end">
                  <div className="font-mono text-base font-bold text-emerald-700 mb-1">
                    {TARGET_STATS.nonDeclining.toLocaleString()}
                  </div>
                  <div className="font-mono text-xs text-emerald-800 font-semibold mb-2">
                    45.19%
                  </div>
                  <div className="w-full relative flex items-end justify-center h-32">
                    <div
                      className="w-full rounded-t-md bg-slate-500 transition-all duration-300"
                      style={{ height: `${(TARGET_STATS.nonDeclining / TARGET_STATS.declining) * 100}%` }}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="font-mono text-xs font-bold text-[#0F1F2E]">Not Declining</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">Label = 0</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex justify-between">
                <span>Rule: Impressions_later &le; 0.80 &times; March</span>
                <span className="text-emerald-700 font-medium">Verified Ground Truth</span>
              </div>
            </div>

            {/* Target Telemetry Distribution Summary Card */}
            <div className="lg:col-span-6 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-4">
                <div className="text-xs font-mono text-sky-800 font-semibold uppercase tracking-wider mb-2">
                  Observed Telemetry Windows
                </div>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="rounded border border-slate-200 bg-white p-2.5 shadow-2xs">
                    <div className="text-slate-500 text-[10px]">March Baseline Impressions</div>
                    <div className="text-[#0F1F2E] font-bold mt-1">Mean: {IMPRESSIONS_DISTRIBUTION.march.mean.toLocaleString()}</div>
                    <div className="text-slate-600 text-[11px]">Median: {IMPRESSIONS_DISTRIBUTION.march.median.toLocaleString()}</div>
                    <div className="text-slate-500 text-[10px] mt-0.5">Range: {IMPRESSIONS_DISTRIBUTION.march.min} – {IMPRESSIONS_DISTRIBUTION.march.max.toLocaleString()}</div>
                  </div>

                  <div className="rounded border border-slate-200 bg-white p-2.5 shadow-2xs">
                    <div className="text-slate-500 text-[10px]">April Evaluation Impressions</div>
                    <div className="text-[#0F1F2E] font-bold mt-1">Mean: {IMPRESSIONS_DISTRIBUTION.april.mean.toLocaleString()}</div>
                    <div className="text-slate-600 text-[11px]">Median: {IMPRESSIONS_DISTRIBUTION.april.median.toLocaleString()}</div>
                    <div className="text-slate-500 text-[10px] mt-0.5">Range: {IMPRESSIONS_DISTRIBUTION.april.min} – {IMPRESSIONS_DISTRIBUTION.april.max.toLocaleString()}</div>
                  </div>
                </div>

                <div className="mt-3 rounded border border-slate-200 bg-white p-2.5 font-mono text-xs shadow-2xs">
                  <div className="flex justify-between items-center text-slate-700">
                    <span>Overall Impression Change Rate:</span>
                    <span className="text-rose-700 font-bold">Mean: {IMPRESSIONS_DISTRIBUTION.changePct.mean}%</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-500 mt-1">
                    <span>Median Change: {IMPRESSIONS_DISTRIBUTION.changePct.median}%</span>
                    <span>Range: {IMPRESSIONS_DISTRIBUTION.changePct.min}% to +{IMPRESSIONS_DISTRIBUTION.changePct.max}%</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-600 leading-relaxed shadow-2xs">
                <span className="font-semibold text-[#0F1F2E]">Balanced Target Prevalence: </span>
                With 54.81% positive prevalence across the 41,863 observable pages, the target maintains natural balance without synthetic re-sampling or artificial SMOTE generation, preserving real-world SERP variance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

