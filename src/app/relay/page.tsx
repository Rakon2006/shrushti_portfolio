import type { Metadata } from 'next';
import QuotationClientPage from '../case-study/quotation-platform/QuotationClientPage';

export const metadata: Metadata = {
  title: "AI Quotation & Recommendation Platform | Srushti Lohiya",
  description: "Lead Developer case study: Automated proposal formulation uniting ML item prediction, LLM drafting, and human approval at WeRoute Systems.",
};

export default function RelayPage() {
  return <QuotationClientPage />;
}
