'use client';

import React, { useState } from 'react';
import {
  FileCheck2,
  Layers,
  GitMerge,
  Activity,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Server,
  Cloud,
  RefreshCw,
  GitBranch,
  Lock,
  ArrowRight
} from 'lucide-react';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';

export const DocumentIntelligenceMLOpsExplainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deployment' | 'observability'>('deployment');

  const threeChanges = [
    {
      num: '01',
      title: 'Structure-aware chunking',
      desc: 'Splitting on section, table and clause boundaries rather than token counts. This moved retrieval accuracy more than weeks of prompt iteration had.'
    },
    {
      num: '02',
      title: 'Confidence scoring at extraction, not at the end',
      desc: 'Low OCR confidence or a missing required field flags the document for review instead of letting it flow downstream.'
    },
    {
      num: '03',
      title: 'Staged evaluation',
      desc: 'Retrieval measured separately from generation, so a drop tells me where it broke rather than just that it broke.'
    }
  ];

  return (
    <section
      id="chapter-mlops"
      data-chapter="mlops"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="03"
          title="DOCUMENT INTELLIGENCE & MLOPS PLATFORM"
          subtitle="WEROUTE SYSTEMS · 2024–PRESENT"
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
            gap: '3rem'
          }}
        >
          {/* Section Header & Narrative */}
          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted-green)', fontWeight: 700, letterSpacing: '0.15em' }}>
                CASE STUDY 03 — DOCUMENT INTELLIGENCE & MLOPS PLATFORM
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', background: '#EEE', padding: '3px 10px', borderRadius: '2px', color: '#444', fontWeight: 600 }}>
                Role: Senior AI/ML Engineer · WeRoute Systems
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                color: 'var(--color-ink-primary)'
              }}
            >
              The Problem
            </h2>

            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '1rem', lineHeight: 1.65, color: 'var(--color-ink-secondary)' }}>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-ink-primary)' }}>
                Two problems that turned out to be the same problem.
              </p>

              <p style={{ margin: 0 }}>
                Years of company knowledge sat in scanned PDFs, inconsistently formatted files and semi-structured records. People knew it existed but couldn’t find it, so routine work got redone and the same questions kept reaching the same few experts.
              </p>

              <p style={{ margin: 0 }}>
                Separately, every new model was being deployed ad hoc. No standard release path, no way to tell whether a change had quietly made things worse, and nothing to show a client when they asked how a decision was made.
              </p>

              <div
                style={{
                  borderLeft: '3px solid var(--color-muted-green)',
                  padding: '0.65rem 1.1rem',
                  background: 'rgba(74, 122, 94, 0.05)',
                  fontStyle: 'italic',
                  color: 'var(--color-ink-primary)',
                  fontWeight: 500,
                  fontSize: '1.05rem'
                }}
              >
                I built the document pipeline and the deployment backbone together, because a retrieval system you can’t safely update isn’t much use.
              </div>
            </div>
          </div>

          {/* What Went Wrong First */}
          <div
            style={{
              background: '#FFFDF8',
              border: '1px solid rgba(28,27,25,0.12)',
              borderLeft: '4px solid var(--color-marker-red)',
              padding: '1.5rem',
              borderRadius: '2px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
              <AlertTriangle size={17} color="var(--color-marker-red)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-marker-red)', letterSpacing: '0.08em' }}>
                WHAT WENT WRONG FIRST
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--color-ink-primary)' }}>
              <p style={{ margin: 0 }}>
                My first build worked on clean documents and failed quietly on real ones. It produced confident answers assembled from partial context, and nobody caught them because they read well.
              </p>
              <p style={{ margin: 0, color: 'var(--color-ink-secondary)' }}>
                So I stopped adding features and ran error analysis on a sample of failures, tracing each back to where it actually broke. The distribution wasn’t what I expected. Most failures came from OCR noise on poor scans and from fixed-size chunking splitting tables and clauses in half — the text was correct but structurally incomplete. Very few came from the model or the prompt.
              </p>
            </div>
          </div>

          {/* Three Changes Came Out of That */}
          <div>
            <div style={{ borderBottom: '1px solid rgba(28,27,25,0.12)', paddingBottom: '0.65rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted-green)', fontWeight: 700, letterSpacing: '0.12em' }}>
                ERROR ANALYSIS & RESOLUTION
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-ink-primary)', margin: '0.2rem 0 0' }}>
                Three Changes Came Out of That
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {threeChanges.map((item) => (
                <div
                  key={item.num}
                  style={{
                    background: '#FAF7F0',
                    border: '1px solid rgba(28,27,25,0.12)',
                    padding: '1.25rem',
                    borderRadius: '2px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-muted-green)', fontWeight: 800 }}>
                    CHANGE {item.num}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-ink-primary)', margin: 0, lineHeight: 1.25 }}>
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--color-ink-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Deployment Side */}
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

            <div style={{ borderBottom: '1px solid #2B332E', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted-green)', fontWeight: 700, letterSpacing: '0.12em' }}>
                CONTINUOUS RELIABILITY & PIPELINE AUTOMATION
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: '#FAF7F0', margin: '0.2rem 0 0' }}>
                The Deployment Side
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', lineHeight: 1.65, color: '#CCC', marginBottom: '1.5rem' }}>
              <p style={{ margin: 0 }}>
                Once the pipeline worked, the problem became keeping it working. I built the release path the whole team now uses: automated regression tests against golden datasets gating every deploy, canary releases to a slice of traffic before full rollout, automated rollback on threshold breach, and MLflow tracking so any regression traces back to the specific change that caused it.
              </p>
              <p style={{ margin: 0 }}>
                On top of that, observability: data and model drift, prediction quality, latency, throughput, token usage and cost per request, with retraining triggered automatically when metrics cross defined thresholds.
              </p>
            </div>

            {/* Architecture Steps Breakdown */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
              <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <GitMerge size={16} color="var(--color-muted-green)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                    Golden Dataset Regression Gates
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5, margin: 0 }}>
                  Pre-merge GitHub Actions tests compare retrieval precision and schema validity against baseline golden benchmarks before code can deploy.
                </p>
              </div>

              <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Server size={16} color="var(--color-muted-green)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                    Canary Rollouts & Automated Revert
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5, margin: 0 }}>
                  Kubernetes splits live traffic progressively (5% → 25% → 100%). Elevated error rates or latency anomalies trigger instant automated rollbacks.
                </p>
              </div>

              <div style={{ background: '#1E2420', padding: '16px', borderRadius: '2px', border: '1px solid #2B332E' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Activity size={16} color="var(--color-muted-green)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#FAF7F0' }}>
                    Drift Monitoring & Auto-Retraining
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#BBB', lineHeight: 1.5, margin: 0 }}>
                  Continuous telemetry monitors input distribution shift (PSI), token spend, and throughput, triggering scheduled MLflow retraining upon threshold breach.
                </p>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div
            style={{
              backgroundColor: '#FAF7F0',
              border: '1px solid rgba(28,27,25,0.12)',
              borderRadius: '2px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--color-muted-green)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-muted-green)', letterSpacing: '0.08em' }}>
                GOVERNANCE & AUDITABILITY
              </span>
            </div>

            <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--color-ink-primary)' }}>
              Enterprise clients in regulated contexts need to see how a decision was made, not just trust that it was. IAM and RBAC access controls, secrets management, PII handling, model cards, deployment manifests and lineage records aligned to ISO/IEC 42001.
            </p>

            <div
              style={{
                borderLeft: '3px solid var(--color-ink-primary)',
                padding: '0.55rem 0.9rem',
                background: 'rgba(28, 27, 25, 0.04)',
                fontStyle: 'italic',
                color: 'var(--color-ink-primary)',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}
            >
              That isn’t a feature anyone asked for in a requirements doc. It’s the condition of being allowed to deploy at all.
            </div>
          </div>

          {/* Results */}
          <div>
            <div style={{ borderBottom: '1px solid rgba(28,27,25,0.12)', paddingBottom: '0.65rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-cobalt)', fontWeight: 700, letterSpacing: '0.12em' }}>
                PRODUCTION IMPACT
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-ink-primary)', margin: '0.2rem 0 0' }}>
                Results
              </h3>
            </div>

            {/* 3 Metric Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: '#FAF7F0', border: '1px solid rgba(28,27,25,0.12)', padding: '1.2rem', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 900, color: 'var(--color-cobalt)', display: 'block', lineHeight: 1.1 }}>
                  80%
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-ink-primary)', display: 'block', marginTop: '4px' }}>
                  Reduction in manual document handling
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--color-ink-muted)' }}>
                  Scans, OCR extraction & indexing
                </span>
              </div>

              <div style={{ background: '#FAF7F0', border: '1px solid rgba(28,27,25,0.12)', padding: '1.2rem', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 900, color: 'var(--color-cobalt)', display: 'block', lineHeight: 1.1 }}>
                  40%
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-ink-primary)', display: 'block', marginTop: '4px' }}>
                  Fewer deployment failures
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--color-ink-muted)' }}>
                  Automated canary gates & rollback
                </span>
              </div>

              <div style={{ background: '#FAF7F0', border: '1px solid rgba(28,27,25,0.12)', padding: '1.2rem', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 900, color: 'var(--color-muted-green)', display: 'block', lineHeight: 1.1 }}>
                  100%
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-ink-primary)', display: 'block', marginTop: '4px' }}>
                  Platform adoption
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--color-ink-muted)' }}>
                  Underpins every AI service in the product
                </span>
              </div>
            </div>

            <div style={{ background: '#FAF7F0', border: '1px solid rgba(28,27,25,0.1)', padding: '1rem 1.2rem', borderRadius: '2px' }}>
              <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)' }}>
                Platform now underpins every AI service in the product, establishing reliable regression baselines, standardized canary rollouts, and reproducible experiment lineage across the entire engineering organization.
              </p>
            </div>
          </div>

          {/* What I'd Do Differently */}
          <div
            style={{
              background: '#FAF7F0',
              border: '1px solid rgba(28,27,25,0.12)',
              borderLeft: '4px solid var(--color-ink-primary)',
              padding: '1.5rem',
              borderRadius: '2px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
              <Lightbulb size={17} color="var(--color-ink-primary)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-ink-primary)', letterSpacing: '0.08em' }}>
                WHAT I’D DO DIFFERENTLY
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--color-ink-primary)' }}>
              I built the pipeline before the evaluation. It should have been the other way round — I spent weeks improving something I couldn’t measure properly, and the error analysis I eventually ran should have existed from the start.
            </p>
          </div>
        </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default DocumentIntelligenceMLOpsExplainer;
