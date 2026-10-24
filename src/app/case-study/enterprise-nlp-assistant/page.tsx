import type { Metadata } from 'next';
import EnterpriseNlpClientPage from './EnterpriseNlpClientPage';

export const metadata: Metadata = {
  title: "Enterprise NLP Chatbot & Knowledge Assistant | Srushti Lohiya",
  description: "Senior AI/ML Engineer case study: Grounded multi-turn enterprise knowledge assistant with verifiable citations and human escalation at WeRoute Systems.",
};

export default function EnterpriseNlpPage() {
  return <EnterpriseNlpClientPage />;
}
