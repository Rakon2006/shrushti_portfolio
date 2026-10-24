'use client';

import React from 'react';

export const WorkSectionBlueprint: React.FC = () => {
  return (
    <div className="section-blueprint-layer work-blueprint-canvas" aria-hidden="true">
      {/* Precision Corner Registration Marks */}
      <div className="work-reg-mark work-reg-mark--tl" style={{ top: '24px', left: 'clamp(14px, 2.5vw, 40px)' }} />
      <div className="work-reg-mark work-reg-mark--tr" style={{ top: '24px', right: 'clamp(14px, 2.5vw, 40px)' }} />

      {/* ========================================================
          LEFT MARGIN: Cohesive Architectural Column (Aligned to Grid)
         ======================================================== */}
      <div
        style={{
          position: 'absolute',
          top: '52px',
          left: 'clamp(10px, 2.2vw, 38px)',
          width: '180px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '14px',
          pointerEvents: 'none'
        }}
      >
        {/* 1. Experiment Tag */}
        <div className="floating-technical-note floating-technical-note--blue blueprint-tape-sway">
          <span style={{ fontSize: '0.62rem', opacity: 0.75 }}>SYS //</span>
          <span>01 — EXPERIMENT</span>
        </div>

        {/* 2. Neural Architecture Node Graph */}
        <div style={{ width: '160px', height: '175px', opacity: 0.82 }}>
          <svg viewBox="0 0 160 175" fill="none" style={{ width: '100%', height: '100%' }}>
            {/* Blueprint Grid Lines */}
            <line x1="10" y1="20" x2="150" y2="20" stroke="rgba(52, 85, 164, 0.16)" strokeDasharray="3 3" />
            <line x1="10" y1="70" x2="150" y2="70" stroke="rgba(52, 85, 164, 0.16)" strokeDasharray="3 3" />
            <line x1="10" y1="120" x2="150" y2="120" stroke="rgba(52, 85, 164, 0.16)" strokeDasharray="3 3" />

            {/* Vertical Axis with Measurement Ticks */}
            <line x1="25" y1="10" x2="25" y2="150" stroke="rgba(52, 85, 164, 0.25)" strokeWidth="1.2" />
            <line x1="20" y1="20" x2="30" y2="20" stroke="rgba(52, 85, 164, 0.4)" />
            <line x1="20" y1="70" x2="30" y2="70" stroke="rgba(52, 85, 164, 0.4)" />
            <line x1="20" y1="120" x2="30" y2="120" stroke="rgba(52, 85, 164, 0.4)" />

            {/* Thin blue connector path */}
            <path
              d="M 25 30 L 60 55 L 100 40 L 135 85 L 100 120 L 55 105 L 25 140"
              stroke="var(--blueprint-blue)"
              strokeWidth="1.4"
              className="blueprint-line-draw"
            />

            {/* Signal pulse moving along path */}
            <path
              d="M 25 30 L 60 55 L 100 40 L 135 85 L 100 120 L 55 105 L 25 140"
              stroke="var(--blueprint-red)"
              strokeWidth="2.2"
              strokeDasharray="16 110"
              className="blueprint-signal-travel"
            />

            {/* Pulsing Neural Nodes */}
            <circle cx="25" cy="30" r="3.5" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="60" cy="55" r="3.5" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="100" cy="40" r="4" fill="var(--blueprint-ink)" className="blueprint-node-pulse" />
            <circle cx="135" cy="85" r="4.2" fill="var(--blueprint-red)" className="blueprint-node-pulse" />
            <circle cx="100" cy="120" r="3.5" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="55" cy="105" r="3.5" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />
            <circle cx="25" cy="140" r="4" fill="var(--blueprint-blue)" className="blueprint-node-pulse" />

            {/* Coordinate label */}
            <text x="32" y="166" fontFamily="var(--font-mono)" fontSize="8" fill="rgba(52, 85, 164, 0.55)">
              NODE_GRAPH // α=0.05
            </text>
          </svg>
        </div>

        {/* 3. System Notes Tag */}
        <div className="floating-technical-note floating-technical-note--blue blueprint-tape-sway">
          <span>SYSTEM NOTES</span>
        </div>
      </div>

      {/* ========================================================
          RIGHT MARGIN: Cohesive Architectural Column (Aligned to Grid)
          Zero collision: Notes and SVGs are stacked with clean vertical spacing!
         ======================================================== */}
      <div
        style={{
          position: 'absolute',
          top: '52px',
          right: 'clamp(10px, 2.2vw, 38px)',
          width: '180px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px',
          pointerEvents: 'none'
        }}
      >
        {/* 1. Model -> Deploy Tag (Red Accent) */}
        <div className="floating-technical-note floating-technical-note--red blueprint-tape-sway">
          <span>✎ MODEL → DEPLOY</span>
        </div>

        {/* 2. Isometric Database Cylinder Sketch (Clean & Isolated) */}
        <div style={{ width: '90px', height: '62px', opacity: 0.85 }}>
          <svg viewBox="0 0 90 62" fill="none" style={{ width: '100%', height: '100%' }}>
            {/* Cylinder 1 (Top Tier) */}
            <ellipse cx="45" cy="10" rx="32" ry="7" fill="none" stroke="var(--blueprint-ink)" strokeWidth="1.2" />
            <path d="M 13 10 L 13 22 C 13 27, 77 27, 77 22 L 77 10" fill="none" stroke="var(--blueprint-ink)" strokeWidth="1.2" />
            <ellipse cx="45" cy="22" rx="32" ry="7" fill="none" stroke="rgba(52, 85, 164, 0.3)" strokeDasharray="2 2" />
            {/* Cylinder 2 (Bottom Tier) */}
            <path d="M 13 22 L 13 34 C 13 39, 77 39, 77 34 L 77 22" fill="none" stroke="var(--blueprint-ink)" strokeWidth="1.2" />
            <ellipse cx="45" cy="34" rx="32" ry="7" fill="none" stroke="var(--blueprint-ink)" strokeWidth="1.2" />
            {/* Label */}
            <text x="24" y="52" fontFamily="var(--font-mono)" fontSize="8" fill="rgba(34, 34, 34, 0.65)" letterSpacing="0.08em">
              VECTOR_DB
            </text>
          </svg>
        </div>

        {/* 3. Trace / Evaluate Tag */}
        <div className="floating-technical-note blueprint-tape-sway" style={{ marginTop: '2px' }}>
          <span>TRACE / EVALUATE</span>
        </div>

        {/* 4. Model Convergence Waveform & Latency Measurement */}
        <div style={{ width: '170px', height: '105px', opacity: 0.82 }}>
          <svg viewBox="0 0 170 105" fill="none" style={{ width: '100%', height: '100%' }}>
            {/* Coordinate Axes */}
            <line x1="15" y1="65" x2="160" y2="65" stroke="rgba(52, 85, 164, 0.25)" strokeWidth="1.2" />
            <line x1="15" y1="12" x2="15" y2="65" stroke="rgba(52, 85, 164, 0.25)" strokeWidth="1.2" />

            {/* Smooth Loss Curve */}
            <path
              d="M 20 20 Q 55 24, 90 48 T 155 58"
              fill="none"
              stroke="var(--blueprint-blue)"
              strokeWidth="1.5"
              className="blueprint-line-draw"
            />
            {/* Validation Loss Curve (Red dashed) */}
            <path
              d="M 20 30 Q 60 34, 95 52 T 155 60"
              fill="none"
              stroke="var(--blueprint-red)"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />

            {/* Graph Subtitle */}
            <text x="24" y="78" fontFamily="var(--font-mono)" fontSize="7.5" fill="rgba(52, 85, 164, 0.6)" letterSpacing="0.04em">
              LOSS_CONVERGENCE (EPOCH 40)
            </text>

            {/* Latency Dimension Marker */}
            <line x1="28" y1="94" x2="148" y2="94" stroke="rgba(52, 85, 164, 0.35)" strokeWidth="1" />
            <path d="M 33 90 L 28 94 L 33 98" stroke="rgba(52, 85, 164, 0.45)" strokeWidth="1" fill="none" />
            <path d="M 143 90 L 148 94 L 143 98" stroke="rgba(52, 85, 164, 0.45)" strokeWidth="1" fill="none" />
            <text x="46" y="91" fontFamily="var(--font-mono)" fontSize="7.5" fill="rgba(52, 85, 164, 0.7)">
              P99 LATENCY &lt; 140ms
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WorkSectionBlueprint;
