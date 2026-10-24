'use client';

import { useScrollEngine } from '@/hooks/useScrollEngine';
import { PaperGrain } from '@/components/analog/PaperGrain';
import { SiteNavigation } from '@/components/SiteNavigation';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EndCard } from '@/components/EndCard';

export default function ExperienceClientPage() {
  useScrollEngine();

  return (
    <div className="portfolio-editorial-app">
      <PaperGrain />
      <SiteNavigation />
      <main id="story-main" style={{ paddingTop: 'var(--header-height)' }}>
        <ExperienceSection />
        <EndCard />
      </main>
    </div>
  );
}
