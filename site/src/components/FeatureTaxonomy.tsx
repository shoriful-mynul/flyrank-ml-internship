import { useState } from 'react';
import { Search, Filter, Database, AlertCircle, Sparkles, SlidersHorizontal, Check } from 'lucide-react';
import { ML_FEATURES, MLFeature } from '../data/projectData';

export default function FeatureTaxonomy() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(ML_FEATURES.map(f => f.category)))];

  const filteredFeatures = ML_FEATURES.filter(feature => {
    const matchesCategory = selectedCategory === 'All' || feature.category === selectedCategory;
    const matchesSearch = feature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          feature.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          feature.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="features" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>04</span>
            <span>/</span>
            <span>Feature Engineering &amp; Missingness</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            The 22 Supervised Machine Learning Features
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            The feature frame consolidates 22 engineered features across 12 signal domains spanning Google Search Console, Google Analytics 4, keyword demand indices, and on-page content structures.
          </p>
        </div>

        {/* Feature Overview Summary Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-4 shadow-2xs">
            <div className="text-xs font-mono text-slate-500">Total Modeling Features</div>
            <div className="mt-1 text-2xl font-bold font-mono text-[#0F1F2E]">22 Features</div>
            <div className="mt-1 text-xs text-slate-500">Selected from 34 frame columns</div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-4 shadow-2xs">
            <div className="text-xs font-mono text-slate-500">Signal Domains</div>
            <div className="mt-1 text-2xl font-bold font-mono text-sky-800">12 Categories</div>
            <div className="mt-1 text-xs text-slate-500">SERP, traffic, engagement, metadata</div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-4 shadow-2xs">
            <div className="text-xs font-mono text-slate-500">Highest Feature Missingness</div>
            <div className="mt-1 text-2xl font-bold font-mono text-amber-700">52.29%</div>
            <div className="mt-1 text-xs text-slate-500">Backlinks (imputed in pipeline)</div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-4 shadow-2xs">
            <div className="text-xs font-mono text-slate-500">Preprocessing Standard</div>
            <div className="mt-1 text-2xl font-bold font-mono text-emerald-700">Pipeline-Bound</div>
            <div className="mt-1 text-xs text-slate-500">Zero pre-split imputation leakage</div>
          </div>
        </div>

        {/* CHART 4: Feature Missingness Before Imputation (Horizontal Bar Chart) */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">Chart 4 — Data Quality</span>
              <h3 className="text-lg font-semibold text-[#0F1F2E] mt-0.5">Feature Missingness Before Imputation</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Missing values were handled with training-fitted preprocessing inside sklearn pipelines.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-md font-medium">
              <AlertCircle className="h-3.5 w-3.5 text-amber-700" />
              <span>13 Features with Observable Missingness</span>
            </div>
          </div>

          {/* Horizontal Bar Chart */}
          <div className="space-y-3 pt-2">
            {[
              { name: 'backlinks', missingPct: 52.29, source: 'SEO/SERP' },
              { name: 'engagement_rate_30d', missingPct: 39.49, source: 'GA4' },
              { name: 'word_count', missingPct: 27.34, source: 'Content Metadata' },
              { name: 'char_count', missingPct: 27.34, source: 'Content Metadata' },
              { name: 'pageviews_30d', missingPct: 26.85, source: 'GA4' },
              { name: 'sessions_30d', missingPct: 26.85, source: 'GA4' },
              { name: 'ai_sessions_30d', missingPct: 26.85, source: 'GA4' },
              { name: 'users_30d', missingPct: 26.85, source: 'GA4' },
              { name: 'engaged_sessions_30d', missingPct: 26.85, source: 'GA4' },
              { name: 'scroll_events_30d', missingPct: 26.85, source: 'GA4' },
              { name: 'competition', missingPct: 1.35, source: 'SEO/SERP' },
              { name: 'cpc', missingPct: 1.35, source: 'SEO/SERP' },
              { name: 'search_volume', missingPct: 1.35, source: 'SEO/SERP' },
            ].map((item) => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                <div className="w-48 font-mono text-slate-800 font-medium truncate flex items-center justify-between">
                  <span>{item.name}</span>
                  <span className="text-[10px] text-slate-400 font-sans mr-2">{item.source}</span>
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <div className="flex-1 h-3.5 bg-slate-100 rounded-xs overflow-hidden border border-slate-200">
                    <div
                      className={`h-full transition-all duration-300 ${
                        item.missingPct > 40
                          ? 'bg-rose-600'
                          : item.missingPct > 20
                          ? 'bg-amber-500'
                          : 'bg-sky-700'
                      }`}
                      style={{ width: `${item.missingPct}%` }}
                    />
                  </div>
                  <div className="w-14 text-right font-mono text-xs font-semibold text-slate-700">
                    {item.missingPct.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-600">
            <span>Imputation Strategy: SimpleImputer(strategy=&apos;median&apos;) strictly inside Scikit-learn Pipeline</span>
            <span className="text-emerald-700 font-medium">Zero data leakage across cross-validation splits</span>
          </div>
        </div>

        {/* Missingness Deep-Dive Callout */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-[#F3F7F8] p-6 shadow-2xs">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-700 mt-0.5 shrink-0" />
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#0F1F2E]">Real-World Missingness Profile &amp; Handling</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Messy web analytics inherently feature partial instrument coverage. Missingness was observed across:
                <span className="font-mono text-amber-800 font-medium"> backlinks (52.29%)</span>,
                <span className="font-mono text-amber-800 font-medium"> engagement_rate_30d (39.49%)</span>,
                <span className="font-mono text-amber-800 font-medium"> word_count &amp; char_count (27.34%)</span>,
                <span className="font-mono text-amber-800 font-medium"> GA4 metrics (pageviews, sessions, users, ai_sessions, engaged_sessions, scroll_events at 26.85%)</span>, and
                <span className="font-mono text-amber-800 font-medium"> search_volume, competition, cpc (1.35%)</span>.
                All imputations and transformations were strictly fitted on training splits inside Scikit-learn Pipeline objects to prevent data snooping.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Feature Directory */}
        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search feature by name, source, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white pl-9 pr-4 py-2 text-xs text-[#0F1F2E] placeholder-slate-400 focus:border-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-600"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-mono transition-colors ${
                    selectedCategory === cat
                      ? 'bg-sky-100 text-sky-900 border border-sky-300 font-semibold'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Grid Table */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px] bg-[#F3F7F8]">
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Feature Name</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">Source</th>
                  <th className="py-2.5 px-3">Dtype</th>
                  <th className="py-2.5 px-3">Missingness</th>
                  <th className="py-2.5 px-3">Feature Definition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {filteredFeatures.map((feat) => (
                  <tr key={feat.id} className="hover:bg-[#F3F7F8]/60 transition-colors">
                    <td className="py-2.5 px-3 font-mono text-slate-400">{feat.id}</td>
                    <td className="py-2.5 px-3 font-mono font-medium text-sky-900">
                      {feat.name}
                    </td>
                    <td className="py-2.5 px-3 text-slate-700">
                      <span className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-[11px] font-mono">
                        {feat.category}
                      </span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-mono font-semibold ${
                        feat.source === 'GSC'
                          ? 'bg-blue-50 text-blue-800 border border-blue-200'
                          : feat.source === 'GA4'
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : feat.source === 'SEO/SERP'
                          ? 'bg-purple-50 text-purple-800 border border-purple-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}>
                        {feat.source}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-500 text-[11px]">{feat.dtype}</td>
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[11px] ${
                          feat.missingPct > 30
                            ? 'text-rose-700 font-semibold'
                            : feat.missingPct > 0
                            ? 'text-amber-700'
                            : 'text-slate-400'
                        }`}>
                          {feat.missingPct.toFixed(1)}%
                        </span>
                        {feat.missingPct > 0 && (
                          <div className="hidden sm:block h-1.5 w-12 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${feat.missingPct > 30 ? 'bg-rose-600' : 'bg-amber-500'}`}
                              style={{ width: `${feat.missingPct}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 text-xs leading-relaxed max-w-md">
                      {feat.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
            <span>Showing {filteredFeatures.length} of 22 features</span>
            <span>Decision-Time Feature Frame Shape: 251,059 rows × 34 columns</span>
          </div>
        </div>
      </div>
    </section>
  );
}

