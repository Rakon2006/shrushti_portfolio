'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { HeroScrapbookGraphic } from './HeroScrapbookGraphic';

export const EditorialCover: React.FC = () => {
  const { builder } = portfolioData;
  const [introSettled, setIntroSettled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setReducedMotion(true);
      setIntroSettled(true);
      return;
    }

    // 1.8s entrance sequence before continuous animation begins seamlessly
    const timer = setTimeout(() => {
      setIntroSettled(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    if (typeof window === 'undefined') return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <section
      id="chapter-cover"
      data-chapter="cover"
      className="scroll-chapter paper-stage portfolio-hero"
    >
      <div className="scroll-stage">
        {/* Subtle Living Paper Grain Background Layer */}
        <div className="portfolio-hero__ambient-paper" aria-hidden="true" />

        {/* Hero Architectural Measurement Marks & Blueprint Margin Registration */}
        <div className="section-blueprint-layer" aria-hidden="true">
          <div className="work-reg-mark work-reg-mark--tl" style={{ top: '80px', left: 'clamp(14px, 2.5vw, 36px)' }} />
          <div className="work-reg-mark work-reg-mark--tr" style={{ top: '80px', right: 'clamp(14px, 2.5vw, 36px)' }} />
        </div>

        {/* Camera Rig Viewport */}
        <div className="camera-rig portfolio-hero__camera-rig">
          {/* Top Metadata Bar: Eyebrow & Archival Stamp */}
          <div className="portfolio-hero__top-meta">
            <div className="portfolio-hero__eyebrow">
              <span className="portfolio-hero__eyebrow-dot">●</span>
              <span>{builder.openingEyebrow}</span>
            </div>

            <div className="portfolio-hero__academic-stamp">
              {builder.descriptor} · BENGALURU, INDIA
            </div>
          </div>

          {/* Main Two-Column Editorial Spread */}
          <div className="portfolio-hero__main-grid">
            {/* Left Column: Headline, Annotations, Paragraph, CTAs */}
            <div className="portfolio-hero__left">
              {/* Torn Decorative Color Strips above Headline */}
              <div className="portfolio-hero__decor-strip" aria-hidden="true">
                {/* Serrated Cobalt Strip (Beat 01 stroke reveal) */}
                <svg
                  width="86"
                  height="12"
                  viewBox="0 0 86 12"
                  fill="none"
                  className="portfolio-hero__decor-blue"
                >
                  <path
                    d="M 0 0 L 86 0 L 86 8 L 82 12 L 78 7 L 74 12 L 70 7 L 66 12 L 62 8 L 58 12 L 54 7 L 50 12 L 46 8 L 42 12 L 38 7 L 34 12 L 30 7 L 26 12 L 22 8 L 18 12 L 14 7 L 10 12 L 6 8 L 0 11 Z"
                    fill="var(--hero-blue, #334FA1)"
                  />
                </svg>
                {/* Red Marker Stroke (Beat 01 pen draw) */}
                <svg
                  width="68"
                  height="4"
                  viewBox="0 0 68 4"
                  fill="none"
                  className="portfolio-hero__decor-red"
                >
                  <path
                    d="M 1 2 C 20 1, 48 3, 67 2"
                    stroke="var(--hero-red, #E34B3C)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    className="portfolio-hero__decor-red-path"
                  />
                </svg>
              </div>

              {/* Main Editorial Display Heading (Beat 01 fade & settle) */}
              <h1 className="portfolio-hero__headline" style={{ lineHeight: 1.02 }}>
                <span className="portfolio-hero__headline-line">AI SYSTEMS.</span>
                <span className="portfolio-hero__headline-line">BUILT FOR</span>
                <span className="portfolio-hero__headline-line portfolio-hero__headline-life">
                  THE{' '}
                  <span className="portfolio-hero__highlighter-wrap">
                    {/* Organic Yellow Highlighter Shape (Beat 02 smooth sweep & periodic ink breathing) */}
                    <svg
                      className="portfolio-hero__highlighter-svg"
                      viewBox="0 0 280 64"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M 6 12 C 55 7, 150 9, 272 6 C 278 20, 275 46, 271 58 C 190 61, 85 55, 8 59 C 4 43, 5 24, 6 12 Z"
                        fill="var(--hero-yellow, #F0E357)"
                      />
                    </svg>
                    <span className="portfolio-hero__highlighter-text">REAL WORLD.</span>
                  </span>
                </span>
              </h1>

              {/* Supporting Lede */}
              <div
                className="portfolio-hero__lede"
                style={{
                  maxWidth: '580px',
                  marginTop: '1rem',
                  fontSize: '1.02rem',
                  lineHeight: '1.6',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                {builder.openingLede.split('\n\n').map((para, idx) => (
                  <p
                    key={idx}
                    style={{
                      margin: 0,
                      fontWeight: idx === 0 ? 500 : 400,
                      color: idx === 0 ? 'var(--hero-ink, #111)' : 'inherit'
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Hero Call to Actions */}
              <div
                className="portfolio-hero__cta-container"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginTop: '1.6rem',
                  flexWrap: 'wrap'
                }}
              >
                <button
                  onClick={() => scrollTo('chapter-work')}
                  className="portfolio-hero__cta"
                  title="Explore Case Studies"
                  style={{ cursor: 'pointer' }}
                >
                  <span className="portfolio-hero__cta-text">
                    EXPLORE SELECTED WORK <span className="portfolio-hero__cta-arrow">↘</span>
                  </span>
                  {/* Hand-drawn Red Underline (Beat 04 stroke draw & hover extend) */}
                  <svg
                    className="portfolio-hero__cta-underline"
                    viewBox="0 0 250 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 2 4 C 65 2, 175 5, 248 3.5"
                      stroke="var(--hero-red, #E34B3C)"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      className="portfolio-hero__cta-underline-path"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => scrollTo('chapter-experience')}
                  className="portfolio-hero__exp-btn"
                  title="View Experience"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    color: 'var(--color-cobalt)',
                    padding: '0.5rem 1rem',
                    border: '1.5px solid var(--color-cobalt)',
                    borderRadius: '2px',
                    background: 'rgba(51, 79, 161, 0.04)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease-out'
                  }}
                >
                  <span>VIEW EXPERIENCE</span>
                  <ArrowRight size={14} className="portfolio-hero__exp-arrow" />
                </button>
              </div>

              {/* Handwritten Footnote */}
              <div
                className="portfolio-hero__footnote"
                style={{
                  marginTop: '1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.15rem',
                    color: 'var(--color-ink-secondary)',
                    transform: 'rotate(-1deg)'
                  }}
                >
                  ✎ "{builder.annotations[1]}" · "{builder.annotations[2]}"
                </span>
              </div>
            </div>

            {/* Right Column: Full-Size Monochrome AI Engineering Scrapbook Collage */}
            <div className="portfolio-hero__right">
              <div className="portfolio-hero__collage-wrap">
                {/* Scrapbook Container: Beat 03 Desk Landing -> Continuous Smooth Sway & Micro-Motion Overlay */}
                <HeroScrapbookGraphic
                  introSettled={introSettled}
                  reducedMotion={reducedMotion}
                  onNavigateChapter={scrollTo}
                />
              </div>
            </div>
          </div>

          {/* Bottom Integrated Scroll Indicator & Index Cue */}
          <div className="portfolio-hero__bottom-meta">
            <div className="portfolio-hero__scroll-cue">
              <span className="portfolio-hero__scroll-cue-dot" />
              <span>SCROLL TO EXPLORE ↓</span>
            </div>

            <div className="portfolio-hero__index-cue">
              INDEX: 01 WORK · 02 QUOTATION · 03 ASSISTANT · 04 MLOPS · 05 QUALITY · 06 EXP · 07 STACK · 08 CONTACT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialCover;
