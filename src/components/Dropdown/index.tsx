import { useState, useCallback } from 'react';
import Select, { ActionMeta } from 'react-select';

import { customStyleIcon, customStyleSelect, DropdownContainer } from 'components/Dropdown/styles';
import Button from 'components/Button';

function Dropdown({
  options,
  placeholder,
  noOptionsMessage = 'Nenhuma opção encontrada',
  buttonConfig,
  Icon,
  onSelect,
}: IDropdownProps) {
  const [option, setOption] = useState<IOption>();
  const handleOnButtonClick = useCallback(
    (event?: React.MouseEvent<HTMLButtonElement>) => {
      buttonConfig?.onClick && buttonConfig.onClick(event, option);
    },
    [buttonConfig, option],
  );

  const handleOnOptionClick = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
    setOption(newValue as IOption);
    onSelect && onSelect(newValue, actionMeta);
  };

  return (
    <DropdownContainer>
      {Icon && <Icon role="img" color="#808080" size={24} style={customStyleIcon} />}
      <Select
        aria-labelledby="Selecionar"
        name="ubs"
        options={options}
        placeholder={placeholder}
        styles={customStyleSelect}
        noOptionsMessage={() => noOptionsMessage}
        onChange={handleOnOptionClick}
      />
      {buttonConfig && <Button {...buttonConfig} onClick={handleOnButtonClick} />}
    </DropdownContainer>
  );
}

export default Dropdown;
