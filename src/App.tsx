'use client';

import React from 'react';
import { useScrollEngine } from './hooks/useScrollEngine';
import { CrossRevealLoader } from './components/CrossRevealLoader';
import { TechnicalNotebookBackground } from './components/background/TechnicalNotebookBackground';
import { PaperGrain } from './components/analog/PaperGrain';
import { SiteNavigation } from './components/SiteNavigation';
import { EditorialCover } from './components/EditorialCover';
import { ProjectTimeline } from './components/ProjectTimeline';
import { QuotationPlatformExplainer } from './components/QuotationPlatformExplainer';
import { EnterpriseChatbotExplainer } from './components/EnterpriseChatbotExplainer';
import { DocumentIntelligenceMLOpsExplainer } from './components/DocumentIntelligenceMLOpsExplainer';
import { AiQualitySection } from './components/AiQualitySection';
import { ExperienceSection } from './components/ExperienceSection';
import { AiStackSection } from './components/AiStackSection';
import { EndCard } from './components/EndCard';

export function App() {
  // Activate centralized scroll engine (single rAF loop, smooth follow, camera keyframes)
  useScrollEngine();

  return (
    <div className="portfolio-editorial-app">
      {/* Cinematic Cross Un-Reveal Initial Loader */}
      <CrossRevealLoader />

      {/* Full-Page Technical Graph Paper & Research Notebook Blueprint Canvas */}
      <TechnicalNotebookBackground />

      {/* Analog Stepped Texture Grain & SVG Wobble Filter */}
      <PaperGrain />

      {/* Sticky Editorial Header */}
      <SiteNavigation />

      {/* Main Editorial Story Flow */}
      <main id="story-main">
        {/* Cover Chapter: Srushti Lohiya AI Engineering Field Notes */}
        <EditorialCover />

        {/* Chapter 01: Three Featured Professional AI Case Studies (Cinematic Horizontal Scroll) */}
        <ProjectTimeline />

        {/* Chapter 02: Deep-Dive: AI Quotation & Recommendation Platform */}
        <QuotationPlatformExplainer />

        {/* Chapter 03: Deep-Dive: Enterprise NLP Chatbot & Knowledge Assistant */}
        <EnterpriseChatbotExplainer />

        {/* Chapter 04: Deep-Dive: Document Intelligence RAG & MLOps Platform */}
        <DocumentIntelligenceMLOpsExplainer />

        {/* Chapter 05: Dedicated AI Evaluation & Production Quality Section */}
        <AiQualitySection />

        {/* Chapter 06: Professional Experience (WeRoute Systems & Amazon) */}
        <ExperienceSection />

        {/* Chapter 07: Comprehensive AI/ML & Infrastructure Stack */}
        <AiStackSection />

        {/* Chapter 08: Verified Contact Channels & Editorial Colophon */}
        <EndCard />
      </main>
    </div>
  );
}

export default App;
