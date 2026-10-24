'use client';

import React from 'react';

export const PaperGrain: React.FC = () => {
  return (
    <>
      {/* SVG Filter for Hand-Drawn Ink Wobble */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <filter id="ink-wobble">
            <feTurbulence
              id="paper-turbulence"
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="2"
              result="noise"
              seed="1"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Stepped Grain Texture Layer */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Soft Inset Vignette Layer */}
      <div className="vignette-overlay" aria-hidden="true" />
    </>
  );
};
