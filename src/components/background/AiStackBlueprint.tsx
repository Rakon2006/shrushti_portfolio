'use client';

import React from 'react';

export const AiStackBlueprint: React.FC = () => {
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
          <span>STACK // ARCHITECTURE</span>
        </div>

        {/* 2. Circuit Trace & GPU IC Chip Footprint */}
        <div style={{ width: '160px', height: '210px', opacity: 0.8 }}>
          <svg viewBox="0 0 160 210" fill="none" style={{ width: '100%', height: '100%' }}>
            {/* Grid ticks */}
            <line x1="10" y1="20" x2="150" y2="20" stroke="rgba(52, 85, 164, 0.15)" strokeDasharray="3 3" />
            <line x1="10" y1="105" x2="150" y2="105" stroke="rgba(52, 85, 164, 0.15)" strokeDasharray="3 3" />

            {/* Circuit trace paths */}
            <path
              d="M 10 30 L 50 30 L 80 60 L 80 115 L 120 150 L 148 150"
              stroke="rgba(52, 85, 164, 0.35)"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M 10 75 L 40 75 L 60 95 L 60 165 L 95 195"
              stroke="rgba(52, 85, 164, 0.25)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
            />
            {/* Signal travel */}
            <path
              d="M 10 30 L 50 30 L 80 60 L 80 115 L 120 150 L 148 150"
              stroke="var(--blueprint-blue)"
              strokeWidth="2"
              strokeDasharray="14 100"
              className="blueprint-signal-travel"
            />
            {/* Nodes */}
            <circle cx="50" cy="30" r="3" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="80" cy="60" r="3.5" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="80" cy="115" r="3.5" fill="var(--blueprint-red)" className="blueprint-node-pulse" />
            <circle cx="120" cy="150" r="3.5" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="148" cy="150" r="4" fill="var(--blueprint-ink)" />

            {/* Micro IC chip footprint */}
            <rect x="25" y="130" width="36" height="36" rx="2" fill="rgba(252, 250, 244, 0.85)" stroke="rgba(52, 85, 164, 0.3)" strokeWidth="1" />
            <line x1="20" y1="138" x2="25" y2="138" stroke="rgba(52, 85, 164, 0.4)" />
            <line x1="20" y1="148" x2="25" y2="148" stroke="rgba(52, 85, 164, 0.4)" />
            <line x1="20" y1="158" x2="25" y2="158" stroke="rgba(52, 85, 164, 0.4)" />
            <line x1="61" y1="138" x2="66" y2="138" stroke="rgba(52, 85, 164, 0.4)" />
            <line x1="61" y1="148" x2="66" y2="148" stroke="rgba(52, 85, 164, 0.4)" />
            <line x1="61" y1="158" x2="66" y2="158" stroke="rgba(52, 85, 164, 0.4)" />
            <text x="31" y="151" fontFamily="var(--font-mono)" fontSize="7" fill="rgba(52, 85, 164, 0.6)">
              GPU_ACC
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
        {/* 1. System Core Note (Red Accent) */}
        <div className="floating-technical-note floating-technical-note--red blueprint-tape-sway">
          <span>SYS_CORE // PYTORCH</span>
        </div>

        {/* 2. Distributed Inference Pipeline Architecture */}
        <div style={{ width: '155px', height: '140px', opacity: 0.82 }}>
          <svg viewBox="0 0 155 140" fill="none" style={{ width: '100%', height: '100%' }}>
            {/* Pipeline tier boxes */}
            <rect x="25" y="8" width="125" height="26" rx="2" fill="rgba(252, 250, 244, 0.92)" stroke="rgba(52, 85, 164, 0.3)" strokeWidth="1" />
            <text x="34" y="25" fontFamily="var(--font-mono)" fontSize="7" fill="var(--blueprint-blue)" letterSpacing="0.04em">
              TOKEN_ROUTER // vLLM
            </text>
            <circle cx="15" cy="21" r="3" fill="var(--blueprint-blue)" />
            <line x1="15" y1="21" x2="25" y2="21" stroke="var(--blueprint-blue)" strokeWidth="1" />

            {/* Connecting bus wire */}
            <line x1="87" y1="34" x2="87" y2="50" stroke="rgba(52, 85, 164, 0.35)" strokeWidth="1.2" strokeDasharray="2 2" />

            <rect x="25" y="50" width="125" height="26" rx="2" fill="rgba(252, 250, 244, 0.92)" stroke="rgba(240, 82, 67, 0.35)" strokeWidth="1" />
            <text x="34" y="67" fontFamily="var(--font-mono)" fontSize="7" fill="var(--blueprint-red)" letterSpacing="0.04em">
              K8S_INFERENCE_PODS
            </text>
            <circle cx="15" cy="63" r="3" fill="var(--blueprint-red)" />
            <line x1="15" y1="63" x2="25" y2="63" stroke="var(--blueprint-red)" strokeWidth="1" />

            {/* Connecting bus wire */}
            <line x1="87" y1="76" x2="87" y2="92" stroke="rgba(52, 85, 164, 0.35)" strokeWidth="1.2" strokeDasharray="2 2" />

            <rect x="25" y="92" width="125" height="26" rx="2" fill="rgba(252, 250, 244, 0.92)" stroke="rgba(34, 34, 34, 0.25)" strokeWidth="1" />
            <text x="34" y="109" fontFamily="var(--font-mono)" fontSize="7" fill="var(--blueprint-ink)" letterSpacing="0.04em">
              REDIS_CACHE_CLUSTER
            </text>
            <circle cx="15" cy="105" r="3" fill="var(--blueprint-ink)" />
            <line x1="15" y1="105" x2="25" y2="105" stroke="var(--blueprint-ink)" strokeWidth="1" />
          </svg>
        </div>

        {/* 3. Platform Note */}
        <div className="floating-technical-note blueprint-tape-sway" style={{ marginTop: '2px' }}>
          <span>RUNTIME: DISTRIBUTED</span>
        </div>
      </div>
    </div>
  );
};

export default AiStackBlueprint;
