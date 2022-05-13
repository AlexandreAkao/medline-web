interface ITextInputProps {
  label?: string;
  placeholder?: string;
  maxLength?: number;
  isPassword?: boolean;
  mask?: import('utils/mask').Mask | string | (string | RegExp)[];
  onChange?: (event: import('react').ChangeEvent<HTMLInputElement>) => void;
  Icon?: import('react-icons').IconType;
  value?: string | number;
}
