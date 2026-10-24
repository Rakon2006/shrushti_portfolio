import type { Metadata } from 'next';
import WorkClientPage from './WorkClientPage';

export const metadata: Metadata = {
  title: "Professional AI Case Studies | Srushti Lohiya",
  description: "Confidentiality-safe architectural case studies: AI Quotation Platform, Enterprise NLP Knowledge Assistant, and Document Intelligence MLOps.",
};

export default function WorkPage() {
  return <WorkClientPage />;
}
