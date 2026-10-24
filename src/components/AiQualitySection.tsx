'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertOctagon,
  Clock,
  Coins,
  TrendingDown,
  GitBranch,
  Flame,
  FileCheck,
  Scale
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';
import { AiQualityBlueprint } from './background/AiQualityBlueprint';

export const AiQualitySection: React.FC = () => {
  const { aiQualityPillars } = portfolioData;

  return (
    <section
      id="chapter-quality"
      data-chapter="quality"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Technical Blueprint Margin Metrics & Evaluation Matrix */}
        <AiQualityBlueprint />

        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="05"
          title="A MODEL ISN'T DONE WHEN IT GENERATES AN ANSWER."
          subtitle="AI EVALUATION & PRODUCTION QUALITY"
          bgColor="var(--color-cobalt)"
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
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-cobalt)', fontWeight: 700, letterSpacing: '0.15em' }}>
                FIELD NOTES / 02 EVALUATION & QUALITY
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--color-ink-primary)'
              }}
            >
              A Model Isn't Done <br />
              <span style={{ color: 'var(--color-cobalt)' }}>When It Generates an Answer.</span>
            </h2>

            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)', maxWidth: '780px' }}>
              Production AI requires measurable quality, reliable delivery, observable behavior, and clear failure paths.
              Demoing a prompt takes an afternoon; deploying a reliable AI architecture requires continuous evaluation, threshold gating, and defensive failure boundaries.
            </p>
          </div>

          {/* Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}
          >
            {aiQualityPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                style={{
                  backgroundColor: 'var(--color-paper-card)',
                  border: '1px solid rgba(28,27,25,0.12)',
                  borderRadius: '2px',
                  padding: '18px 20px',
                  boxShadow: 'var(--shadow-paper-flat)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-cobalt)', fontWeight: 700 }}>
                      0{idx + 1} // CRITICAL GATE
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', background: 'rgba(51, 79, 161, 0.08)', color: 'var(--color-cobalt)', padding: '2px 6px', borderRadius: '2px', fontWeight: 600 }}>
                      {pillar.metricType}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-ink-primary)', lineHeight: 1.25, marginBottom: '6px' }}>
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--color-ink-secondary)' }}>
                    {pillar.description}
                  </p>
                </div>

                <div style={{ borderTop: '1px dashed rgba(28,27,25,0.1)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem' }}>
                  <div style={{ color: 'var(--color-marker-red)', display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.68rem' }}>Failure:</span>
                    <span>{pillar.failureMode}</span>
                  </div>
                  <div style={{ color: 'var(--color-muted-green)', display: 'flex', alignItems: 'flex-start', gap: '5px', marginTop: '2px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.68rem' }}>Control:</span>
                    <span>{pillar.mitigation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Synthesis Card */}
          <div
            style={{
              backgroundColor: '#1C1B19',
              color: '#FAF7F0',
              padding: '24px',
              borderRadius: '3px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-highlighter)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} /> ENGINEERING QUALITY MANIFESTO
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#888' }}>
                SRUSHTI LOHIYA · PRODUCTION AI STANDARDS
              </span>
            </div>

            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#DDD', margin: 0 }}>
              "Model evaluation must be holistic across both statistical ML boundaries (Precision, Recall, F1, ROC AUC, NDCG) and modern generative vectors (Context Groundedness, Hallucination Frequency, Token Cost, p99 Latency). In production, certainty is earned through rigorous pre-release regression suites and defensive rollback boundaries."
            </p>
          </div>
        </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default AiQualitySection;
