'use client';

import React from 'react';

export const ExperienceBlueprint: React.FC = () => {
  return (
    <div className="section-blueprint-layer" aria-hidden="true">
      {/* Precision Corner Registration Marks */}
      <div className="work-reg-mark work-reg-mark--tl" style={{ top: '24px', left: 'clamp(14px, 2.5vw, 40px)' }} />
      <div className="work-reg-mark work-reg-mark--tr" style={{ top: '24px', right: 'clamp(14px, 2.5vw, 40px)' }} />

      {/* ========================================================
          LEFT MARGIN: Cohesive Architectural Column (Aligned to Grid)
         ======================================================== */}
      <div
        style={{
          position: 'absolute',
          top: '48px',
          left: 'clamp(10px, 2.2vw, 38px)',
          width: '170px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '14px',
          pointerEvents: 'none'
        }}
      >
        {/* 1. Header Note */}
        <div className="floating-technical-note floating-technical-note--blue blueprint-tape-sway">
          <span>TIMELINE // PRODUCTION AI</span>
        </div>

        {/* 2. Vertical Guide Wire with Milestone Nodes */}
        <div style={{ width: '60px', height: '260px', opacity: 0.8 }}>
          <svg viewBox="0 0 60 260" fill="none" style={{ width: '100%', height: '100%' }}>
            {/* Main vertical line */}
            <line x1="20" y1="10" x2="20" y2="250" stroke="rgba(52, 85, 164, 0.28)" strokeWidth="1.2" strokeDasharray="4 4" />
            
            {/* Timeline Nodes */}
            <circle cx="20" cy="30" r="4.5" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="20" cy="30" r="8" stroke="rgba(52, 85, 164, 0.3)" fill="none" />
            
            <circle cx="20" cy="115" r="4" fill="var(--blueprint-red)" className="blueprint-node-pulse" />
            <circle cx="20" cy="115" r="7" stroke="rgba(240, 82, 67, 0.3)" fill="none" />

            <circle cx="20" cy="200" r="3.5" fill="var(--blueprint-ink)" className="blueprint-node-pulse" />

            {/* Micro ticks */}
            <line x1="20" y1="70" x2="32" y2="70" stroke="rgba(52, 85, 164, 0.35)" />
            <line x1="20" y1="155" x2="32" y2="155" stroke="rgba(52, 85, 164, 0.35)" />
            <line x1="20" y1="235" x2="32" y2="235" stroke="rgba(52, 85, 164, 0.35)" />
          </svg>
        </div>
      </div>

      {/* ========================================================
          RIGHT MARGIN: Cohesive Architectural Column (Aligned to Grid)
         ======================================================== */}
      <div
        style={{
          position: 'absolute',
          top: '48px',
          right: 'clamp(10px, 2.2vw, 38px)',
          width: '170px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '14px',
          pointerEvents: 'none'
        }}
      >
        {/* 1. Milestone Note (Red Accent) */}
        <div className="floating-technical-note floating-technical-note--red blueprint-tape-sway">
          <span>✎ 3+ YRS ENTERPRISE</span>
        </div>

        {/* 2. Architectural Verified Impact Box */}
        <div style={{ width: '150px', height: '110px', opacity: 0.82 }}>
          <svg viewBox="0 0 150 110" fill="none" style={{ width: '100%', height: '100%' }}>
            <rect x="8" y="10" width="134" height="42" rx="2" fill="rgba(252, 250, 244, 0.92)" stroke="rgba(52, 85, 164, 0.28)" strokeWidth="1" />
            <text x="18" y="27" fontFamily="var(--font-mono)" fontSize="7.5" fill="var(--blueprint-blue)" fontWeight="700" letterSpacing="0.06em">
              VERIFIED IMPACT
            </text>
            <text x="18" y="41" fontFamily="var(--font-mono)" fontSize="6.8" fill="var(--blueprint-ink)" letterSpacing="0.04em">
              PRODUCTION ML AT SCALE
            </text>
            <line x1="75" y1="52" x2="75" y2="70" stroke="rgba(52, 85, 164, 0.3)" strokeDasharray="2 2" />
            <circle cx="75" cy="74" r="3" fill="var(--blueprint-blue)" />
          </svg>
        </div>

        {/* 3. Cadence Tag */}
        <div className="floating-technical-note blueprint-tape-sway" style={{ marginTop: '2px' }}>
          <span>CADENCE: BI-WEEKLY</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBlueprint;
