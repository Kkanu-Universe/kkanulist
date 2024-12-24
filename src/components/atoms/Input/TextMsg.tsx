import React, { memo } from 'react';
import styled from 'styled-components';

interface ITextWarnMsgStyleProps {
  msgColor?: string;
}

export interface ITextWarnMsgProps extends ITextWarnMsgStyleProps {
  msg?: string;
}

const TextWarnMsgWrap = styled.div<ITextWarnMsgStyleProps>`
  margin-top: calc(5rem / 16);
  font-size: calc(12rem / 16);
  color: var(${({ msgColor }) => msgColor || '--color-red'});
`;

function TextMsg({ msgColor, msg }: ITextWarnMsgProps) {
  return msg ? <TextWarnMsgWrap msgColor={msgColor}>{msg}</TextWarnMsgWrap> : null;
}

export default memo(TextMsg);
