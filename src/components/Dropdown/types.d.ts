interface IOption {
  label: string;
  value: string;
}

interface IButtonConfig extends IButtonProps {
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>, option?: IOption) => void;
}

interface IDropdownProps {
  options: IOption[];
  placeholder: string;
  noOptionsMessage?: string;
  onSelect?: (newValue: unknown, actionMeta: import('react-select').ActionMeta<unknown>) => void;
  buttonConfig?: IButtonConfig;
  Icon?: import('react-icons').IconType;
}
