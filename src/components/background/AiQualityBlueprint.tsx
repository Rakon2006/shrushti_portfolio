'use client';

import React from 'react';

export const AiQualityBlueprint: React.FC = () => {
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
          width: '175px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '14px',
          pointerEvents: 'none'
        }}
      >
        {/* 1. Header Note */}
        <div className="floating-technical-note floating-technical-note--blue blueprint-tape-sway">
          <span>EVALUATION BENCHMARK</span>
        </div>

        {/* 2. Benchmark Metric Radar */}
        <div style={{ width: '160px', height: '180px', opacity: 0.8 }}>
          <svg viewBox="0 0 160 180" fill="none" style={{ width: '100%', height: '100%' }}>
            <circle cx="80" cy="75" r="55" stroke="rgba(52, 85, 164, 0.14)" strokeDasharray="3 3" />
            <circle cx="80" cy="75" r="36" stroke="rgba(52, 85, 164, 0.2)" strokeDasharray="3 3" />
            <circle cx="80" cy="75" r="18" stroke="rgba(52, 85, 164, 0.28)" />
            <line x1="80" y1="15" x2="80" y2="135" stroke="rgba(52, 85, 164, 0.25)" />
            <line x1="20" y1="75" x2="140" y2="75" stroke="rgba(52, 85, 164, 0.25)" />
            <polygon
              points="80,26 128,62 108,118 52,118 32,62"
              fill="rgba(52, 85, 164, 0.08)"
              stroke="var(--blueprint-blue)"
              strokeWidth="1.4"
              className="blueprint-line-draw"
            />
            <circle cx="80" cy="26" r="3" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="128" cy="62" r="3" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="108" cy="118" r="3" fill="var(--blueprint-red)" className="blueprint-node-pulse" />
            <circle cx="52" cy="118" r="3" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="32" cy="62" r="3" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <text x="26" y="160" fontFamily="var(--font-mono)" fontSize="7.5" fill="rgba(52, 85, 164, 0.65)">
              ROBUSTNESS / F1 / LATENCY
            </text>
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
          width: '175px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '14px',
          pointerEvents: 'none'
        }}
      >
        {/* 1. Confidence Note (Red Accent) */}
        <div className="floating-technical-note floating-technical-note--red blueprint-tape-sway">
          <span>CONFIDENCE ≥ 0.85</span>
        </div>

        {/* 2. Checkmark Matrix */}
        <div style={{ width: '150px', height: '135px', opacity: 0.82 }}>
          <svg viewBox="0 0 150 135" fill="none" style={{ width: '100%', height: '100%' }}>
            <g transform="translate(10, 8)">
              <rect x="0" y="0" width="130" height="26" rx="2" fill="rgba(252, 250, 244, 0.92)" stroke="rgba(52, 85, 164, 0.25)" />
              <path d="M 12 13 L 17 18 L 26 7" stroke="var(--blueprint-blue)" strokeWidth="1.8" fill="none" />
              <text x="34" y="17" fontFamily="var(--font-mono)" fontSize="7" fill="var(--blueprint-ink)">
                Groundedness: 99.4%
              </text>
            </g>
            <g transform="translate(10, 42)">
              <rect x="0" y="0" width="130" height="26" rx="2" fill="rgba(252, 250, 244, 0.92)" stroke="rgba(52, 85, 164, 0.25)" />
              <path d="M 12 13 L 17 18 L 26 7" stroke="var(--blueprint-blue)" strokeWidth="1.8" fill="none" />
              <text x="34" y="17" fontFamily="var(--font-mono)" fontSize="7" fill="var(--blueprint-ink)">
                Toxicity: &lt; 0.01%
              </text>
            </g>
            <g transform="translate(10, 76)">
              <rect x="0" y="0" width="130" height="26" rx="2" fill="rgba(252, 250, 244, 0.92)" stroke="rgba(240, 82, 67, 0.35)" />
              <path d="M 12 13 L 17 18 L 26 7" stroke="var(--blueprint-red)" strokeWidth="1.8" fill="none" />
              <text x="34" y="17" fontFamily="var(--font-mono)" fontSize="7" fill="var(--blueprint-ink)">
                Hallucination Filter
              </text>
            </g>
          </svg>
        </div>

        {/* 3. Safety Standard Note */}
        <div className="floating-technical-note blueprint-tape-sway" style={{ marginTop: '2px' }}>
          <span>GUARDRAILS: ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default AiQualityBlueprint;
