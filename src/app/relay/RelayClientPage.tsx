'use client';

import { useScrollEngine } from '@/hooks/useScrollEngine';
import { PaperGrain } from '@/components/analog/PaperGrain';
import { SiteNavigation } from '@/components/SiteNavigation';
import { RelayExplainer } from '@/components/RelayExplainer';
import { EndCard } from '@/components/EndCard';

export default function RelayClientPage() {
  useScrollEngine();

  return (
    <div className="portfolio-editorial-app">
      <PaperGrain />
      <SiteNavigation />
      <main id="story-main" style={{ paddingTop: 'var(--header-height)' }}>
        <RelayExplainer />
        <EndCard />
      </main>
    </div>
  );
}
