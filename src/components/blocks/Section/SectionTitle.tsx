import React, { memo } from 'react';

import { SectionTitleWrap } from './styles';

export interface ISectionTitleProps {
  title?: React.ReactNode | string;
}

function SectionTitle({ title }: ISectionTitleProps) {
  return <SectionTitleWrap>{title}</SectionTitleWrap>;
}

export default memo(SectionTitle);
