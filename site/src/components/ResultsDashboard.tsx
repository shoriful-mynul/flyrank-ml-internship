import { CheckCircle2, Award, Database, Layers, ShieldCheck, Binary, Sliders } from 'lucide-react';

export default function ResultsDashboard() {
  const kpis = [
    {
      label: 'Ranked Operational Population',
      value: '41,912',
      unit: 'pages',
      subtext: 'Mature eligible pages scored and ranked (p = 0.9288 to 0.0842)',
      icon: Database,
      color: 'text-[#0F1F2E]',
      badge: '100% Scored'
    },
    {
      label: 'Random Forest Precision@50',
      value: '54.0%',
      unit: 'precision',
      subtext: 'Top-50 decline prioritization precision on unseen clients',
      icon: Award,
      color: 'text-sky-900',
      badge: '+14 percentage points vs. Heuristic'
    },
    {
      label: 'Heuristic Baseline Precision@50',
      value: '40.0%',
      unit: 'precision',
      subtext: 'Conventional rule-based scoring benchmark',
      icon: Sliders,
      color: 'text-slate-700',
      badge: 'Rule-Based Benchmark'
    },
    {
      label: 'Supervised ML Feature Space',
      value: '22',
      unit: 'features',
      subtext: 'Selected features across GSC, GA4, & SEO domains',
      icon: Binary,
      color: 'text-[#0F1F2E]',
      badge: 'Decision-Time Signals'
    },
    {
      label: 'Client Overlap in Test Split',
      value: '0',
      unit: 'clients',
      subtext: '22 training vs 6 held-out test clients with zero overlap',
      icon: ShieldCheck,
      color: 'text-emerald-700',
      badge: 'Audited'
    },
    {
      label: 'Missing Decline Probabilities',
      value: '0',
      unit: 'nulls',
      subtext: 'All 41,912 scored pages received a valid decline probability',
      icon: CheckCircle2,
      color: 'text-emerald-700',
      badge: 'Audited'
    },
    {
      label: 'Invalid Probability Bounds',
      value: '0',
      unit: 'exceptions',
      subtext: 'All predictions strictly bound within [0.0, 1.0]',
      icon: CheckCircle2,
      color: 'text-emerald-700',
      badge: 'Audited'
    },
    {
      label: 'Duplicate Client-Page Pairs',
      value: '0',
      unit: 'duplicates',
      subtext: 'Unique primary keys verified across all 41,912 rows',
      icon: CheckCircle2,
      color: 'text-emerald-700',
      badge: 'Audited'
    },
  ];

  return (
    <section id="results" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
            <span>10</span>
            <span>/</span>
            <span>Empirical Synthesis</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Project Results &amp; Integrity Dashboard
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Consolidated verification metrics demonstrating mathematical completeness, client containment, and ranking lift across the operational pipeline.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div
                key={idx}
                className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-5 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                    <span className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[10px] text-slate-700 font-medium shadow-2xs">
                      {kpi.badge}
                    </span>
                    <Icon className="h-4 w-4 text-sky-800" />
                  </div>
                  <div className={`text-3xl font-extrabold font-mono tracking-tight ${kpi.color}`}>
                    {kpi.value}
                  </div>
                  <div className="mt-1.5 text-xs font-semibold text-[#0F1F2E]">
                    {kpi.label}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-600 leading-relaxed">
                  {kpi.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

