'use client';

import React, { useState } from 'react';
import {
  FileCheck2,
  Layers,
  GitMerge,
  Activity,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Server,
  Cloud,
  CheckCircle,
  Database
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';

export const DocumentIntelligenceMLOpsExplainer: React.FC = () => {
  const caseStudy = portfolioData.caseStudies[2];
  const [activeTab, setActiveTab] = useState<'pipeline' | 'mlops' | 'governance'>('pipeline');

  return (
    <section
      id="chapter-mlops"
      data-chapter="mlops"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="04"
          title="DOCUMENT INTELLIGENCE RAG & MLOPS PLATFORM"
          subtitle="PRODUCTION MLOPS & RELIABILITY"
          bgColor="var(--color-muted-green)"
          textColor="var(--color-paper-white)"
        >

        {/* Main Content Viewport */}
        <div
          className="camera-rig"
          style={{
            maxWidth: 'var(--stage-max-width)',
            margin: '0 auto',
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {/* Section Header */}
          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted-green)', fontWeight: 700, letterSpacing: '0.15em' }}>
                CASE STUDY 03 / DEEP DIVE
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', background: '#EEE', padding: '2px 8px', borderRadius: '2px', color: '#555' }}>
                ROLE: SENIOR AI/ML ENGINEER · WEROUTE SYSTEMS
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                color: 'var(--color-ink-primary)'
              }}
            >
              Document Intelligence Lifecycle <br />
              <span style={{ color: 'var(--color-muted-green)' }}>with Automated MLOps & Canary Releases.</span>
            </h2>

            <p style={{ marginTop: '0.75rem', fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)' }}>
              Disjointed document processing and manual model lifecycle management created severe operational bottlenecks and deployment instability.
              Srushti architected an end-to-end platform uniting document parsing, vector retrieval, continuous training, canary deployments on Kubernetes, and ISO/IEC 42001-aligned governance.
            </p>
          </div>

          {/* Interactive MLOps Architectural Blueprint */}
          <div
            style={{
              backgroundColor: '#161A18',
              color: '#FAF7F0',
              border: '1px solid #2B332E',
              borderRadius: '3px',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            <PushPin color="#7E9C77" style={{ position: 'absolute', top: '-10px', right: '30px', zIndex: 10 }} />

            {/* Architecture Tabs */}
            <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #2B332E', paddingBottom: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveTab('pipeline')}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '8px 14px',
                  borderRadius: '2px',
                  border: activeTab === 'pipeline' ? '1px solid var(--color-muted-green)' : '1px solid #333',
                  background: activeTab === 'pipeline' ? 'rgba(126, 156, 119, 0.2)' : '#1F2421',
                  color: activeTab === 'pipeline' ? 'var(--color-muted-green)' : '#888',
                  cursor: 'pointer'
                }}
              >
                1. DOCUMENT INGESTION & RAG PIPELINE
              </button>
              <button
                onClick={() => setActiveTab('mlops')}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '8px 14px',
                  borderRadius: '2px',
                  border: activeTab === 'mlops' ? '1px solid var(--color-highlighter)' : '1px solid #333',
                  background: activeTab === 'mlops' ? 'rgba(240, 227, 87, 0.2)' : '#1F2421',
                  color: activeTab === 'mlops' ? 'var(--color-highlighter)' : '#888',
                  cursor: 'pointer'
                }}
              >
                2. CI/CD, CANARY RELEASES & DRIFT
              </button>
              <button
                onClick={() => setActiveTab('governance')}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '8px 14px',
                  borderRadius: '2px',
                  border: activeTab === 'governance' ? '1px solid #4ECA7E' : '1px solid #333',
                  background: activeTab === 'governance' ? 'rgba(78, 202, 126, 0.2)' : '#1F2421',
                  color: activeTab === 'governance' ? '#4ECA7E' : '#888',
                  cursor: 'pointer'
                }}
              >
                3. GOVERNANCE & ISO/IEC 42001
              </button>
            </div>

            {/* Tab 1 Content: Ingestion Pipeline */}
            {activeTab === 'pipeline' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <FileCheck2 size={16} color="var(--color-muted-green)" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                      Layout-Aware OCR & Parsing
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5 }}>
                    Ingests multi-page PDFs, scans, and tables. Preserves document bounding boxes and reading order so complex financial and technical tables remain contextually intact.
                  </p>
                </div>

                <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Layers size={16} color="var(--color-muted-green)" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                      Contextual Chunking & Embeddings
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5 }}>
                    Hierarchical chunking prepends parent section headers to children chunks. Generates dense embeddings and writes them to high-availability vector indices.
                  </p>
                </div>

                <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Cpu size={16} color="var(--color-muted-green)" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                      Low-Latency Inference Gateway
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5 }}>
                    FastAPI microservice executing async inference on AWS EKS. Redis token caching minimizes latency for repetitive domain queries.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2 Content: MLOps and Canary Deployments */}
            {activeTab === 'mlops' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <GitMerge size={16} color="var(--color-highlighter)" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                      CI/CD & Pre-Release Regression Tests
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5 }}>
                    GitHub Actions and Jenkins trigger automated evaluation suites against golden question benchmarks. Pull requests with degraded Recall@K or Groundedness fail the build.
                  </p>
                </div>

                <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Server size={16} color="var(--color-highlighter)" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                      Canary Rollouts on Kubernetes
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5 }}>
                    Traffic is gradually split (5% → 25% → 100%) to newly registered models. Latency and error spikes automatically trigger instantaneous rollback.
                  </p>
                </div>

                <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Activity size={16} color="var(--color-highlighter)" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                      Data & Concept Drift Telemetry
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5 }}>
                    CloudWatch tracks Population Stability Index (PSI) and embedding distribution shifts over time, triggering scheduled retraining in MLflow.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3 Content: Governance & Auditability */}
            {activeTab === 'governance' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <ShieldCheck size={16} color="#4ECA7E" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                      ISO/IEC 42001 Model Cards
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5 }}>
                    Each registered model artifact stores intended use, limitations, benchmark datasets, evaluation metrics, and author provenance for compliance audits.
                  </p>
                </div>

                <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Cloud size={16} color="#4ECA7E" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                      Terraform & Multi-Cloud Infrastructure
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5 }}>
                    Infrastructure-as-Code guarantees identical, reproducible staging and production clusters on AWS, Azure, and GCP with strict IAM role separation.
                  </p>
                </div>

                <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <RefreshCw size={16} color="#4ECA7E" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                      Continuous Experiment Lineage
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5 }}>
                    MLflow tracks exact git commit hashes, training hyperparameters, and dataset versions for every deployed weights artifact.
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Caption */}
            <div style={{ marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid #262D29', paddingTop: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#888', fontStyle: 'italic' }}>
                Illustrative system diagram; implementation details simplified for confidentiality. Selected professional work at WeRoute Systems.
              </span>
            </div>
          </div>
        </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default DocumentIntelligenceMLOpsExplainer;
