import { memo } from 'react';
import styled from '@emotion/styled';

import SectionTitle from './SectionTitle';
import type { ISectionTitleProps } from './SectionTitle';
import SectionContainer from './SectionContainer';
import type { ISectionContainerProps } from './SectionContainer';

export interface SectionProps extends ISectionTitleProps, ISectionContainerProps {}

const SectionWrap = styled.section`
  border-radius: calc(10rem / 16);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px 0 var(--color-white-10);
  }
  > * {
    font-family: 'Bold';
    padding: calc(20rem / 16);
  }
`;

function Section({ title, content, h, isScroll = false }: SectionProps) {
  return (
    <SectionWrap>
      <SectionTitle title={title} />
      <SectionContainer content={content} h={h} isScroll={isScroll} />
    </SectionWrap>
  );
}

export default memo(Section);
