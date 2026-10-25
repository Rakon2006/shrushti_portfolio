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
          num="02"
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
                AI EVALUATION & QUALITY
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

            <div
              style={{
                marginTop: '1.25rem',
                padding: '1.1rem 1.4rem',
                background: '#FAF7F0',
                border: '1px solid rgba(28,27,25,0.12)',
                borderLeft: '4px solid var(--color-cobalt)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
                maxWidth: '820px',
                boxShadow: '0 2px 8px rgba(28,27,25,0.03)'
              }}
            >
              <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.55, color: 'var(--color-ink-primary)', fontWeight: 600 }}>
                Demoing a prompt takes an afternoon. Keeping it working takes everything below.
              </p>
              <p style={{ margin: 0, fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)' }}>
                These are the checks I run before a release goes out. Each one exists because something went wrong without it.
              </p>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="ai-quality-grid">
            {aiQualityPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="ai-quality-card"
              >
                <div>
                  <div className="ai-quality-card__header">
                    <span className="ai-quality-card__index">
                      0{idx + 1}
                    </span>
                    <span className="ai-quality-card__badge">
                      {pillar.metricType}
                    </span>
                  </div>

                  <h3 className="ai-quality-card__title">
                    {pillar.title}
                  </h3>

                  <p className="ai-quality-card__desc">
                    {pillar.description}
                  </p>
                </div>

                <div className="ai-quality-card__inspection">
                  <div className="ai-quality-card__row">
                    <span className="ai-quality-card__row-label ai-quality-card__row-label--fail">Fails as:</span>
                    <span className="ai-quality-card__row-val">{pillar.failureMode}</span>
                  </div>
                  <div className="ai-quality-card__row">
                    <span className="ai-quality-card__row-label ai-quality-card__row-label--control">Control:</span>
                    <span className="ai-quality-card__row-val">{pillar.mitigation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Quote */}
          <div
            style={{
              backgroundColor: '#1C1B19',
              color: '#FAF7F0',
              padding: '24px 28px',
              borderRadius: '3px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <p style={{ fontSize: '1.08rem', lineHeight: 1.6, color: '#FAF7F0', margin: 0, fontStyle: 'italic', fontWeight: 500, textAlign: 'center' }}>
              “A system that fails loudly is worth more than one that’s slightly more accurate and degrades quietly.”
            </p>
          </div>
        </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default AiQualitySection;
