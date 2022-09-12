import { useState } from 'react';

import {
  SwitchButton,
  SwitchContainer,
  SwitchInput,
  SwitchLabel,
  SwitchOption,
} from 'components/Switch/styles';

function Switch({ optionLeft, optionRight, onChange }: ISwitchProps) {
  const [isRight, setIsRight] = useState(false);

  const handleOnChange = () => {
    onChange && onChange(!isRight ? optionRight : optionLeft);
    setIsRight(prev => !prev);
  };

  return (
    <SwitchContainer>
      <SwitchInput
        id="react-switch-new"
        name="react-switch-new"
        type="checkbox"
        data-testid="test-switch"
        checked={isRight}
        onChange={handleOnChange}
      />
      <SwitchLabel htmlFor="react-switch-new">
        <SwitchOption>
          <span>{optionLeft.label}</span>
          <span>{optionRight.label}</span>
        </SwitchOption>
        <SwitchButton />
      </SwitchLabel>
    </SwitchContainer>
  );
}

export default Switch;
