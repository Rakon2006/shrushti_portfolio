'use client';

import React, { useEffect } from 'react';
import { useScrollEngine } from './hooks/useScrollEngine';
import { CrossRevealLoader } from './components/CrossRevealLoader';
import { TechnicalNotebookBackground } from './components/background/TechnicalNotebookBackground';
import { PaperGrain } from './components/analog/PaperGrain';
import { SiteNavigation } from './components/SiteNavigation';
import { EditorialCover } from './components/EditorialCover';
import { ProjectTimeline } from './components/ProjectTimeline';
import { AiQualitySection } from './components/AiQualitySection';
import { ExperienceSection } from './components/ExperienceSection';
import { AiStackSection } from './components/AiStackSection';
import { EndCard } from './components/EndCard';

export function App() {
  // Activate centralized scroll engine (single rAF loop, smooth follow, camera keyframes)
  useScrollEngine();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

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

        {/* Chapter 02: Dedicated AI Evaluation & Production Quality Section */}
        <AiQualitySection />

        {/* Chapter 03: Professional Experience (WeRoute Systems & Amazon) */}
        <ExperienceSection />

        {/* Chapter 04: Comprehensive AI/ML & Infrastructure Stack */}
        <AiStackSection />

        {/* Chapter 05: Verified Contact Channels & Editorial Colophon */}
        <EndCard />
      </main>
    </div>
  );
}

export default App;
