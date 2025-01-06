import React, { memo } from 'react';
import styled from '@emotion/styled';

import Label from '@atom/Label';

export interface IRadioStyleProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface IRadioProps extends IRadioStyleProps {
  label: string;
  htmlFor: string;
}

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 0.5rem;
`;

export const RadioWrap = styled.input`
  padding: 0;
  margin-top: 0;
`;

function Radio({ label, htmlFor, ...rest }: IRadioProps) {
  return (
    <RadioContainer>
      <Label htmlFor={htmlFor}>{label}</Label>
      <RadioWrap type='radio' {...rest} id={htmlFor} />
    </RadioContainer>
  );
}

export default memo(Radio);
