import React, { memo } from 'react';
import styled from '@emotion/styled';

export interface ILabelStyleProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export interface ILabelProps extends ILabelStyleProps {}

const LabelWrap = styled.label<ILabelStyleProps>`
  color: var(--color-white-20);
  font-size: 14px;
`;

function Label({ children, ...rest }: ILabelProps) {
  return <LabelWrap {...rest}>{children}</LabelWrap>;
}

export default memo(Label);
