import { ExternalLink, ArrowDown, FileText, CheckCircle2, ShieldCheck, Database, BarChart3, Binary, User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative border-b border-slate-200 bg-white py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Research badges & Context metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-600"></span>
            FlyRank ML Engineering Capstone
          </span>
          <span className="inline-flex items-center rounded-md border border-slate-200 bg-[#F3F7F8] px-3 py-1 text-xs font-mono text-slate-700">
            Machine Learning Engineering
          </span>
          <span className="inline-flex items-center rounded-md border border-slate-200 bg-[#F3F7F8] px-3 py-1 text-xs font-mono text-slate-700">
            SEO &amp; Discoverability Intelligence
          </span>
          <span className="inline-flex items-center rounded-md border border-slate-200 bg-[#F3F7F8] px-3 py-1 text-xs font-mono text-slate-700">
            Top-Tail Prioritization
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0F1F2E] sm:text-5xl sm:leading-[1.15]">
            Google Search Ranking &amp; Discoverability Intelligence
          </h1>
          <p className="mt-4 text-lg text-slate-600 sm:text-xl sm:leading-relaxed font-normal">
            Content Refresh Prioritization System: An ML-powered decision-support prototype for identifying mature web pages at higher risk of future measurable search-performance decline.
          </p>
        </div>

        {/* Author Metadata Line */}
        <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-600 border-y border-slate-200/80 py-3 font-mono">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4 text-slate-400" />
            <span>
              Author:{' '}
              <a
                href="https://www.linkedin.com/in/shoriful2007"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-800 hover:text-sky-950 underline decoration-sky-300 hover:decoration-sky-600 transition-colors"
              >
                Shoriful Islam
              </a>
            </span>
          </div>
          <div className="hidden sm:inline text-slate-300">•</div>
          <div>
            <span className="text-slate-500">Dataset Context:</span>{' '}
            <span className="text-slate-800 font-medium">28 GSC Client Properties</span>
          </div>
          <div className="hidden sm:inline text-slate-300">•</div>
          <div>
            <span className="text-slate-500">Temporal Framing:</span>{' '}
            <span className="text-slate-800">March 2026 Decision → April 2026 Evaluation</span>
          </div>
        </div>

        {/* Framing & Integrity Callout */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-[#F3F7F8] p-4 sm:p-5 text-sm text-slate-700">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-sky-700 mt-0.5 shrink-0" />
            <div className="space-y-1">
              <span className="font-semibold text-[#0F1F2E]">System Intent &amp; Methodological Boundary:</span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This project builds a machine-learning-based decision-support prototype that ranks existing mature web pages by estimated likelihood of future measurable search-performance decline, so editorial teams can prioritize which pages to review and potentially refresh first. It does <strong className="text-slate-900 font-semibold">not</strong> reverse-engineer or predict Google’s exact ranking algorithm, guarantee ranking changes or traffic recovery, automatically alter content, or replace human editorial judgment.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/shoriful-mynul/flyrank-ml-internship"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
          >
            <Binary className="h-4 w-4" />
            <span>View GitHub Repository</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-80" />
          </a>

          <a
            href="#overview"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-2xs transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <FileText className="h-4 w-4 text-sky-700" />
            <span>Read Technical Case Study</span>
            <ArrowDown className="h-3.5 w-3.5 text-slate-400" />
          </a>

          <a
            href="https://github.com/shoriful-mynul/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-[#F3F7F8] px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
          >
            <span className="font-mono text-xs">work/notebooks/capstone.ipynb</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>

        {/* Empirical Results Keycard Bar */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Final Scoring Queue</span>
              <Database className="h-3.5 w-3.5 text-sky-700" />
            </div>
            <div className="mt-2 text-2xl font-bold font-mono text-[#0F1F2E] sm:text-3xl">41,912</div>
            <div className="mt-1 text-xs text-slate-500">Pages ranked by decline risk</div>
          </div>

          <div className="rounded-lg border border-sky-200 bg-sky-50/50 p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-sky-800 font-semibold">
              <span>Precision@50 (RF)</span>
              <BarChart3 className="h-3.5 w-3.5 text-sky-700" />
            </div>
            <div className="mt-2 text-2xl font-bold font-mono text-sky-900 sm:text-3xl">54.0%</div>
            <div className="mt-1 text-xs text-sky-700 font-medium">+14 pp vs. 40.0% heuristic</div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Feature Space</span>
              <Binary className="h-3.5 w-3.5 text-slate-500" />
            </div>
            <div className="mt-2 text-2xl font-bold font-mono text-[#0F1F2E] sm:text-3xl">22</div>
            <div className="mt-1 text-xs text-slate-500">ML features across 12 domains</div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Leakage Guard</span>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            </div>
            <div className="mt-2 text-2xl font-bold font-mono text-emerald-700 sm:text-3xl">0</div>
            <div className="mt-1 text-xs text-slate-500">Client domain test overlap</div>
          </div>
        </div>
      </div>
    </section>
  );
}

