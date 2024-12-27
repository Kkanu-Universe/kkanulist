import Check from '@atom/Input/Check';
import Label from '@atom/Label';

import { CheckboxWrap } from './styles';
import { ICheckboxProps } from './types';

function Checkbox({ checkProps, labelProps }: ICheckboxProps) {
  return (
    <CheckboxWrap>
      <Check {...checkProps} />
      <Label {...labelProps} />
    </CheckboxWrap>
  );
}

export default Checkbox;