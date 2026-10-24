'use client';

import { useScrollEngine } from '@/hooks/useScrollEngine';
import { PaperGrain } from '@/components/analog/PaperGrain';
import { SiteNavigation } from '@/components/SiteNavigation';
import { ExperimentsNotebook } from '@/components/ExperimentsNotebook';
import { EndCard } from '@/components/EndCard';

export default function ExperimentsClientPage() {
  useScrollEngine();

  return (
    <div className="portfolio-editorial-app">
      <PaperGrain />
      <SiteNavigation />
      <main id="story-main" style={{ paddingTop: 'var(--header-height)' }}>
        <ExperimentsNotebook />
        <EndCard />
      </main>
    </div>
  );
}
