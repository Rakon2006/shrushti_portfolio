'use client';

import React from 'react';
import {
  BookOpen,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  FileText,
  BarChart2,
  Scale,
  Users,
  ShieldCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';

export const ResearchSection: React.FC = () => {
  const { publication, education, leadership } = portfolioData;

  return (
    <section
      id="chapter-research"
      data-chapter="research"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="08"
          title="RESEARCH, EDUCATION & LEADERSHIP."
          subtitle="ACADEMIC & GOVERNANCE"
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
          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-cobalt)', fontWeight: 700, letterSpacing: '0.15em' }}>
                FIELD NOTES / 05 RESEARCH & ACADEMIA
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
              Peer-Reviewed Research <br />
              <span style={{ color: 'var(--color-cobalt)' }}>& Advanced Data Science Foundation.</span>
            </h2>

            <p style={{ marginTop: '0.75rem', fontSize: '1.02rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)', maxWidth: '780px' }}>
              Academic foundations in big data analytics, peer-reviewed classification research, and cross-functional technical leadership.
            </p>
          </div>

          {/* Research Publication Card (Academic Paper Styling) */}
          <div
            style={{
              backgroundColor: 'var(--color-paper-card)',
              border: '1px solid rgba(28,27,25,0.12)',
              borderRadius: '3px',
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              boxShadow: 'var(--shadow-paper-lift)',
              position: 'relative'
            }}
          >
            <PushPin color="#334FA1" style={{ position: 'absolute', top: '-10px', left: '30px', zIndex: 10 }} />

            {/* Academic Paper Metadata */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid rgba(28,27,25,0.08)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <BookOpen size={16} color="var(--color-cobalt)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-cobalt)', letterSpacing: '0.08em' }}>
                    PEER-REVIEWED PUBLICATION
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-ink-primary)', lineHeight: 1.2 }}>
                  {publication.title}
                </h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-ink-muted)', marginTop: '4px', display: 'block' }}>
                  Author: Srushti Lohiya · {publication.journal} ({publication.issn}) · {publication.date}
                </span>
              </div>

              <div style={{ background: '#FAF7F0', border: '1px solid #DDD', padding: '8px 12px', borderRadius: '2px', textAlign: 'right' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#666', display: 'block' }}>
                  CONFERENCE PROCEEDINGS
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-ink-primary)' }}>
                  4th National Students Research Conference
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)', marginBottom: '1.5rem', maxWidth: '850px' }}>
              {publication.description}
            </p>

            {/* Conceptual Model Comparison Grid */}
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-primary)', marginBottom: '10px' }}>
              Comparative Machine Learning Analysis:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
              {publication.modelsCompared.map((m) => (
                <div
                  key={m.name}
                  style={{
                    backgroundColor: '#FAF7F0',
                    border: '1px solid rgba(28,27,25,0.08)',
                    padding: '12px 14px',
                    borderRadius: '2px'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-ink-primary)', display: 'block' }}>
                    {m.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-cobalt)', display: 'block', marginTop: '2px', marginBottom: '6px' }}>
                    {m.type}
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#555', margin: 0, lineHeight: 1.45 }}>
                    {m.strength}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Leadership Two-Column Spread */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Education Column */}
            <div
              style={{
                backgroundColor: 'var(--color-paper-card)',
                border: '1px solid rgba(28,27,25,0.12)',
                borderRadius: '3px',
                padding: '24px',
                boxShadow: 'var(--shadow-paper-flat)',
                position: 'relative'
              }}
            >
              <MaskingTape position="top-left" width={60} rotate={-3} style={{ top: -8, left: 16 }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(28,27,25,0.08)', paddingBottom: '10px', marginBottom: '16px' }}>
                <GraduationCap size={18} color="var(--color-cobalt)" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-ink-primary)' }}>
                  Education
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '6px' }}>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-ink-primary)' }}>
                        {edu.degree}
                      </h4>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-cobalt)', background: 'rgba(51, 79, 161, 0.08)', padding: '2px 6px', borderRadius: '2px' }}>
                        {edu.gpa}
                      </span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-ink-muted)', display: 'block', marginTop: '2px' }}>
                      {edu.institution}, {edu.location} · {edu.period}
                    </span>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.5, color: 'var(--color-ink-secondary)', marginTop: '6px' }}>
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Engineering Governance Column */}
            <div
              style={{
                backgroundColor: 'var(--color-paper-card)',
                border: '1px solid rgba(28,27,25,0.12)',
                borderRadius: '3px',
                padding: '24px',
                boxShadow: 'var(--shadow-paper-flat)',
                position: 'relative'
              }}
            >
              <MaskingTape position="top-right" width={60} rotate={2} style={{ top: -8, right: 16 }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(28,27,25,0.08)', paddingBottom: '10px', marginBottom: '16px' }}>
                <Users size={18} color="var(--color-marker-red)" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-ink-primary)' }}>
                  Technical Leadership & Governance
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {leadership.map((lead) => (
                  <div key={lead.title} style={{ backgroundColor: '#FAF7F0', border: '1px solid rgba(28,27,25,0.06)', padding: '12px 14px', borderRadius: '2px' }}>
                    <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-ink-primary)', marginBottom: '4px' }}>
                      {lead.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.5, color: 'var(--color-ink-secondary)', margin: 0 }}>
                      {lead.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default ResearchSection;
