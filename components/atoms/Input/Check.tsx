import React, { memo } from 'react';
import styled from '@emotion/styled';

export interface ICheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: calc(5rem / 16);
  &, & > * {
  cursor: pointer;
  }
`;

const CheckBase = styled.input`
  position: relative;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-gray-4) !important;
  border-radius: var(--border-radius-default);
  background-color: var(--color-gray-1);

  &::before, &::after {
    content: '';
    position: absolute;
    display: block;
    border-color: var(--color-gray-8);
  }
    
  &:checked {
    &::before {
      top: 9px;
      left: 2px;
      width: 8px;
      height: 2px;
      border-width: 2px 0 0 2px;
      border-style: solid;
      transform: rotate(45deg);
    }
    
    &::after {
      top: 8px;
      left: 6px;
      width: 11px;
      height: 2px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      transform: rotate(-45deg);
    }
  }
`;

function Check(checkProps: Omit<ICheckProps, 'type'>) {

  return (
    <CheckContainer>
      <CheckBase type='checkbox' {...checkProps} />
    </CheckContainer>
  );
}

export default memo(Check);
