import { ISwitchProps } from './types';

import {
  SwitchContainer,
  SwitchWrap,
  SwitchInput,
  SwitchText,
} from './styles';

function Switch({ id, checked, text, onChange }: ISwitchProps) {
  return (
    <SwitchContainer>
      <SwitchWrap htmlFor={id}>
        <SwitchInput id={id} type='checkbox' checked={checked} onChange={onChange} />
        <SwitchText checked={checked ? 'on' : 'off'}>{text}</SwitchText>
      </SwitchWrap>
    </SwitchContainer>
  );
}

export default Switch;