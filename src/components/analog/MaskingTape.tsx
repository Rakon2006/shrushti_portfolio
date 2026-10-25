import React from 'react';

interface MaskingTapeProps {
  position?: 'top-center' | 'top-left' | 'top-right' | 'diagonal-corner' | 'custom';
  rotate?: number;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

// In modern sleek tech mode, physical masking tape is stripped for clean minimalist cards
export const MaskingTape: React.FC<MaskingTapeProps> = () => null;

export default MaskingTape;
