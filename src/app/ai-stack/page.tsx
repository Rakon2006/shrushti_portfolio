import type { Metadata } from 'next';
import AiStackClientPage from './AiStackClientPage';

export const metadata: Metadata = {
  title: "AI Stack & Technical Inventory | Srushti Lohiya",
  description: "Comprehensive AI engineering skill inventory: Machine Learning, Generative AI, RAG, MLOps, Cloud, and Data Engineering.",
};

export default function AiStackPage() {
  return <AiStackClientPage />;
}
