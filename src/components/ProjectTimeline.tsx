'use client';

import React from 'react';
import { SectionCurtain } from './SectionCurtain';
import { HorizontalCaseStudies } from './HorizontalCaseStudies';
import { PublicProjectsSection } from './PublicProjectsSection';
import { WorkSectionBlueprint } from './background/WorkSectionBlueprint';

export const ProjectTimeline: React.FC = () => {

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
              Three Systems. <br />
              <span style={{ color: 'var(--color-cobalt)' }}>Still Running in Production.</span>
            </h2>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--color-ink-secondary)',
                maxWidth: '780px'
              }}
            >
              The three systems below were built at WeRoute Systems and are covered by client agreements, so I can’t share source code or production data. What I can share is the architecture, the decisions behind it, and what the results were.
            </p>
          </div>
        </div>
        </SectionCurtain>

        {/* Dedicated Horizontal Case Studies Scroll Experience */}
        <HorizontalCaseStudies />

        {/* Independent & Open-Source AI Systems: TicketPilot & PayLens */}
        <PublicProjectsSection />
      </div>
    </section>

  );
};

export default ProjectTimeline;
