import { Clock, ShieldCheck, ListOrdered, Calendar } from 'lucide-react';
import { PIPELINE_STEPS } from '../data/projectData';

export default function ProblemFormulation() {
  return (
    <section id="problem" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>02</span>
            <span>/</span>
            <span>Mathematical &amp; Temporal Framing</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Problem Formulation &amp; Temporal Architecture
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Content prioritization requires strict temporal integrity. A model that looks into future search traffic creates false expectations. The system is formulated around a fixed decision time T₀, projecting forward to an observable later performance window.
          </p>
        </div>

        {/* Temporal Split Diagram */}
        <div className="mt-10 rounded-lg border border-slate-200 bg-[#F3F7F8] p-6 sm:p-8 shadow-xs">
          <h3 className="text-base font-semibold text-[#0F1F2E] mb-2">Temporal State Machine &amp; Boundary</h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Features are strictly computed from data generated prior to or at decision time T₀. The target label is independently derived from the subsequent performance window.
          </p>

          <div className="grid gap-4 md:grid-cols-4 relative">
            {/* Box 1: Pre-Decision History */}
            <div className="rounded-lg border border-slate-200 bg-white p-4 relative shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono text-sky-800 font-semibold mb-2">
                <span>Phase A: Historical Window</span>
                <Calendar className="h-3.5 w-3.5 text-sky-700" />
              </div>
              <div className="text-sm font-semibold text-[#0F1F2E]">Historical Telemetry</div>
              <div className="mt-1 font-mono text-xs text-slate-500">Range: T₀ - 30d to T₀</div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                GSC impressions, clicks, CTR, average position, GA4 sessions, engaged sessions, scroll events, backlinks, and content age.
              </p>
            </div>

            {/* Box 2: Decision Point T0 */}
            <div className="rounded-lg border border-sky-300 bg-sky-50/50 p-4 relative shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono text-sky-900 font-semibold mb-2">
                <span>Phase B: Decision Cutoff</span>
                <Clock className="h-3.5 w-3.5 text-sky-700" />
              </div>
              <div className="text-sm font-semibold text-sky-950">Decision Point T₀</div>
              <div className="mt-1 font-mono text-xs text-sky-800 font-medium">Eligibility: Age &ge; 90d (95–494d observed)</div>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                Exclude future-dated records (2,124 rows) and immature assets &lt;90d (78,254 rows), retaining 251,059 mature pages.
              </p>
            </div>

            {/* Box 3: Evaluation Window */}
            <div className="rounded-lg border border-slate-200 bg-white p-4 relative shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-800 font-semibold mb-2">
                <span>Phase C: Target Window</span>
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              </div>
              <div className="text-sm font-semibold text-[#0F1F2E]">Later Performance Window</div>
              <div className="mt-1 font-mono text-xs text-slate-500">Target: Impr &le; 80% of baseline</div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Among 41,863 target-observable pages, 54.81% (22,945) satisfied the decline rule. No target leakage was detected in the audited feature pipeline after temporal boundary and future-dated metadata checks.
              </p>
            </div>

            {/* Box 4: Output Action */}
            <div className="rounded-lg border border-slate-200 bg-white p-4 relative shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono text-indigo-800 font-semibold mb-2">
                <span>Phase D: Editorial Action</span>
                <ListOrdered className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <div className="text-sm font-semibold text-[#0F1F2E]">Ranked Queue &amp; Reason Codes</div>
              <div className="mt-1 font-mono text-xs text-slate-500">Output: p_hat &isin; [0.08, 0.93]</div>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Order mature pages by decline probability p_hat descending. Assign rule-based diagnostic flags and dispatch for human editorial review.
              </p>
            </div>
          </div>

          {/* Mathematical Card */}
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 font-mono text-xs text-slate-700 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2 mb-2 text-slate-500">
              <span className="font-semibold text-slate-900">Formal Optimization Framework</span>
              <span className="text-sky-800 font-medium">Supervised Ranking Objective</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 text-[11px] sm:text-xs">
              <div>
                <span className="text-sky-800 font-semibold">Input Vector X_i &isin; &Ropf;²²:</span> Feature frame at decision time T₀ across 22 decision-time signals.
              </div>
              <div>
                <span className="text-sky-800 font-semibold">Ground Truth Y_i &isin; &#123;0, 1&#125;:</span> 1 if page i suffers measurable later-period impression drop, 0 otherwise.
              </div>
              <div>
                <span className="text-sky-800 font-semibold">Model Function f(X_i) &rarr; p_hat:</span> Estimated probability of decline p_hat = P(Y_i = 1 | X_i).
              </div>
              <div>
                <span className="text-sky-800 font-semibold">Ordering Function &pi;(i):</span> Permutation sorting pages such that p_hat_1 &ge; p_hat_2 &ge; ... &ge; p_hat_N.
              </div>
            </div>
          </div>
        </div>

        {/* 17-Step Engineering Pipeline */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">End-to-End Execution</span>
              <h3 className="text-lg font-semibold text-[#0F1F2E]">The 17-Step Machine Learning Pipeline</h3>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-slate-500">17 sequential validation milestones</span>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {PIPELINE_STEPS.map((item) => (
              <div
                key={item.step}
                className="group rounded-lg border border-slate-200 bg-[#F3F7F8] p-3.5 transition hover:border-slate-300 hover:bg-white hover:shadow-2xs"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white font-mono text-xs font-bold text-sky-800 border border-slate-200 group-hover:border-sky-300 group-hover:bg-sky-50">
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="text-xs font-semibold text-[#0F1F2E]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

