import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import ProblemFormulation from './components/ProblemFormulation';
import DataPipelineFunnel from './components/DataPipelineFunnel';
import FeatureTaxonomy from './components/FeatureTaxonomy';
import LeakageControl from './components/LeakageControl';
import ModelExperiments from './components/ModelExperiments';
import EvaluationPrecisionChart from './components/EvaluationPrecisionChart';
import FinalRankingExplorer from './components/FinalRankingExplorer';
import ExplainabilitySection from './components/ExplainabilitySection';
import ResultsDashboard from './components/ResultsDashboard';
import LimitationsSection from './components/LimitationsSection';
import FutureWork from './components/FutureWork';
import TechStackFooter from './components/TechStackFooter';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F1F2E] selection:bg-sky-100 selection:text-sky-900">
      {/* Top Academic Header */}
      <Header activeSection={activeSection} />

      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Executive Project Overview */}
        <ProjectOverview />

        {/* Section 3: Problem Formulation & Temporal Framing */}
        <ProblemFormulation />

        {/* Section 4: Data Populations & Funnel Progression */}
        <DataPipelineFunnel />

        {/* Section 5: Feature Engineering & Missingness Matrix */}
        <FeatureTaxonomy />

        {/* Section 6: Data Quality & Zero-Leakage Protocols */}
        <LeakageControl />

        {/* Section 7: Supervised Modeling Experiments */}
        <ModelExperiments />

        {/* Section 8: Model Evaluation & Precision@50 Lift */}
        <EvaluationPrecisionChart />

        {/* Section 9: Final Ranking System & Dataset Explorer */}
        <FinalRankingExplorer />

        {/* Section 10: Explainability & Actionable Reason Codes */}
        <ExplainabilitySection />

        {/* Section 11: Quantitative Results Dashboard */}
        <ResultsDashboard />

        {/* Section 12: Rigorous Methodological Limitations */}
        <LimitationsSection />

        {/* Section 13: Future Work & Roadmap */}
        <FutureWork />
      </main>

      {/* Section 14: Tech Stack, Final Takeaway, & Citation Footer */}
      <TechStackFooter />
    </div>
  );
}
