import React from 'react';

interface MarkerArrowProps {
  a?: number;
  b?: number;
  color?: string;
  width?: number;
  height?: number;
  rotate?: number;
  direction?: 'curve-down-right' | 'curve-up-right' | 'straight-right' | 'curve-left';
  className?: string;
  style?: React.CSSProperties;
}

export const MarkerArrow: React.FC<MarkerArrowProps> = ({
  a = 0.35,
  b = 0.5,
  color = 'var(--color-marker-red)',
  width = 72,
  height = 42,
  rotate = 0,
  direction = 'curve-down-right',
  className = '',
  style = {}
}) => {
  const pathLen = 140;

  const renderPath = () => {
    switch (direction) {
      case 'curve-up-right':
        return (
          <>
            <path
              d="M 6,36 C 28,34 50,22 62,8"
              stroke={color}
              strokeWidth="2.8"
              strokeLinecap="round"
              className="marker-stroke-path"
              style={{ '--path-len': pathLen } as React.CSSProperties}
            />
            <path
              d="M 48,6 L 64,8 L 60,22"
              stroke={color}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="marker-stroke-path"
              style={{ '--path-len': 40 } as React.CSSProperties}
            />
          </>
        );
      case 'curve-left':
        return (
          <>
            <path
              d="M 64,10 C 44,14 24,26 8,34"
              stroke={color}
              strokeWidth="2.8"
              strokeLinecap="round"
              className="marker-stroke-path"
              style={{ '--path-len': pathLen } as React.CSSProperties}
            />
            <path
              d="M 22,24 L 6,34 L 18,38"
              stroke={color}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="marker-stroke-path"
              style={{ '--path-len': 40 } as React.CSSProperties}
            />
          </>
        );
      case 'straight-right':
        return (
          <>
            <path
              d="M 6,21 C 26,20 46,22 64,21"
              stroke={color}
              strokeWidth="2.8"
              strokeLinecap="round"
              className="marker-stroke-path"
              style={{ '--path-len': pathLen } as React.CSSProperties}
            />
            <path
              d="M 52,12 L 66,21 L 52,29"
              stroke={color}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="marker-stroke-path"
              style={{ '--path-len': 40 } as React.CSSProperties}
            />
          </>
        );
      case 'curve-down-right':
      default:
        return (
          <>
            <path
              d="M 6,8 C 24,12 44,22 62,34"
              stroke={color}
              strokeWidth="2.8"
              strokeLinecap="round"
              className="marker-stroke-path"
              style={{ '--path-len': pathLen } as React.CSSProperties}
            />
            <path
              d="M 48,34 L 64,36 L 60,20"
              stroke={color}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="marker-stroke-path"
              style={{ '--path-len': 40 } as React.CSSProperties}
            />
          </>
        );
    }
  };

  return (
    <div
      className={`k ${className}`}
      style={{
        '--a': a,
        '--b': b,
        transform: `rotate(${rotate}deg)`,
        filter: 'url(#ink-wobble)',
        display: 'inline-block',
        pointerEvents: 'none',
        ...style
      } as React.CSSProperties}
      aria-hidden="true"
    >
      <svg width={width} height={height} viewBox="0 0 72 42" fill="none">
        {renderPath()}
      </svg>
    </div>
  );
};
