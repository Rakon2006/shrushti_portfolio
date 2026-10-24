'use client';

import { useScrollEngine } from '@/hooks/useScrollEngine';
import { PaperGrain } from '@/components/analog/PaperGrain';
import { SiteNavigation } from '@/components/SiteNavigation';
import { AiStackSection } from '@/components/AiStackSection';
import { EndCard } from '@/components/EndCard';

export default function AiStackClientPage() {
  useScrollEngine();

  return (
    <div className="portfolio-editorial-app">
      <PaperGrain />
      <SiteNavigation />
      <main id="story-main" style={{ paddingTop: 'var(--header-height)' }}>
        <AiStackSection />
        <EndCard />
      </main>
    </div>
  );
}
