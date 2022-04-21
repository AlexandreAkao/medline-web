interface ISwitchContainer {
  isLeft: boolean;
}

interface ISwitchOption {
  label: string;
  value: string;
}

interface ISwitchProps {
  optionLeft: ISwitchOption;
  optionRight: ISwitchOption;
  onChange?: (option: ISwitchOption) => void;
}
