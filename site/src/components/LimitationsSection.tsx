import { AlertTriangle, AlertCircle, ShieldAlert, FileText, CheckCircle2, UserCheck } from 'lucide-react';
import { LIMITATIONS_DATA } from '../data/projectData';

export default function LimitationsSection() {
  return (
    <section id="limitations" className="border-b border-slate-200 bg-[#F3F7F8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rose-800 font-semibold">
            <span>11</span>
            <span>/</span>
            <span>Academic Self-Critique</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Methodological Limitations &amp; Scope Constraints
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            True engineering credibility requires transparent disclosure of experimental constraints. This system is a prioritization prototype, not a black-box oracle. The following factors define the scope and boundaries of the empirical findings.
          </p>
        </div>

        {/* Prominent Disclaimer Banner */}
        <div className="mt-8 rounded-lg border border-rose-200 bg-rose-50 p-5 shadow-2xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-rose-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-rose-900">
                Non-Production Prototype &amp; Imperative for Human Oversight
              </h4>
              <p className="text-xs sm:text-sm text-rose-950/80 leading-relaxed">
                The model outputs are probabilistic risk signals designed to assist editorial teams in triaging high-risk assets. They do not constitute an automated content management system, do not guarantee SEO rank recovery, and have not yet been evaluated in a continuous live A/B production deployment. Human editorial review remains mandatory.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Limitations Grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LIMITATIONS_DATA.map((lim, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-200 bg-white p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 transition"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-slate-500 mb-2">
                  <span>Constraint 0{idx + 1}</span>
                  <span className="text-rose-700 font-medium">Limitation</span>
                </div>
                <h3 className="text-sm font-semibold text-[#0F1F2E]">
                  {lim.title}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {lim.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 font-mono text-[11px] text-slate-500">
                Peer Review Consideration
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

