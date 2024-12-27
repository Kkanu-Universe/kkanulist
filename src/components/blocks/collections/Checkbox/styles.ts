import styled from 'styled-components';

export const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-default);
  &, & > * {
    cursor: pointer;
  }
`;