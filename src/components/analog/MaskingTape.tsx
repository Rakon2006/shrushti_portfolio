import React from 'react';

interface MaskingTapeProps {
  position?: 'top-center' | 'top-left' | 'top-right' | 'diagonal-corner' | 'custom';
  rotate?: number;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const MaskingTape: React.FC<MaskingTapeProps> = ({
  position = 'top-center',
  rotate,
  width,
  className = '',
  style = {}
}) => {
  const getPositionClass = () => {
    switch (position) {
      case 'top-left':
        return 'tape-top-left';
      case 'top-right':
        return 'tape-top-right';
      case 'diagonal-corner':
        return 'tape-diagonal-corner';
      case 'top-center':
      default:
        return 'tape-top-center';
    }
  };

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(rotate !== undefined ? { transform: `rotate(${rotate}deg)` } : {}),
    ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {})
  };

  return (
    <div
      className={`masking-tape ${position !== 'custom' ? getPositionClass() : ''} ${className}`}
      style={combinedStyle}
      aria-hidden="true"
    />
  );
};
