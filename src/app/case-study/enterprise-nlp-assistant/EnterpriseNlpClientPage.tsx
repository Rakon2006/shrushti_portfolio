'use client';

import { useScrollEngine } from '@/hooks/useScrollEngine';
import { PaperGrain } from '@/components/analog/PaperGrain';
import { SiteNavigation } from '@/components/SiteNavigation';
import { EnterpriseChatbotExplainer } from '@/components/EnterpriseChatbotExplainer';
import { AiQualitySection } from '@/components/AiQualitySection';
import { EndCard } from '@/components/EndCard';

export default function EnterpriseNlpClientPage() {
  useScrollEngine();

  return (
    <div className="portfolio-editorial-app">
      <PaperGrain />
      <SiteNavigation />
      <main id="story-main" style={{ paddingTop: 'var(--header-height)' }}>
        <EnterpriseChatbotExplainer />
        <AiQualitySection />
        <EndCard />
      </main>
    </div>
  );
}
