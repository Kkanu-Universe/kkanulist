import { memo } from 'react';
import styled from '@emotion/styled';

import type { ITextProps } from '@atom/Input/Text';
import TextMsg from '@atom/Input/TextMsg';
import type { ITextWarnMsgProps } from '@atom/Input/TextMsg';

import Text from '@atom/Input/Text';

export interface TextBoxProps extends ITextProps, ITextWarnMsgProps {}

const TextBoxWrap = styled.div`
  margin-bottom: calc(20rem / 16);
`;

function TextBox({ msg = '', msgColor = '', ...rest }: TextBoxProps) {
  return (
    <TextBoxWrap>
      <Text {...rest} />
      <TextMsg msg={msg} msgColor={msgColor} />
    </TextBoxWrap>
  );
}

export default memo(TextBox);
