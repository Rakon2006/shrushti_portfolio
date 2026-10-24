'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavPoint {
  id: string;
  num: string;
  label: string;
  title: string;
}

const NAV_POINTS: NavPoint[] = [
  { id: 'chapter-work', num: '01', label: 'WORK', title: '01 Work & Case Studies' },
  { id: 'chapter-quotation', num: '02', label: 'QUOTATION', title: '02 AI Quotation Platform' },
  { id: 'chapter-assistant', num: '03', label: 'ASSISTANT', title: '03 Enterprise Chatbot & RAG' },
  { id: 'chapter-mlops', num: '04', label: 'MLOPS', title: '04 Document Intelligence & MLOps' },
  { id: 'chapter-quality', num: '05', label: 'QUALITY', title: '05 AI Evaluation & Quality' },
  { id: 'chapter-experience', num: '06', label: 'EXPERIENCE', title: '06 Professional Experience' },
  { id: 'chapter-skills', num: '07', label: 'AI STACK', title: '07 AI Engineering Stack' },
  { id: 'chapter-colophon', num: '08', label: 'CONTACT', title: '08 Colophon & Contact' }
];

export const SiteNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('chapter-cover');

  // Track active section via IntersectionObserver & scroll spy
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sectionIds = ['chapter-cover', ...NAV_POINTS.map((p) => p.id)];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140; // Offset for sticky header
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Support direct hash navigation on initial landing
    if (window.location.hash) {
      const initialId = window.location.hash.replace('#', '');
      const targetEl = document.getElementById(initialId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(initialId);
        }, 300);
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (typeof window === 'undefined') return;
    setActiveSection(id);

    if (window.location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    setActiveSection('chapter-cover');
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height, 64px)',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(0.75rem, 2.5vw, 2.5rem)',
        background: 'rgba(242, 239, 231, 0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(28, 27, 25, 0.08)'
      }}
    >
      {/* Brand / Professional Mark */}
      <div
        className="nav-pop-item nav-pop--brand"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
          marginRight: '0.75rem'
        }}
      >
        <button
          onClick={scrollToTop}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.4rem',
            textAlign: 'left',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0
          }}
          aria-label="Srushti Lohiya Portfolio Home"
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
              letterSpacing: '-0.02em',
              color: 'var(--color-ink-primary)',
              whiteSpace: 'nowrap'
            }}
          >
            {portfolioData.builder.name}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: 'var(--color-marker-red)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap'
            }}
          >
            / AI·ML ENG
          </span>
        </button>
      </div>

      {/* Chapter Navigation Links: All 8 Points */}
      <nav
        aria-label="Portfolio Chapters"
        className="desktop-nav-links"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(0.18rem, 0.45vw, 0.55rem)',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          padding: '4px 0',
          flex: '1 1 auto',
          justifyContent: 'center',
          maxWidth: '920px'
        }}
      >
        {NAV_POINTS.map((item, index) => {
          const isActive = activeSection === item.id;
          const popClass = `nav-pop-item nav-pop--${index + 1}`;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-item ${popClass}`}
              title={item.title}
              aria-current={isActive ? 'true' : undefined}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.64rem, 0.72vw, 0.72rem)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--color-ink-primary)' : 'var(--color-ink-secondary)',
                backgroundColor: isActive ? 'rgba(232, 226, 212, 0.95)' : 'transparent',
                boxShadow: isActive ? '0 1px 3px rgba(28, 27, 25, 0.12)' : 'none',
                transform: isActive ? 'rotate(-0.5deg)' : 'none',
                fontWeight: isActive ? 700 : 500,
                border: isActive
                  ? '1px solid rgba(28, 27, 25, 0.14)'
                  : '1px solid transparent',
                padding: '0.24rem clamp(0.32rem, 0.5vw, 0.55rem)',
                borderRadius: '2px',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.18s ease-out',
                flexShrink: 0
              }}
            >
              <span
                style={{
                  color: isActive ? 'var(--color-cobalt)' : 'inherit',
                  marginRight: '0.28rem',
                  fontWeight: 700
                }}
              >
                {item.num}
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Verified Direct Contact Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexShrink: 0,
          marginLeft: '0.75rem'
        }}
      >
        <a
          href={`tel:${portfolioData.builder.phone}`}
          title={`Call ${portfolioData.builder.phone}`}
          aria-label="Direct Phone Call"
          className="nav-pop-item nav-pop--phone"
          style={{
            color: 'var(--color-ink-primary)',
            padding: '0.32rem 0.55rem',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            border: '1px solid rgba(28, 27, 25, 0.15)',
            background: 'var(--color-paper-white)',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-mono)',
            transition: 'all 0.15s',
            whiteSpace: 'nowrap'
          }}
        >
          <Phone size={13} color="var(--color-cobalt)" />
          <span className="hide-on-mobile">{portfolioData.builder.phone}</span>
        </a>
        <a
          href={`mailto:${portfolioData.builder.email}`}
          title={`Email ${portfolioData.builder.email}`}
          aria-label="Direct Email"
          className="nav-pop-item nav-pop--contact"
          style={{
            color: '#FAF7F0',
            background: 'var(--color-ink-primary)',
            padding: '0.32rem 0.65rem',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            transition: 'all 0.15s',
            whiteSpace: 'nowrap'
          }}
        >
          <Mail size={13} color="var(--color-highlighter)" />
          <span>CONTACT</span>
        </a>
      </div>
    </header>
  );
};

export default SiteNavigation;
