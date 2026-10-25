'use client';

import React from 'react';

export interface SectionCurtainProps {
  num?: string;
  title?: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Modern Sleek Section Wrapper
 * Delivers immediate, clean, unobstructed content flow with zero curtain delays.
 */
export const SectionCurtain: React.FC<SectionCurtainProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`section-sleek-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default SectionCurtain;
