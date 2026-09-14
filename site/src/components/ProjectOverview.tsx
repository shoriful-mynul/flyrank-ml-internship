import { AlertCircle, Layers, Users, TrendingDown, Target, Lightbulb } from 'lucide-react';

export default function ProjectOverview() {
  return (
    <section id="overview" className="border-b border-slate-200 bg-[#F3F7F8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>01</span>
            <span>/</span>
            <span>Executive Context</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Project Overview &amp; Problem Statement
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Content-driven organizations manage massive catalogs of mature web pages. Over time, pages inevitably experience organic visibility decay due to SERP intent shifts, competitive displacement, and outdated information. Addressing this decay requires an intelligent, scalable prioritization mechanism.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Card 1: The Challenge */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-rose-200 bg-rose-50 text-rose-700 mb-4">
              <TrendingDown className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-[#0F1F2E]">The Content Decay Problem</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              As web content ages past its initial publication spike, search algorithms recalibrate rankings based on evolving query intents, new competitor assets, and user behavioral feedback. Without timely maintenance, high-value pages slowly lose search discoverability.
            </p>
          </div>

          {/* Card 2: The Bottleneck */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-amber-200 bg-amber-50 text-amber-700 mb-4">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-[#0F1F2E]">The Editorial Capacity Bottleneck</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Enterprise sites often maintain tens or hundreds of thousands of published articles. Editorial teams have finite weekly review capacity (e.g., 20 to 50 URLs). Manually combing through analytics dashboards to spot pages at risk of decline is inefficient and unscalable.
            </p>
          </div>

          {/* Card 3: The ML Solution */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-sky-200 bg-sky-50 text-sky-800 mb-4">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-[#0F1F2E]">Prioritization as an ML Objective</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Rather than attempting to forecast exact SERP rankings, the system treats content maintenance as a risk-ranking prioritization task: estimating the likelihood that a mature page will suffer a meaningful visibility drop in the subsequent evaluation window.
            </p>
          </div>
        </div>

        {/* Heuristic vs ML Deep Dive Box */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">Methodological Comparison</span>
              <h3 className="text-lg font-semibold text-[#0F1F2E] mt-1">Heuristic Baseline vs. ML Prioritization</h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-600 bg-[#F3F7F8] px-3 py-1 rounded border border-slate-200">
              <span className="h-2 w-2 rounded-full bg-sky-700"></span>
              Supervised Risk Modeling vs Rule-Based Thresholds
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-lg border border-slate-200 bg-[#F3F7F8] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                Conventional Heuristic Approaches
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span><strong>Interaction limits:</strong> Simple heuristics can miss interactions among visibility, engagement, content age, and other page-level signals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span><strong>Triage inefficiency:</strong> Rule-based thresholds can surface low-value or noisy pages when used without multivariate context.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span><strong>Heuristic baseline performance:</strong> The heuristic baseline achieved <strong>40% Precision@50</strong>, below the 50.08% positive prevalence of the held-out test cohort (lift of 0.7988).</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-lg border border-sky-200 bg-sky-50/40 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-sky-900">
                <Lightbulb className="h-4 w-4 text-sky-700" />
                The Machine Learning Prioritization Approach
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-sky-600">•</span>
                  <span><strong>Multivariate decision-time feature frame:</strong> Evaluates 22 signals simultaneously spanning search demand, CTR, engagement depth, and content characteristics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600">•</span>
                  <span><strong>Leakage-aware temporal target:</strong> Evaluates whether an impression decline actually manifests in a later window, guarded against data leakage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600">•</span>
                  <span><strong>Observed top-50 improvement:</strong> Random Forest achieved <strong>54% Precision@50</strong> compared with 40% for the heuristic baseline, an improvement of 14 percentage points on the held-out test cohort.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-[#F3F7F8] p-4 text-xs sm:text-sm text-slate-700">
            <span className="font-semibold text-[#0F1F2E]">Final Operational Outcome: </span>
            A structured, ranked export (<span className="font-mono text-sky-800 font-medium">final_content_refresh_ranking.csv</span>) of <strong>41,912</strong> mature pages ordered by estimated decline probability, complete with rule-based diagnostic reason codes and specific recommended actions for content editors.
          </div>
        </div>
      </div>
    </section>
  );
}

