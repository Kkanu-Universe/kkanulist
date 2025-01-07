import { memo } from 'react';
import styled from '@emotion/styled';

import Label from '@atom/Label';
import Select from '@atom/Select';
import type { ISelectProps } from '@atom/Select';
import type { ITextWarnMsgProps } from '@atom/Input/TextMsg';
import TextMsg from '@atom/Input/TextMsg';

interface SelectBoxWrapProps extends ISelectProps, ITextWarnMsgProps {
  htmlFor?: string;
  label?: string;
}

const SelectContainer = styled.div``;

const SelectBoxWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-grey-90);
  > *:first-of-type {
    margin-right: 10px;
  }
  border-radius: calc(4rem / 16);
`;

function SelectBox({ label, htmlFor, msg, msgColor, options, ...rest }: SelectBoxWrapProps) {
  return (
    <SelectContainer>
      <SelectBoxWrap id={htmlFor}>
        <Label htmlFor={htmlFor}>{label}</Label>
        <Select options={options} {...rest} />
      </SelectBoxWrap>
      <TextMsg msg={msg} msgColor={msgColor} />
    </SelectContainer>
  );
}

export default memo(SelectBox);
