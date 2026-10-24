'use client';

import React, { useEffect, useRef } from 'react';

export const TechnicalNotebookBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only activate mouse tracking on desktop devices with fine pointer
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;

    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.4;
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        container.classList.add('has-mouse');
      }

      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          container.style.setProperty('--mouse-x', `${targetX}px`);
          container.style.setProperty('--mouse-y', `${targetY}px`);
          rafId = null;
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="technical-notebook-bg"
      aria-hidden="true"
    >
      {/* 1. Base Graph Paper Dual-Grid (Minor 24px + Major 120px) */}
      <div className="technical-notebook-bg__grid" />

      {/* 2. Soft Ambient Highlight Sweep */}
      <div className="technical-notebook-bg__sweep" />

      {/* 3. Pointer Spotlight (Desktop Subtle Radial Reveal) */}
      <div className="technical-notebook-bg__spotlight" />

      {/* 4. Left Margin Architectural Ruler Guide */}
      <div className="technical-notebook-bg__ruler">
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className={`technical-notebook-bg__ruler-tick ${
              i % 5 === 0 ? 'technical-notebook-bg__ruler-tick--major' : ''
            }`}
          />
        ))}
      </div>

      {/* 5. Precision Corner Crosshair Registration Marks */}
      <div className="technical-notebook-bg__crosshair technical-notebook-bg__crosshair--tl">
        + 00°00'00"N
      </div>
      <div className="technical-notebook-bg__crosshair technical-notebook-bg__crosshair--tr">
        ⌖ 77°35'40"E
      </div>
      <div className="technical-notebook-bg__crosshair technical-notebook-bg__crosshair--bl">
        ⌖ REF_GRID_24
      </div>
      <div className="technical-notebook-bg__crosshair technical-notebook-bg__crosshair--br">
        + SCALE 1:1
      </div>
    </div>
  );
};

export default TechnicalNotebookBackground;
