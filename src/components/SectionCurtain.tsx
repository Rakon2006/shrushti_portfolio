'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TornStrip } from './analog/TornStrip';

export interface SectionCurtainProps {
  num: string;
  title: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  className?: string;
}

export const SectionCurtain: React.FC<SectionCurtainProps> = ({
  num,
  title,
  subtitle = 'CHAPTER',
  bgColor = 'var(--color-cobalt)',
  textColor = 'var(--color-paper-white)',
  children,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [curtainState, setCurtainState] = useState<'idle' | 'visible' | 'lifting' | 'revealed'>('idle');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user's reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurtainState('revealed');
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let liftTimeout: NodeJS.Timeout;
    let settleTimeout: NodeJS.Timeout;
    let hasTriggered = false;

    const runCurtainSequence = (holdDuration = 450) => {
      hasTriggered = true;
      setCurtainState('visible');
      liftTimeout = setTimeout(() => {
        setCurtainState('lifting');
        settleTimeout = setTimeout(() => {
          setCurtainState('revealed');
        }, 880); // Matches CSS transition duration
      }, holdDuration);
    };

    const checkVisibility = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight || 800;

      // Rule 1: NEVER trigger on page refresh when user is at top of page (hero)
      if (num === '01' && scrollY < 120) {
        if (hasTriggered) {
          clearTimeout(liftTimeout);
          clearTimeout(settleTimeout);
          hasTriggered = false;
          setCurtainState('idle');
        }
        return;
      }

      // Rule 2: If the section is scrolled below the viewport, reset to idle so it can be revealed again
      if (rect.top > vh) {
        if (hasTriggered) {
          clearTimeout(liftTimeout);
          clearTimeout(settleTimeout);
          hasTriggered = false;
          setCurtainState('idle');
        }
        return;
      }

      // Rule 3: Trigger curtain lift only when user has actively scrolled to the section
      // and it is substantially in view
      if (!hasTriggered && rect.top <= vh * 0.72 && rect.bottom >= 100) {
        if (scrollY < 100 && num === '01') return;
        runCurtainSequence(450);
      }
    };

    // Listen on scroll and resize
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    // Initial check (only if user refreshed while already scrolled down into this section)
    const initialScrollY = window.scrollY || window.pageYOffset || 0;
    if (initialScrollY >= 120 || num !== '01') {
      checkVisibility();
    }

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      clearTimeout(liftTimeout);
      clearTimeout(settleTimeout);
    };
  }, [num]);

  return (
    <div
      ref={containerRef}
      className={`section-curtain ${curtainState === 'revealed' ? 'is-revealed' : ''} ${className}`}
    >
      {/* The Physical Stage Curtain Panel Layer */}
      <div
        className={`section-curtain__panel ${
          curtainState === 'lifting' ? 'is-lifting' : ''
        } ${curtainState === 'revealed' ? 'is-revealed' : ''}`}
        style={{
          backgroundColor: bgColor,
          color: textColor
        }}
      >
        {/* Top Metadata */}
        <div className="section-curtain__top-meta">
          <span className="section-curtain__subtitle">
            {subtitle} {num}
          </span>
          <span className="section-curtain__field-notes">
            FIELD NOTES // AI SYSTEMS
          </span>
        </div>

        {/* Main Chapter Display Typography */}
        <div className="section-curtain__typography">
          <span className="section-curtain__large-num" aria-hidden="true">
            {num}
          </span>
          <h2 className="section-curtain__title">
            {title}
          </h2>
        </div>

        {/* Bottom Detail */}
        <div className="section-curtain__bottom-meta">
          <span className="section-curtain__hand-script">
            AI Engineering Field Notes / Srushti Lohiya
          </span>
          <div className="section-curtain__divider" />
        </div>

        {/* Torn Paper Edge Hanging Off Bottom */}
        <div className="section-curtain__torn-edge" aria-hidden="true">
          <TornStrip color={bgColor} height={20} />
        </div>

        {/* Soft Moving Shadow Beneath the Torn Edge */}
        <div className="section-curtain__shadow" aria-hidden="true" />
      </div>

      {/* The Actual Underlying Section Content Being Revealed */}
      {children && (
        <div className="section-curtain__content">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionCurtain;
