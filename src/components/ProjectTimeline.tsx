'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  Cpu,
  Database,
  Layers,
  Lock,
  CheckCircle,
  ArrowRight,
  Activity,
  Eye,
  EyeOff,
  GitBranch,
  FileText,
  Workflow
} from 'lucide-react';
import { portfolioData, type CaseStudy, type MetricItem } from '../data/portfolioData';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';
import { InkHighlight } from './analog/InkHighlight';
import { HorizontalCaseStudies } from './HorizontalCaseStudies';
import { PublicProjectsSection } from './PublicProjectsSection';
import { WorkSectionBlueprint } from './background/WorkSectionBlueprint';

export const ProjectTimeline: React.FC = () => {
  const { caseStudies } = portfolioData;
  const [disclosureMode, setDisclosureMode] = useState<boolean>(false); // Default false per confidentiality rules!

  return (
    <section
      id="chapter-work"
      data-chapter="work"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Technical Blueprint Margin Annotations & Architectural Drawings */}
        <WorkSectionBlueprint />

        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="01"
          title="PRODUCTION AI CASE STUDIES."
          subtitle="SELECTED ENTERPRISE WORK"
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
            gap: '3rem'
          }}
        >
          {/* Section Header & Disclosure Control Bar */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '920px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-cobalt)',
                  fontWeight: 700
                }}
              >
                FIELD NOTES / 01 PROFESSIONAL WORK
              </span>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(227, 75, 60, 0.08)',
                  border: '1px solid rgba(227, 75, 60, 0.3)',
                  padding: '2px 8px',
                  borderRadius: '2px',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-marker-red)',
                  fontWeight: 600
                }}
              >
                <Lock size={12} />
                <span>CONFIDENTIALITY-FIRST PROFESSIONAL CASE STUDIES</span>
              </div>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--color-ink-primary)'
              }}
            >
              Enterprise Systems. <br />
              <span style={{ color: 'var(--color-cobalt)' }}>Built for Mission-Critical Operations.</span>
            </h2>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--color-ink-secondary)',
                maxWidth: '780px'
              }}
            >
              The following three featured AI architectures were developed as proprietary enterprise software at WeRoute Systems.
              In strict accordance with professional IP agreements, private source code, internal repositories, and sensitive production data remain confidential.
              Presented below are architectural system designs, engineering solutions, evaluation methodologies, and verified outcomes.
            </p>

            {/* Centralized Disclosure Policy & Interactive Authorization Toggle */}
            <div
              style={{
                backgroundColor: 'rgba(240, 227, 87, 0.2)',
                border: '1px solid rgba(240, 227, 87, 0.6)',
                borderRadius: '3px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldAlert size={18} color="var(--color-marker-red)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-ink-primary)' }}>
                  <strong>Disclosure Status:</strong> {disclosureMode ? 'Numeric Metrics Unlocked (Authorized Mode)' : 'Qualitative Impact Only (Confidentiality Default)'}
                </span>
              </div>

              <button
                onClick={() => setDisclosureMode(!disclosureMode)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '6px 12px',
                  borderRadius: '2px',
                  background: 'var(--color-ink-primary)',
                  color: 'var(--color-paper-white)',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'background 0.2s'
                }}
                title="Toggle Metric Disclosure View"
              >
                {disclosureMode ? <EyeOff size={14} color="#F0E357" /> : <Eye size={14} color="#F0E357" />}
                <span>{disclosureMode ? 'HIDE NUMERIC METRICS' : 'PREVIEW AUTHORIZED METRICS'}</span>
              </button>
            </div>
          </div>
        </div>
        </SectionCurtain>

        {/* Dedicated Horizontal Case Studies Scroll Experience */}
        <HorizontalCaseStudies disclosureMode={disclosureMode} />

        {/* Independent & Open-Source AI Systems: TicketPilot & PayLens */}
        <PublicProjectsSection />
      </div>
    </section>

  );
};

export default ProjectTimeline;
