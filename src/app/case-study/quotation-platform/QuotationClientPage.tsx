'use client';

import { useScrollEngine } from '@/hooks/useScrollEngine';
import { PaperGrain } from '@/components/analog/PaperGrain';
import { SiteNavigation } from '@/components/SiteNavigation';
import { QuotationPlatformExplainer } from '@/components/QuotationPlatformExplainer';
import { AiQualitySection } from '@/components/AiQualitySection';
import { EndCard } from '@/components/EndCard';

export default function QuotationClientPage() {
  useScrollEngine();

  return (
    <div className="portfolio-editorial-app">
      <PaperGrain />
      <SiteNavigation />
      <main id="story-main" style={{ paddingTop: 'var(--header-height)' }}>
        <QuotationPlatformExplainer />
        <AiQualitySection />
        <EndCard />
      </main>
    </div>
  );
}
