import React from 'react';

interface PushPinProps {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PushPin: React.FC<PushPinProps> = ({
  color = 'var(--color-pin-head)',
  className = '',
  style = {}
}) => {
  return (
    <div className={`push-pin ${className}`} style={style} aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {/* Needle shadow */}
        <ellipse cx="14" cy="19" rx="5" ry="2.2" fill="rgba(28,27,25,0.22)" />
        {/* Metal Pin Shaft */}
        <path d="M 12 11 L 13.5 19.5" stroke="#999" strokeWidth="1.6" strokeLinecap="round" />
        {/* Push Pin Head Base */}
        <ellipse cx="11" cy="11" rx="5" ry="2.5" fill="#B32B20" />
        {/* Pin Body Cylindrical Grip */}
        <path d="M 7.5 10 C 7.5 7.5 8.5 6 11 6 C 13.5 6 14.5 7.5 14.5 10 Z" fill={color} />
        {/* Spherical Cap Highlight */}
        <circle cx="11" cy="5" r="4.2" fill={color} />
        <circle cx="9.5" cy="3.8" r="1.3" fill="rgba(255,255,255,0.65)" />
      </svg>
    </div>
  );
};
