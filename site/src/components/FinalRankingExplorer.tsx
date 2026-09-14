import { useState } from 'react';
import { CheckCircle2, FileSpreadsheet, ShieldCheck, Database, Table, AlertCircle, Info } from 'lucide-react';
import { SAMPLE_RANKED_PAGES, FINAL_VERIFICATION_CHECKS } from '../data/projectData';

export default function FinalRankingExplorer() {
  const [activeTab, setActiveTab] = useState<'verifiedRows' | 'canonicalSchema'>('verifiedRows');

  const schemaColumns = [
    { col: 'rank', dtype: 'int64', role: 'Sequential priority ordering (1 to 41,912)' },
    { col: 'client_hash', dtype: 'string', role: 'Anonymized client property identifier' },
    { col: 'content_hash', dtype: 'string', role: 'Anonymized URL / content item primary key' },
    { col: 'decline_probability', dtype: 'float64', role: 'Estimated decline probability p_hat ∈ [0.0842, 0.9288]' },
    { col: 'impressions_30d', dtype: 'int64', role: 'Search impressions over 30-day decision window' },
    { col: 'clicks_30d', dtype: 'int64', role: 'Organic clicks over 30-day decision window' },
    { col: 'ctr_30d', dtype: 'float64', role: 'Historical Click-Through Rate (clicks / impressions)' },
    { col: 'weighted_avg_position_30d', dtype: 'float64', role: 'Impression-weighted average ranking position' },
    { col: 'content_age_days', dtype: 'int64', role: 'Days since published (mature content ≥ 90d)' },
    { col: 'reason_codes', dtype: 'string (list)', role: 'Rule-based diagnostic signals triggered at T₀' },
    { col: 'recommended_action', dtype: 'string', role: 'Prescribed editorial action recommendation' },
  ];

  return (
    <section id="ranking" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>08</span>
            <span>/</span>
            <span>Prioritization Queue &amp; Schema</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Final Content Refresh Ranking &amp; Output Verification
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            The trained Random Forest prototype was applied across the final scoring population of <strong>41,912</strong> mature pages. The output (<span className="font-mono text-sky-900 font-medium">final_content_refresh_ranking.csv</span>) provides a prioritized triage queue sorted in strict descending order of decline risk.
          </p>
        </div>

        {/* Summary Verification Manifest Card */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-[#F3F7F8] p-6 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-5">
            <div className="flex items-center gap-2.5">
              <FileSpreadsheet className="h-5 w-5 text-sky-800" />
              <div>
                <h3 className="text-sm font-semibold text-[#0F1F2E]">Summary Verification: final_content_refresh_ranking.csv</h3>
                <span className="font-mono text-xs text-slate-500">41,912 Scored Pages × 11 Canonical Columns</span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>All 8 Quality Gates Verified</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 font-mono text-xs">
            <div className="rounded-md bg-white p-2.5 border border-slate-200 shadow-2xs">
              <div className="text-slate-500 text-[10px]">Total Scored</div>
              <div className="text-[#0F1F2E] font-bold">{FINAL_VERIFICATION_CHECKS.totalScoredPages.toLocaleString()}</div>
            </div>
            <div className="rounded-md bg-white p-2.5 border border-slate-200 shadow-2xs">
              <div className="text-slate-500 text-[10px]">Rank Sequence</div>
              <div className="text-emerald-700 font-semibold">1 to 41,912</div>
            </div>
            <div className="rounded-md bg-white p-2.5 border border-slate-200 shadow-2xs">
              <div className="text-slate-500 text-[10px]">Max Prob (Rank 1)</div>
              <div className="text-sky-900 font-bold">{FINAL_VERIFICATION_CHECKS.maxProbability.toFixed(4)}</div>
            </div>
            <div className="rounded-md bg-white p-2.5 border border-slate-200 shadow-2xs">
              <div className="text-slate-500 text-[10px]">Min Prob (Tail)</div>
              <div className="text-slate-600 font-bold">{FINAL_VERIFICATION_CHECKS.minProbability.toFixed(4)}</div>
            </div>
            <div className="rounded-md bg-white p-2.5 border border-slate-200 shadow-2xs">
              <div className="text-slate-500 text-[10px]">Duplicate Pairs</div>
              <div className="text-emerald-700 font-semibold">0 Duplicates</div>
            </div>
            <div className="rounded-md bg-white p-2.5 border border-slate-200 shadow-2xs">
              <div className="text-slate-500 text-[10px]">Missing Probs</div>
              <div className="text-emerald-700 font-semibold">0 Missing</div>
            </div>
            <div className="rounded-md bg-white p-2.5 border border-slate-200 shadow-2xs">
              <div className="text-slate-500 text-[10px]">Out of Bounds</div>
              <div className="text-emerald-700 font-semibold">0 Invalid</div>
            </div>
            <div className="rounded-md bg-white p-2.5 border border-slate-200 shadow-2xs">
              <div className="text-slate-500 text-[10px]">Sort Order</div>
              <div className="text-emerald-700 font-semibold">Strict Desc</div>
            </div>
          </div>
        </div>

        {/* View Toggle Bar */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('verifiedRows')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-mono font-semibold transition ${
                activeTab === 'verifiedRows'
                  ? 'bg-sky-100 text-sky-900 border border-sky-300'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Verified Top Ranks (Project Results)
            </button>
            <button
              onClick={() => setActiveTab('canonicalSchema')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-mono font-semibold transition ${
                activeTab === 'canonicalSchema'
                  ? 'bg-sky-100 text-sky-900 border border-sky-300'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              11-Column Canonical Schema
            </button>
          </div>

          <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5 text-sky-700" />
            <span>Strict data audit: no placeholder or fabricated rows</span>
          </div>
        </div>

        {/* Tab 1: Verified Top Ranks Table */}
        {activeTab === 'verifiedRows' && (
          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            {/* Explicit Notice */}
            <div className="mb-4 rounded-md border border-slate-200 bg-[#F3F7F8] p-3.5 text-xs text-slate-700">
              <strong className="text-[#0F1F2E]">Audit &amp; Authenticity Notice:</strong> Row-level examples displayed below are limited strictly to verified top ranks from the project results. No row-level values or fields are fabricated. Content identifiers are anonymized.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#F3F7F8] text-slate-500 font-mono text-[11px]">
                    <th className="py-2.5 px-3">Priority Rank</th>
                    <th className="py-2.5 px-3 text-right">Decline Prob</th>
                    <th className="py-2.5 px-3 text-right">30d Impr</th>
                    <th className="py-2.5 px-3 text-right">30d Clicks</th>
                    <th className="py-2.5 px-3 text-right">CTR</th>
                    <th className="py-2.5 px-3 text-right">Avg Position</th>
                    <th className="py-2.5 px-3 text-right">Age (Days)</th>
                    <th className="py-2.5 px-3">Diagnostic Reason Codes</th>
                    <th className="py-2.5 px-3">Recommended Editorial Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {SAMPLE_RANKED_PAGES.map((page) => (
                    <tr key={page.priorityRank} className="hover:bg-[#F3F7F8]/60 transition-colors">
                      <td className="py-3 px-3 font-mono">
                        <span className="inline-flex items-center justify-center rounded px-2 py-0.5 text-xs font-bold bg-rose-50 text-rose-800 border border-rose-200">
                          #{page.priorityRank}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right font-mono font-bold text-rose-700">
                        {page.declineProbability.toFixed(4)}
                      </td>
                      <td className="py-3 px-3 text-right font-mono text-slate-700">{page.impressions30d.toLocaleString()}</td>
                      <td className="py-3 px-3 text-right font-mono text-slate-700">{page.clicks30d.toLocaleString()}</td>
                      <td className="py-3 px-3 text-right font-mono text-slate-700">{(page.ctr30d * 100).toFixed(2)}%</td>
                      <td className="py-3 px-3 text-right font-mono text-slate-700">{page.weightedAvgPosition30d.toFixed(4)}</td>
                      <td className="py-3 px-3 text-right font-mono text-slate-500">{page.contentAgeDays}</td>
                      <td className="py-3 px-3">
                        <div className="flex flex-wrap gap-1">
                          {page.reasonCodes.map((rc, i) => (
                            <span key={i} className="rounded bg-sky-50 px-2 py-0.5 text-[10px] font-mono text-sky-900 border border-sky-200 font-medium">
                              {rc}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-slate-700 text-xs font-medium max-w-xs leading-relaxed">
                        {page.recommendedAction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500">
              Showing verified top-rank items from the 41,912 scored population. Probabilities range from 0.9288 down to 0.0842 at the tail.
            </div>
          </div>
        )}

        {/* Tab 2: Canonical Schema Table */}
        {activeTab === 'canonicalSchema' && (
          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#F3F7F8] text-slate-500 text-[11px]">
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">Column Name</th>
                    <th className="py-2.5 px-3">Data Type</th>
                    <th className="py-2.5 px-3">Operational Role &amp; Bounds</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {schemaColumns.map((col, idx) => (
                    <tr key={col.col} className="hover:bg-[#F3F7F8]/60 transition-colors">
                      <td className="py-3 px-3 text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-3 font-semibold text-sky-900">{col.col}</td>
                      <td className="py-3 px-3 text-slate-600">
                        <span className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px]">{col.dtype}</span>
                      </td>
                      <td className="py-3 px-3 font-sans text-slate-700">{col.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

