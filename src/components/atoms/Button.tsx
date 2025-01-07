import React, { memo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface IBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
}

export const BtnStyle = css`
  width: 100%;
  color: var(--color-white-20);
  background-color: var(--color-primary-normal);
  border-radius: calc(16rem / 16);
  padding: calc(10rem / 16);
`;

export const BtnWrap = styled.button`
  ${BtnStyle}
`;

function Button({ type = 'button', children, onClick, ...rest }: IBtnProps) {
  return (
    <BtnWrap type={type} onClick={onClick} {...rest}>
      {children}
    </BtnWrap>
  );
}

export default memo(Button);
