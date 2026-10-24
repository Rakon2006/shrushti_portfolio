import React from 'react';

interface MarkerCircleProps {
  children: React.ReactNode;
  a?: number;
  b?: number;
  color?: string;
  width?: number;
  height?: number;
  rotate?: number;
  className?: string;
}

export const MarkerCircle: React.FC<MarkerCircleProps> = ({
  children,
  a = 0.3,
  b = 0.45,
  color = 'var(--color-marker-red)',
  width = 110,
  height = 56,
  rotate = -3,
  className = ''
}) => {
  const pathLen = 380;

  return (
    <span className={`marker-circle-container k ${className}`} style={{ '--a': a, '--b': b } as React.CSSProperties}>
      {children}
      <svg
        className="marker-circle-svg"
        width={width}
        height={height}
        viewBox="0 0 110 56"
        fill="none"
        style={{
          '--rot': `${rotate}deg`,
          filter: 'url(#ink-wobble)'
        } as React.CSSProperties}
        aria-hidden="true"
      >
        {/* Organic hand-drawn ellipse with start overshoot and end overlap */}
        <path
          d="M 16,30 C 14,14 42,6 74,8 C 96,10 106,20 104,36 C 101,48 76,53 42,51 C 18,49 4,40 6,24 C 8,12 36,4 78,5 C 92,6 102,12 105,22"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="marker-stroke-path"
          style={{
            '--path-len': pathLen
          } as React.CSSProperties}
        />
      </svg>
    </span>
  );
};
