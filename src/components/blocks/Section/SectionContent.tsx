import React, { memo } from 'react';

import { SectionContentWrap } from './styles';

export interface ISectionContentProps {
  content: React.ReactNode;
  className?: string;
}

function SectionContent({ content, className }: ISectionContentProps) {
  return <SectionContentWrap className={className}>{content}</SectionContentWrap>;
}

export default memo(SectionContent);
