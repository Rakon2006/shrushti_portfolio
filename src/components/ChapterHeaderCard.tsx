'use client';

import React from 'react';
import { SectionCurtain, type SectionCurtainProps } from './SectionCurtain';

export type ChapterHeaderCardProps = SectionCurtainProps;

export const ChapterHeaderCard: React.FC<ChapterHeaderCardProps> = (props) => {
  return <SectionCurtain {...props} />;
};

export default ChapterHeaderCard;
