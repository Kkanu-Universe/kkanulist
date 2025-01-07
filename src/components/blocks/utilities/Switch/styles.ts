import styled from '@emotion/styled';

import { ISwitchTextStyle } from './types';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchWrap = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-gray-4);
  border-radius: 50px;
  background-color: var(--color-gray-1);
  height: 28px;
  padding: 2px 1px;
  cursor: pointer;
`;

export const SwitchInput = styled.input`
  position: absolute;
  &:not(:checked) {
    left: 0;
  }
  left: calc(100% - 26px);
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--color-gray-8);
  transition: left 0.15s ease-in-out;
  cursor: pointer;
  z-index: 2;
`;

export const SwitchText = styled.div<ISwitchTextStyle>`
  display: flex;
  align-items: center;
  margin: ${({ checked }) => checked === 'on' ? '0 26px 0 4px;' : '0 4px 0 26px;'};
  cursor: pointer;
  z-index: 1;
`;
