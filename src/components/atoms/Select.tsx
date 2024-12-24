import React, { useId, memo } from 'react';
import styled from 'styled-components';

export interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: { text: string; value: any }[];
}

const SelectWrap = styled.select`
  width: 100%;
  max-width: 300px;
  height: 40px;
  border-radius: 0;
  font-size: 14px;
  :not(:internal-list-box) {
    padding: 0 10px;
  }
`;

function Select({ options, ...rest }: ISelectProps) {
  const uuid = useId();

  return (
    <SelectWrap {...rest}>
      {options.map((option, idx) => (
        <option value={option.value} key={`select-${uuid}-${idx}`}>
          {option.text}
        </option>
      ))}
    </SelectWrap>
  );
}

export default memo(Select);
