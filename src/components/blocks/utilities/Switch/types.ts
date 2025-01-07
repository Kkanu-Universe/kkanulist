export interface ISwitchProps {
  id: string;
  checked: boolean;
  text: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export type ISwitchTextStyle = {
  checked: 'on' | 'off';
};