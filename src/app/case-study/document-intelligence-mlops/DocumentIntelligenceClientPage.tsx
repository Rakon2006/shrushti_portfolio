'use client';

import { useScrollEngine } from '@/hooks/useScrollEngine';
import { PaperGrain } from '@/components/analog/PaperGrain';
import { SiteNavigation } from '@/components/SiteNavigation';
import { DocumentIntelligenceMLOpsExplainer } from '@/components/DocumentIntelligenceMLOpsExplainer';
import { AiQualitySection } from '@/components/AiQualitySection';
import { EndCard } from '@/components/EndCard';

export default function DocumentIntelligenceClientPage() {
  useScrollEngine();

  return (
    <div className="portfolio-editorial-app">
      <PaperGrain />
      <SiteNavigation />
      <main id="story-main" style={{ paddingTop: 'var(--header-height)' }}>
        <DocumentIntelligenceMLOpsExplainer />
        <AiQualitySection />
        <EndCard />
      </main>
    </div>
  );
}
