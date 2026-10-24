import type { Metadata } from 'next';
import ExperienceClientPage from './ExperienceClientPage';

export const metadata: Metadata = {
  title: "Professional Experience | Srushti Lohiya",
  description: "Senior AI/ML Engineer timeline: WeRoute Systems and Amazon with engineering domain breakdowns.",
};

export default function ExperiencePage() {
  return <ExperienceClientPage />;
}
