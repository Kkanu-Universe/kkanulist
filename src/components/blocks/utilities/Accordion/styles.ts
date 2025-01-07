import styled from '@emotion/styled';

import { BtnWrap } from '@atom/Button';

export type TAccordionItemWrapStyleProps = {
  isVisible?: boolean;
}

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AccordionItemWrap = styled.div<TAccordionItemWrapStyleProps>`
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > * {
    padding: var(--space-default);
  }
`;

export const AccordionTitle = styled.div``;

export const AccordionButton = styled.button``;

export const AccordionContent = styled(BtnWrap)``;