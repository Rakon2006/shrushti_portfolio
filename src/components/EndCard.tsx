'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUp, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';

export const EndCard: React.FC = () => {
  const { builder } = portfolioData;
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(builder.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="chapter-colophon"
      data-chapter="colophon"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="05"
          title="CONTACT US"
          subtitle="DIRECT INQUIRIES & ROLES"
          bgColor="var(--color-ink-primary)"
          textColor="var(--color-paper-white)"
        >

        {/* Main Content Viewport */}
        <div
          className="camera-rig"
          style={{
            maxWidth: 'var(--stage-max-width)',
            margin: '0 auto',
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {/* Main Closing Card */}
          <div
            style={{
              backgroundColor: 'var(--color-paper-card)',
              border: '1px solid rgba(15,23,42,0.08)',
              borderRadius: '12px',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: 'var(--shadow-paper-float)',
              position: 'relative',
              maxWidth: '920px',
              margin: '0 auto',
              width: '100%'
            }}
          >
            <MaskingTape position="top-center" width={85} rotate={-1} style={{ top: -10 }} />

            <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-cobalt)', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                CONTACT US
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.1,
                  color: 'var(--color-ink-primary)'
                }}
              >
                Open to Senior AI/ML Engineer <br />
                <span style={{ color: 'var(--color-marker-red)' }}>and AI Engineer roles.</span>
              </h2>

              <p style={{ marginTop: '1.25rem', fontSize: '1.08rem', lineHeight: 1.6, color: 'var(--color-ink-primary)', maxWidth: '620px', margin: '1.25rem auto 0', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                <a href={`mailto:${builder.email}`} style={{ color: 'var(--color-cobalt)', textDecoration: 'none' }}>
                  {builder.email}
                </a>
                <span style={{ margin: '0 0.5rem', color: 'var(--color-ink-muted)' }}>·</span>
                <a href={`tel:${builder.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {builder.phone}
                </a>
              </p>
            </div>

            {/* Direct Verified Channels Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
                marginBottom: '2rem'
              }}
            >
              {/* Email Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(15,23,42,0.08)',
                  borderRadius: '8px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-ink-muted)' }}>
                    DIRECT EMAIL
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: copied ? 'var(--color-muted-green)' : 'var(--color-cobalt)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${builder.email}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--color-ink-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Mail size={16} color="var(--color-marker-red)" />
                  <span>{builder.email}</span>
                </a>
              </div>

              {/* Phone Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(15,23,42,0.08)',
                  borderRadius: '8px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-ink-muted)' }}>
                  DIRECT TELEPHONE
                </span>
                <a
                  href={`tel:${builder.phone}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--color-ink-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Phone size={16} color="var(--color-cobalt)" />
                  <span>{builder.phone}</span>
                </a>
              </div>

              {/* Location Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(15,23,42,0.08)',
                  borderRadius: '8px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-ink-muted)' }}>
                  CURRENT LOCATION
                </span>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--color-ink-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <MapPin size={16} color="var(--color-muted-green)" />
                  <span>{builder.location}</span>
                </div>
              </div>
            </div>

            {/* Bottom Colophon Footer */}
            <div
              style={{
                borderTop: '1px solid rgba(28,27,25,0.08)',
                paddingTop: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-ink-muted)' }}>
                <span>{builder.name} · {builder.title}</span>
                <span style={{ display: 'block', fontSize: '0.62rem', marginTop: '2px' }}>
                  Next.js App Router · TypeScript · Editorial Analog Design System
                </span>
              </div>

              <button
                onClick={scrollToTop}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--color-ink-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'none',
                  border: '1px solid rgba(28,27,25,0.15)',
                  padding: '6px 12px',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              >
                <ArrowUp size={13} />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default EndCard;
