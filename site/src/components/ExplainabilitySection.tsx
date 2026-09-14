import { ArrowRight, ShieldCheck, CheckCircle2, Sliders, FileText } from 'lucide-react';
import { REASON_CODE_SYSTEM } from '../data/projectData';

export default function ExplainabilitySection() {
  return (
    <section id="explainability" className="border-b border-slate-200 bg-[#F3F7F8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>09</span>
            <span>/</span>
            <span>Interpretability &amp; Workflow</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            From Predictive Probabilities to Editorial Diagnostic Codes
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            A raw probability score is insufficient for an editorial team to take targeted action. To support human review triage, the scoring queue pairs model-estimated decline risk with rule-based diagnostic reason codes and a concrete recommended action.
          </p>
        </div>

        {/* Methodological Non-Causal Grounding Notice */}
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-sky-800 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-[#0F1F2E]">Methodological Non-Causal Distinction</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {REASON_CODE_SYSTEM.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Verified Diagnostic Reason Codes Grid */}
        <div className="mt-8">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-medium">
            Verified Project Diagnostic Reason Codes
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {REASON_CODE_SYSTEM.verifiedReasons.map((reason, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-200 bg-white p-5 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-slate-500 mb-2">
                    <span>Reason Code #{idx + 1}</span>
                    <span className="text-sky-800 font-semibold">Diagnostic Signal</span>
                  </div>

                  <div className="text-base font-bold font-mono text-sky-900">
                    &ldquo;{reason.code}&rdquo;
                  </div>

                  <div className="mt-3 rounded-md bg-[#F3F7F8] p-2.5 border border-slate-200 font-mono text-[11px]">
                    <span className="text-slate-500 block mb-0.5">Trigger Condition:</span>
                    <span className="text-slate-800 font-semibold">{reason.trigger}</span>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-mono text-emerald-700 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Rule-Based Metric Bound</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Recommended Editorial Action Card */}
        <div className="mt-6 rounded-lg border border-sky-200 bg-sky-50/50 p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-200 pb-4 mb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">Prescribed Intervention</span>
              <h3 className="text-lg font-semibold text-[#0F1F2E] mt-0.5">
                Verified Recommended Action
              </h3>
            </div>
            <span className="font-mono text-xs text-sky-900 bg-white border border-sky-200 px-2.5 py-1 rounded font-medium shadow-2xs">
              Standard Editorial Triage
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2.5">
              <ArrowRight className="h-5 w-5 text-sky-800 shrink-0 mt-0.5" />
              <div>
                <div className="text-base font-semibold text-[#0F1F2E]">
                  &ldquo;{REASON_CODE_SYSTEM.verifiedAction.action}&rdquo;
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {REASON_CODE_SYSTEM.verifiedAction.editorialRole}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

