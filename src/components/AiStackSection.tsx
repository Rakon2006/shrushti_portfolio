'use client';

import React from 'react';
import {
  Code,
  BrainCircuit,
  Sparkles,
  GitBranch,
  Cloud,
  Database,
  Users
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';
import { AiStackBlueprint } from './background/AiStackBlueprint';

export const AiStackSection: React.FC = () => {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages & Databases':
        return <Code size={18} color="var(--color-cobalt)" />;
      case 'Machine Learning':
        return <BrainCircuit size={18} color="var(--color-marker-red)" />;
      case 'Generative AI & LLMs':
        return <Sparkles size={18} color="var(--color-highlighter)" />;
      case 'MLOps & Lifecycle':
        return <GitBranch size={18} color="var(--color-muted-green)" />;
      case 'Cloud & Infrastructure':
        return <Cloud size={18} color="var(--color-cobalt)" />;
      case 'Data Engineering':
        return <Database size={18} color="var(--color-ink-primary)" />;
      default:
        return <Users size={18} color="var(--color-marker-red)" />;
    }
  };

  return (
    <section
      id="chapter-skills"
      data-chapter="skills"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Technical Blueprint Circuit Traces & Margin Notes */}
        <AiStackBlueprint />

        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="04"
          title="AI ENGINEERING STACK & CAPABILITIES."
          subtitle="TECHNICAL DOMAINS"
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted-green)', fontWeight: 700, letterSpacing: '0.15em' }}>
                  FIELD NOTES / 04 TECHNICAL INVENTORY
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
                The Modern AI Stack. <br />
                <span style={{ color: 'var(--color-muted-green)' }}>From Algorithms to Cloud Ops.</span>
              </h2>

              <p style={{ marginTop: '0.75rem', fontSize: '1.02rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)', maxWidth: '780px' }}>
                Comprehensive inventory of verified skills, frameworks, platforms, and leadership practices derived from three years of production systems engineering.
              </p>
            </div>

            {/* Skills Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {skills.map((cat, idx) => (
                <div
                  key={cat.title}
                  style={{
                    backgroundColor: 'var(--color-paper-card)',
                    border: '1px solid rgba(15,23,42,0.08)',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: 'var(--shadow-paper-flat)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '14px',
                    position: 'relative'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(28,27,25,0.08)', paddingBottom: '8px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {getCategoryIcon(cat.title)}
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-ink-primary)' }}>
                          {cat.title}
                        </h3>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-ink-muted)' }}>
                        {cat.category}
                      </span>
                    </div>

                    {/* Skills Tag Cloud */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {cat.skills.map((sk) => (
                        <span
                          key={sk}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid rgba(15,23,42,0.08)',
                            color: 'var(--color-ink-primary)',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontWeight: 500
                          }}
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Editorial Highlight Footer */}
                  <div style={{ borderTop: '1px dashed rgba(28,27,25,0.1)', paddingTop: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--color-ink-secondary)', fontStyle: 'italic', display: 'block' }}>
                      {cat.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default AiStackSection;
