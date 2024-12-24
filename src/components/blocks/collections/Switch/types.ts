export interface ISwitchProps {
  id: string;
  checked: boolean;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export type ISwitchTextStyle = {
  checked: 'on' | 'off';
}