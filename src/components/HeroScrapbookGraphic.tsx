'use client';

import React, { useEffect, useState } from 'react';

interface HeroScrapbookGraphicProps {
  introSettled: boolean;
  reducedMotion: boolean;
  onNavigateChapter?: (id: string) => void;
}

export const HeroScrapbookGraphic: React.FC<HeroScrapbookGraphicProps> = ({
  introSettled,
  reducedMotion,
  onNavigateChapter
}) => {
  const [activeCycle, setActiveCycle] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    // 9.6-second cinematic master loop coordinating all sequential workflow beats
    const interval = setInterval(() => {
      setActiveCycle((prev) => (prev + 1) % 1000);
    }, 9600);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const handleHotspot = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavigateChapter) {
      onNavigateChapter(id);
    } else if (typeof window !== 'undefined') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`portfolio-hero__scrapbook-sway ${
        introSettled && !reducedMotion ? 'is-swaying' : ''
      } ${!introSettled && !reducedMotion ? 'is-landing' : ''}`}
      style={{ position: 'relative', width: '100%', height: 'auto' }}
    >
      {/* Pristine Regenerated Handwritten Red Annotation & Curved Pen Arrow */}
      <div
        className="hero-red-callout"
        style={{
          position: 'absolute',
          top: '-16px',
          left: '10%',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'none',
          zIndex: 15,
          userSelect: 'none'
        }}
      >
        <svg
          width="46"
          height="32"
          viewBox="0 0 46 32"
          fill="none"
          style={{ overflow: 'visible', flexShrink: 0 }}
        >
          <path
            d="M 4 8 C 16 3, 30 10, 38 23"
            stroke="var(--hero-red, #E34B3C)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 30 18 L 38 24 L 41 13"
            stroke="var(--hero-red, #E34B3C)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        <span
          style={{
            fontFamily: "var(--font-hand, 'Caveat', cursive)",
            fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
            fontWeight: 700,
            color: 'var(--hero-red, #E34B3C)',
            transform: 'rotate(-2deg)',
            letterSpacing: '0.02em',
            lineHeight: 1,
            whiteSpace: 'nowrap'
          }}
        >
          production ai // field notes
        </span>
      </div>

      {/* 1. Base Layer: Pristine Monochrome Technical Scrapbook & Field Notes Image */}
      <img
        src="/images/srushti_monochrome_scrapbook_no_portrait.png?v=5"
        alt="Srushti Lohiya — Senior AI/ML Engineer Monochrome Technical Scrapbook & Field Notes (SL Notebook, Neural Network, Quotation AI, Knowledge RAG, MLOps)"
        className="portfolio-hero__monochrome-img"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      />

      {/* Pristine Regenerated Vector Callout: "From model experiments to production systems." */}
      <svg
        viewBox="0 0 1000 683"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 14,
          userSelect: 'none'
        }}
      >
        {/* Hand-drawn ink arrow pointing down-left to Human Approval node */}
        <g className="hero-quotation-arrow">
          <path
            d="M 822 95 L 784 151"
            stroke="#1C1B19"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 782 138 L 784 151 L 798 150"
            stroke="#1C1B19"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Clean handwritten editorial text */}
        <g transform="translate(808, 62) rotate(-14)">
          <text
            x="0"
            y="0"
            fontFamily="var(--font-hand, 'Caveat', cursive)"
            fontSize="21"
            fontWeight="700"
            fill="#1C1B19"
            letterSpacing="0.2"
          >
            <tspan x="0" dy="0">From model</tspan>
            <tspan x="0" dy="19">experiments to</tspan>
            <tspan x="0" dy="19">production systems.</tspan>
          </text>
        </g>
      </svg>

      {/* 2. Cinematic Handmade Motion Graphics Overlay (Layered SVG + Micro-Animations) */}
      {!reducedMotion && (
        <div
          className="scrapbook-motion-overlay"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            overflow: 'hidden'
          }}
        >
          {/* SVG Canvas for precision line draws, node illuminates, and scan lines */}
          <svg
            viewBox="0 0 1000 683"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          >
            <defs>
              {/* Soft warm illumination filter */}
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.2" result="blur" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.94  0 0 0 0 0.89  0 0 0 0 0.34  0 0 0 0.85 0"
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Ink-pulse filter for neural nodes */}
              <filter id="nodeInkGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.4" result="blur" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.2  0 0 0 0 0.31  0 0 0 0 0.63  0 0 0 0.9 0"
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Linear Gradients for workflow sweep beams */}
              <linearGradient id="quotationBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F0E357" stopOpacity="0" />
                <stop offset="50%" stopColor="#F0E357" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#F0E357" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="ragScanBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334FA1" stopOpacity="0" />
                <stop offset="50%" stopColor="#334FA1" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#334FA1" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* ========================================================
                SEQUENCE BEAT 3: AI ENGINEERING COMES ALIVE
                Neural Network nodes sequentially illuminate & fine connecting lines
               ======================================================== */}
            {/* Neural Net Connecting Lines (Fine drawing pulses) */}
            <g className="motion-neural-network" opacity="0.88">
              <path
                d="M 125 410 L 105 450 L 140 480 L 100 520 L 135 550"
                fill="none"
                stroke="#1C1B19"
                strokeWidth="1.2"
                strokeDasharray="140"
                strokeDashoffset="140"
                className="anim-neural-line anim-delay-1"
              />
              <path
                d="M 140 420 L 165 460 L 130 500 L 170 540"
                fill="none"
                stroke="#1C1B19"
                strokeWidth="1.2"
                strokeDasharray="150"
                strokeDashoffset="150"
                className="anim-neural-line anim-delay-2"
              />
              <path
                d="M 85 460 L 65 500 L 95 540"
                fill="none"
                stroke="#1C1B19"
                strokeWidth="1.2"
                strokeDasharray="120"
                strokeDashoffset="120"
                className="anim-neural-line anim-delay-3"
              />

              {/* Neural Nodes Glowing Sequentially */}
              <circle cx="125" cy="410" r="3.6" className="anim-node anim-delay-1" />
              <circle cx="105" cy="450" r="4.2" className="anim-node anim-delay-2" />
              <circle cx="165" cy="460" r="3.8" className="anim-node anim-delay-3" />
              <circle cx="85" cy="460" r="3.5" className="anim-node anim-delay-4" />
              <circle cx="140" cy="480" r="4.5" className="anim-node anim-delay-5" />
              <circle cx="65" cy="500" r="3.8" className="anim-node anim-delay-6" />
              <circle cx="100" cy="520" r="4.2" className="anim-node anim-delay-7" />
              <circle cx="170" cy="540" r="4.0" className="anim-node anim-delay-8" />
              <circle cx="135" cy="550" r="4.5" className="anim-node anim-delay-9" />
              <circle cx="95" cy="540" r="3.6" className="anim-node anim-delay-10" />
            </g>

            {/* AI Chip Pulse aura & pin connections */}
            <g className="motion-ai-chip">
              {/* Subtle perimeter pulse around chip */}
              <rect
                x="180"
                y="418"
                width="54"
                height="54"
                rx="3"
                fill="none"
                stroke="#334FA1"
                strokeWidth="1.6"
                className="anim-chip-pulse"
              />
              {/* Glowing core dot behind "AI" */}
              <circle
                cx="207"
                cy="445"
                r="18"
                fill="#F0E357"
                opacity="0.14"
                className="anim-chip-glow"
              />
            </g>

            {/* Database Server Blinking LED Indicators */}
            <g className="motion-database-leds">
              {/* Bottom left DB cylinder stack */}
              <circle cx="62" cy="480" r="1.6" className="anim-server-led anim-led-green" />
              <circle cx="62" cy="495" r="1.6" className="anim-server-led anim-led-amber" />
              <circle cx="62" cy="510" r="1.6" className="anim-server-led anim-led-green anim-delay-2" />
              {/* Mid DB cylinder stack */}
              <circle cx="205" cy="358" r="1.6" className="anim-server-led anim-led-green anim-delay-1" />
              <circle cx="205" cy="372" r="1.6" className="anim-server-led anim-led-amber anim-delay-3" />
              {/* Right DB cylinder stack */}
              <circle cx="300" cy="518" r="1.6" className="anim-server-led anim-led-green anim-delay-4" />
              <circle cx="300" cy="532" r="1.6" className="anim-server-led anim-led-amber anim-delay-2" />
            </g>

            {/* Laptop Screen Typewriter / Syntax Highlight Scan */}
            <g className="motion-laptop-terminal">
              {/* Code cursor blink on screen */}
              <rect
                x="248"
                y="576"
                width="3.5"
                height="6"
                fill="#334FA1"
                className="anim-terminal-cursor"
              />
              {/* Subtle typewriter glow on laptop display */}
              <rect
                x="218"
                y="565"
                width="64"
                height="38"
                fill="#334FA1"
                opacity="0.04"
                className="anim-terminal-glow"
              />
            </g>

            {/* ========================================================
                SEQUENCE BEAT 4: QUOTATION AI WORKFLOW
                Left-to-right flow beam, node activations & approval checkmark draw
               ======================================================== */}
            <g className="motion-quotation-workflow">
              {/* Subtle highlighter sweep traveling through the 4 steps */}
              <rect
                x="440"
                y="160"
                width="140"
                height="95"
                fill="url(#quotationBeam)"
                className="anim-quotation-sweep"
              />
              {/* Connecting arrows drawing between nodes */}
              <path
                d="M 526 200 L 545 200"
                stroke="#1C1B19"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="anim-wf-arrow anim-delay-q1"
              />
              <path
                d="M 646 200 L 665 200"
                stroke="#1C1B19"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="anim-wf-arrow anim-delay-q2"
              />
              <path
                d="M 755 200 L 772 200"
                stroke="#1C1B19"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="anim-wf-arrow anim-delay-q3"
              />
              {/* Human Approval Checkmark Draw & Pulse */}
              <path
                d="M 830 198 L 836 204 L 847 192"
                fill="none"
                stroke="#334FA1"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="30"
                strokeDashoffset="30"
                className="anim-checkmark anim-delay-q4"
              />
            </g>

            {/* ========================================================
                SEQUENCE BEAT 5: KNOWLEDGE RAG WORKFLOW
                Chunking drift, vector search scan & grounded answer checkmark
               ======================================================== */}
            <g className="motion-rag-workflow">
              {/* Scanning beam across RAG stages */}
              <rect
                x="500"
                y="370"
                width="120"
                height="80"
                fill="url(#ragScanBeam)"
                className="anim-rag-scan"
              />
              {/* Drifting embedding particles from Chunking (x: 615) to Vector DB (x: 695) */}
              <rect x="618" y="405" width="4" height="4" fill="#1C1B19" className="anim-embedding anim-emb-1" />
              <rect x="626" y="412" width="4" height="4" fill="#334FA1" className="anim-embedding anim-emb-2" />
              <rect x="622" y="398" width="4" height="4" fill="#1C1B19" className="anim-embedding anim-emb-3" />

              {/* Grounded Answer Checkmark Draw */}
              <path
                d="M 880 414 L 886 420 L 897 408"
                fill="none"
                stroke="#334FA1"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="30"
                strokeDashoffset="30"
                className="anim-checkmark anim-delay-r4"
              />
            </g>

            {/* ========================================================
                SEQUENCE BEAT 6: MLOPS WORKFLOW
                Sequential icons, waveform monitor signal & retrain circular loop
               ======================================================== */}
            <g className="motion-mlops-workflow">
              {/* Waveform signal line inside Monitor (x: 720 to 760, y: 565) */}
              <path
                d="M 723 568 L 733 568 L 737 560 L 742 575 L 746 564 L 751 570 L 758 568"
                fill="none"
                stroke="#F0E357"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="anim-monitor-wave"
              />

              {/* Retrain Loop Smooth Rotation Aura (x: 846, y: 568) */}
              <circle
                cx="846"
                cy="568"
                r="18"
                fill="none"
                stroke="#334FA1"
                strokeWidth="1.4"
                strokeDasharray="16 8"
                className="anim-retrain-ring"
              />
            </g>
          </svg>
        </div>
      )}

      {/* 3. Interactive Seamless Hotspots Preserving Navigation & A11y */}
      {/* Hotspot 1: Quotation AI */}
      <a
        href="#chapter-quotation"
        onClick={(e) => handleHotspot(e, 'chapter-quotation')}
        title="Explore 01 // QUOTATION AI Case Study"
        aria-label="01 Quotation AI Case Study"
        className="portfolio-hero__hotspot"
        style={{
          position: 'absolute',
          top: '6%',
          left: '42%',
          width: '45%',
          height: '28%',
          cursor: 'pointer',
          zIndex: 10
        }}
      />

      {/* Hotspot 2: Knowledge RAG */}
      <a
        href="#chapter-assistant"
        onClick={(e) => handleHotspot(e, 'chapter-assistant')}
        title="Explore 02 // KNOWLEDGE RAG Case Study"
        aria-label="02 Knowledge RAG Case Study"
        className="portfolio-hero__hotspot"
        style={{
          position: 'absolute',
          top: '38%',
          left: '48%',
          width: '42%',
          height: '25%',
          cursor: 'pointer',
          zIndex: 10
        }}
      />

      {/* Hotspot 3: MLOps */}
      <a
        href="#chapter-mlops"
        onClick={(e) => handleHotspot(e, 'chapter-mlops')}
        title="Explore 03 // MLOPS Case Study"
        aria-label="03 MLOPS Case Study"
        className="portfolio-hero__hotspot"
        style={{
          position: 'absolute',
          top: '65%',
          left: '48%',
          width: '42%',
          height: '26%',
          cursor: 'pointer',
          zIndex: 10
        }}
      />
    </div>
  );
};

export default HeroScrapbookGraphic;
