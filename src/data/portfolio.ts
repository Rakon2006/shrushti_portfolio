import { portfolioData, type PortfolioData, type CaseStudy, type MetricItem } from './portfolioData';

// Re-export core types and centralized data
export * from './portfolioData';

export type Project = CaseStudy;

// Backwards compatibility alias for older component imports
export interface LegacyPortfolioData extends PortfolioData {
  projects: CaseStudy[];
}

export const legacyPortfolioData: LegacyPortfolioData = {
  ...portfolioData,
  projects: portfolioData.caseStudies
};

export default portfolioData;
