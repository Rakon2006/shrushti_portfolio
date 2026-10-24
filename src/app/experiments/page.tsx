import type { Metadata } from 'next';
import ExperimentsClientPage from './ExperimentsClientPage';

export const metadata: Metadata = {
  title: "Peer-Reviewed Research & Benchmarks | Srushti Lohiya",
  description: "Peer-reviewed research publication in Vidhyayana E-Journal, model comparison benchmarks, and MSc/BSc degrees at MIT WPU.",
};

export default function ExperimentsPage() {
  return <ExperimentsClientPage />;
}
