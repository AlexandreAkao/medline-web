interface ISwitchContainer {
  isLeft: boolean;
}

interface ISwitchOption {
  label: string;
  value: string | number;
}

interface ISwitchProps {
  optionLeft: ISwitchOption;
  optionRight: ISwitchOption;
  onChange?: (option: ISwitchOption) => void;
}
