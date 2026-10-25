import type { Metadata } from 'next';
import DocumentIntelligenceClientPage from './DocumentIntelligenceClientPage';

export const metadata: Metadata = {
  title: "Document Intelligence & MLOps Platform | Srushti Lohiya",
  description: "Senior AI/ML Engineer case study: End-to-end document intelligence lifecycle with automated CI/CD, canary releases, and continuous governance at WeRoute Systems.",
};

export default function DocumentIntelligencePage() {
  return <DocumentIntelligenceClientPage />;
}
