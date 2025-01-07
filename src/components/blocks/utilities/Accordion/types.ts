export type TAccordionItemProps = {
  key: string;
  title: React.ReactNode;
  content?: React.ReactNode;
  isVisible?: boolean;
}

export interface IAccordionProps {
  items: TAccordionItemProps[];
  onChange?: (index: number) => void;
  firstVisible?: boolean;
}