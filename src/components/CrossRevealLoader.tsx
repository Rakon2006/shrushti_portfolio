'use client';

import React, { useEffect, useState } from 'react';

export const CrossRevealLoader: React.FC = () => {
  const [stage, setStage] = useState<'initial' | 'opening' | 'complete'>('initial');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage('complete');
      return;
    }

    // Phase 1: Hold crosshair momentarily (180ms)
    const openTimer = setTimeout(() => {
      setStage('opening');
    }, 180);

    // Phase 2: Complete cross un-reveal (950ms) and remove overlay
    const finishTimer = setTimeout(() => {
      setStage('complete');
    }, 950);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (stage === 'complete') return null;

  return (
    <div
      className={`cross-reveal-overlay ${stage === 'opening' ? 'is-opening' : ''}`}
      aria-hidden="true"
    >
      {/* 4 Architectural Paper Quadrants */}
      <div className="cross-quadrant cross-quadrant--top-left" />
      <div className="cross-quadrant cross-quadrant--top-right" />
      <div className="cross-quadrant cross-quadrant--bottom-left" />
      <div className="cross-quadrant cross-quadrant--bottom-right" />

      {/* Center Dividing Crosshair Grid Lines */}
      <div className="cross-line cross-line--vertical" />
      <div className="cross-line cross-line--horizontal" />

      {/* Center Archival Crosshair Badge */}
      <div className="cross-center-badge">
        <div className="cross-center-badge__icon">+</div>
        <div className="cross-center-badge__meta">
          <span className="cross-center-badge__title">SL // AI FIELD NOTES</span>
          <span className="cross-center-badge__coords">12.9716° N · 77.5946° E</span>
        </div>
      </div>
    </div>
  );
};

export default CrossRevealLoader;
