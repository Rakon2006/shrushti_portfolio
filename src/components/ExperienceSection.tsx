'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  Users,
  GitBranch,
  Cpu,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';
import { ExperienceBlueprint } from './background/ExperienceBlueprint';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;
  const [showMetrics, setShowMetrics] = useState<boolean>(false);

  return (
    <section
      id="chapter-experience"
      data-chapter="experience"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Technical Blueprint Timeline Guide Wire & Margin Notes */}
        <ExperienceBlueprint />

        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="03"
          title="PROFESSIONAL EXPERIENCE."
          subtitle="ENGINEERING TIMELINE"
          bgColor="var(--color-ink-primary)"
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
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-marker-red)', fontWeight: 700, letterSpacing: '0.15em' }}>
                FIELD NOTES / 03 EXPERIENCE
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
              Applied AI Engineering. <br />
              <span style={{ color: 'var(--color-marker-red)' }}>Delivered in Production.</span>
            </h2>

            <p style={{ marginTop: '0.75rem', fontSize: '1.02rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)', maxWidth: '780px' }}>
              Three years of hands-on experience designing, developing, evaluating, and deploying machine learning models, retrieval architectures, and MLOps platforms in high-standard enterprise environments.
            </p>
          </div>

          {/* Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experience.map((exp, idx) => (
              <div
                key={exp.company}
                style={{
                  backgroundColor: 'var(--color-paper-card)',
                  border: '1px solid rgba(15,23,42,0.08)',
                  borderRadius: '8px',
                  padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  boxShadow: 'var(--shadow-paper-lift)',
                  position: 'relative'
                }}
              >
                <MaskingTape
                  position={idx === 0 ? 'top-left' : 'top-right'}
                  width={65}
                  rotate={idx === 0 ? -2 : 2}
                  style={idx === 0 ? { top: -8, left: 24 } : { top: -8, right: 24 }}
                />

                {/* Role Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid rgba(28,27,25,0.08)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-cobalt)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {exp.company}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 800, color: 'var(--color-ink-primary)', marginTop: '2px' }}>
                      {exp.role}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-ink-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600, color: 'var(--color-ink-primary)' }}>
                      <Calendar size={13} color="var(--color-marker-red)" /> {exp.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)', marginBottom: '1.5rem', maxWidth: '820px' }}>
                  {exp.summary}
                </p>

                {/* Domains Breakdown */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  {exp.domains.map((dom) => (
                    <div
                      key={dom.title}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(15,23,42,0.06)',
                        padding: '16px',
                        borderRadius: '6px'
                      }}
                    >
                      <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-cobalt)', marginBottom: '10px' }}>
                        {dom.title}
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {dom.points.map((pt, pIdx) => (
                          <li key={pIdx} style={{ fontSize: '0.82rem', lineHeight: 1.5, color: 'var(--color-ink-secondary)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <span style={{ color: 'var(--color-marker-red)', fontWeight: 700, lineHeight: 1 }}>›</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Optional Metrics Block with Disclosure Control for Amazon */}
                {exp.metrics && (
                  <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px dashed rgba(28,27,25,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      {exp.metrics.map((m) => (
                        <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-ink-muted)' }}>
                            {m.label}:
                          </span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-cobalt)' }}>
                            {showMetrics ? m.reportedMetric : m.qualitativeDescription}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setShowMetrics(!showMetrics)}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--color-ink-primary)',
                        background: '#EEE',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {showMetrics ? <EyeOff size={11} /> : <Eye size={11} />}
                      <span>{showMetrics ? 'Hide Metrics' : 'Preview Numbers'}</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default ExperienceSection;
