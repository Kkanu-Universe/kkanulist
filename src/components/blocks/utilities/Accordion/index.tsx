import {
  AccordionContainer,
  AccordionItemWrap,
  AccordionHeader,
  AccordionTitle,
  AccordionButton,
  AccordionContent,
} from './styles';
import { IAccordionProps } from './types';

function Accordion({ items = [{ title: 'title', content: 'content', key: 'first', isVisible: true }], onChange, firstVisible }: IAccordionProps) {
  return (
    <AccordionContainer>
      {items.map(({ key, title, content, isVisible }, idx) => (
        <AccordionItemWrap key={`accordion-${key}-${idx}`}>
          <AccordionHeader>
            <AccordionTitle>{title}</AccordionTitle>
            <AccordionButton>button</AccordionButton>
          </AccordionHeader>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItemWrap>
      ))}
    </AccordionContainer>
  );
}

export default Accordion;