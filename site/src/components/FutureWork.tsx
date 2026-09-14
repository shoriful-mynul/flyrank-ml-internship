import { Sparkles, ArrowUpRight, Compass, Cpu, LineChart, FlaskConical, Network } from 'lucide-react';
import { FUTURE_WORK_DATA } from '../data/projectData';

export default function FutureWork() {
  return (
    <section id="future" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>12</span>
            <span>/</span>
            <span>Research Extensions</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Future Work &amp; Algorithmic Roadmap
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            While the current prototype validates that historical decision-time signals produce top-tail ranking lift, several architectural expansions represent high-value subsequent research vectors.
          </p>
        </div>

        {/* Notice on prospective status */}
        <div className="mt-6 font-mono text-xs text-slate-700 bg-[#F3F7F8] border border-slate-200 px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-2xs">
          <Compass className="h-4 w-4 text-sky-800 shrink-0" />
          <span>The following represent planned future research iterations and are not claimed as currently implemented in the primary notebook.</span>
        </div>

        {/* Future Work Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FUTURE_WORK_DATA.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-5 flex flex-col justify-between hover:border-slate-300 hover:bg-slate-100/60 shadow-2xs transition group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-slate-500 mb-2">
                  <span className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[10px] text-sky-900 font-semibold shadow-2xs">
                    {item.category}
                  </span>
                  <span className="text-slate-400">0{idx + 1}</span>
                </div>
                <h3 className="text-sm font-semibold text-[#0F1F2E] group-hover:text-sky-900 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 font-mono text-[11px] text-slate-500 flex items-center justify-between">
                <span>Proposed Expansion</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:text-sky-800 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

