import { ExternalLink, Code2, BookOpen, Terminal, CheckCircle2, Heart } from 'lucide-react';
import { TECH_STACK } from '../data/projectData';

export default function TechStackFooter() {
  return (
    <footer className="bg-white text-slate-600">
      {/* Final Takeaway Callout */}
      <div className="border-b border-slate-200 bg-[#F3F7F8] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white px-3 py-1 text-xs font-mono text-sky-900 mb-4 shadow-2xs font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-sky-700" />
            <span>Capstone Conclusion</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#0F1F2E] sm:text-3xl">
            Final Project Takeaway
          </h2>
          <blockquote className="mt-6 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 text-base sm:text-lg text-[#0F1F2E] font-medium leading-relaxed italic shadow-xs">
            &ldquo;The project demonstrates how messy web-performance data can be transformed into a leakage-aware machine-learning workflow that produces ranked, explainable, and actionable content-refresh recommendations.&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/shoriful-mynul/flyrank-ml-internship"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-[#0F1F2E] px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 shadow-xs"
            >
              <Code2 className="h-4 w-4" />
              <span>Explore GitHub Repository</span>
              <ExternalLink className="h-3 w-3 text-slate-300" />
            </a>

            <a
              href="https://github.com/shoriful-mynul/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 shadow-2xs"
            >
              <BookOpen className="h-4 w-4 text-sky-800" />
              <span>work/notebooks/capstone.ipynb</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div id="tech-stack" className="border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold">
              <span>13</span>
              <span>/</span>
              <span>Engineering Environment</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-[#0F1F2E] sm:text-2xl">
              Authentic Capstone Tech Stack
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Only libraries and systems actively used in the data pipeline and modeling experiments are listed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="rounded-lg border border-slate-200 bg-[#F3F7F8] p-3 text-center flex flex-col justify-between hover:border-slate-300 shadow-2xs transition"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-[#0F1F2E]">{tech.name}</div>
                  <div className="mt-1 text-[10px] font-mono text-sky-800 font-medium">{tech.type}</div>
                </div>
                <div className="mt-2 text-[10px] text-slate-500 leading-tight">
                  {tech.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Legal / Attribution */}
      <div className="bg-[#0F1F2E] py-8 text-xs font-mono text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-semibold text-slate-200">FlyRank AI / ML Engineering Internship Capstone</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>By <a href="https://www.linkedin.com/in/shoriful2007" target="_blank" rel="noreferrer noopener" className="text-sky-300 underline underline-offset-2 hover:text-white transition-colors">Shoriful Islam</a></span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Research Showcase</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/shoriful-mynul/flyrank-ml-internship"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-sky-300 transition-colors"
            >
              GitHub Repo
            </a>
            <span>•</span>
            <a
              href="https://github.com/shoriful-mynul/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-sky-300 transition-colors"
            >
              Jupyter Notebook
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/shoriful2007"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-sky-300 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

