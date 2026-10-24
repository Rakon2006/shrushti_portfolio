import React from 'react';

interface TornStripProps {
  color?: string;
  height?: number;
  className?: string;
  flip?: boolean;
}

export const TornStrip: React.FC<TornStripProps> = ({
  color = 'var(--color-ink-primary)',
  height = 18,
  className = '',
  flip = false
}) => {
  return (
    <div
      className={`torn-strip ${className}`}
      style={{
        '--strip-color': color,
        height: `${height}px`,
        transform: flip ? 'scaleY(-1)' : 'none',
        filter: 'url(#ink-wobble)'
      } as React.CSSProperties}
      aria-hidden="true"
    />
  );
};
