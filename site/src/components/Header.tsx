import { ExternalLink, BookOpen, Code2, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Formulation' },
    { id: 'pipeline', label: 'Data & Pipeline' },
    { id: 'features', label: 'Features' },
    { id: 'leakage', label: 'Leakage Control' },
    { id: 'experiments', label: 'Models' },
    { id: 'evaluation', label: 'Precision@50' },
    { id: 'ranking', label: 'Scored Queue' },
    { id: 'explainability', label: 'Explainability' },
    { id: 'limitations', label: 'Limitations' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      {/* Top micro banner */}
      <div className="border-b border-slate-200 bg-[#F3F7F8] px-4 py-1.5 text-xs text-slate-600">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
            <span className="font-mono text-slate-800 font-medium">FlyRank AI / ML Engineering Internship Capstone</span>
            <span className="hidden text-slate-400 sm:inline">•</span>
            <span className="hidden text-slate-600 sm:inline">Computer Science Capstone Research Showcase</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1 font-mono text-[11px] text-sky-800 md:flex bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              <ShieldAlert className="h-3 w-3 text-sky-700" />
              Decision-Support Prototype
            </span>
            <span className="text-slate-300">|</span>
            <a
              href="https://github.com/shoriful-mynul/flyrank-ml-internship"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-700 transition-colors hover:text-sky-800 hover:underline"
            >
              <Code2 className="h-3 w-3" />
              <span>GitHub</span>
              <ExternalLink className="h-2.5 w-2.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-300 bg-sky-50 text-sky-800 font-mono text-sm font-bold shadow-xs transition-colors group-hover:border-sky-500 group-hover:bg-sky-100">
            ML
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#0F1F2E] group-hover:text-sky-800 transition-colors">
              Google Search Discoverability Intelligence
            </span>
            <span className="font-mono text-[11px] text-slate-500">
              Content Refresh Prioritization System
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isPrecision = item.id === 'evaluation';
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-50 text-sky-900 font-semibold border border-sky-200 shadow-2xs'
                    : isPrecision
                    ? 'text-sky-800 font-semibold bg-sky-50/60 hover:bg-sky-100'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/shoriful-mynul/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            <BookOpen className="h-3.5 w-3.5 text-sky-700" />
            <span>View Notebook</span>
          </a>
          <a
            href="https://github.com/shoriful-mynul/flyrank-ml-internship"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-lg border border-sky-700 bg-sky-700 px-3 py-1.5 text-xs font-medium text-white shadow-2xs transition-colors hover:bg-sky-800"
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Repo</span>
          </a>
        </div>
      </div>
    </header>
  );
}
