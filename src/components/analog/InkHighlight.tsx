import React from 'react';

interface InkHighlightProps {
  children: React.ReactNode;
  a?: number; // Start timing (0..1)
  b?: number; // End timing (0..1)
  color?: string;
  className?: string;
}

export const InkHighlight: React.FC<InkHighlightProps> = ({
  children,
  a = 0.2,
  b = 0.35,
  color,
  className = ''
}) => {
  return (
    <mark
      className={`ink-highlight k ${className}`}
      style={{
        '--a': a,
        '--b': b,
        ...(color ? { '--color-highlighter': color } : {})
      } as React.CSSProperties}
    >
      {children}
    </mark>
  );
};
