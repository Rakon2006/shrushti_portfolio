import React from 'react';
import { MaskingTape } from './MaskingTape';

interface HalftoneBadgeProps {
  className?: string;
  size?: number;
}

export const HalftoneBadge: React.FC<HalftoneBadgeProps> = ({
  className = '',
  size = 180
}) => {
  return (
    <div
      className={`halftone-badge-container ${className}`}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size * 1.15}px`,
        filter: 'drop-shadow(3px 8px 14px rgba(28, 27, 25, 0.16))'
      }}
    >
      <MaskingTape position="top-center" width={70} rotate={-2} style={{ top: -10 }} />

      {/* Irregular Hand-cut White Paper Border */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--color-paper-white)',
          padding: '8px 8px 24px 8px',
          boxSizing: 'border-box',
          clipPath: 'polygon(2% 1%, 98% 3%, 99% 97%, 1% 99%)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Halftone Graphic Canvas */}
        <div
          className="halftone-box"
          style={{
            flex: 1,
            backgroundColor: '#1C1B19',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            color: '#FAF7F0',
            border: '2px solid #333'
          }}
        >
          {/* Tech Grid Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.18,
              backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }}
          />

          {/* Builder Insignia */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.8rem',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                display: 'block'
              }}
            >
              SL
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                display: 'block',
                marginTop: '6px',
                color: 'var(--color-highlighter)'
              }}
            >
              AI ENGINEERING
            </span>
          </div>

          {/* Abstract Tensor Flow / Neural Weights Schematic */}
          <svg width="60" height="16" viewBox="0 0 60 16" fill="none" style={{ marginTop: '8px', zIndex: 2 }}>
            <circle cx="8" cy="8" r="3" fill="#F0E357" />
            <circle cx="30" cy="4" r="2.5" fill="#FAF7F0" />
            <circle cx="30" cy="12" r="2.5" fill="#FAF7F0" />
            <circle cx="52" cy="8" r="3" fill="#E34B3C" />
            <line x1="11" y1="8" x2="27.5" y2="4" stroke="#FAF7F0" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="11" y1="8" x2="27.5" y2="12" stroke="#FAF7F0" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="32.5" y1="4" x2="49" y2="8" stroke="#FAF7F0" strokeWidth="1" />
            <line x1="32.5" y1="12" x2="49" y2="8" stroke="#FAF7F0" strokeWidth="1" />
          </svg>
        </div>

        {/* Polaroid Style Label */}
        <div style={{ marginTop: '6px', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-secondary)',
              fontWeight: 600
            }}
          >
            BENGALURU, INDIA · 2026
          </span>
        </div>
      </div>
    </div>
  );
};
