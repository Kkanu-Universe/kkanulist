import React, { memo } from 'react';
import styled from '@emotion/styled';

interface ITextStyleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: string;
}

export const TextWrap = styled.input<ITextStyleProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || 'calc(100% - calc(14rem / 16))'};
  height: 35px;
  padding-left: calc(10rem / 16);
  border: 1px solid var(--color-primary-light);
`;

export interface ITextProps extends ITextStyleProps {}

function Text({ value, ...rest }: ITextProps) {
  return <TextWrap {...rest} value={value || ''} />;
}

export default memo(Text);
