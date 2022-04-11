type ButtonSize = 'small' | 'medium' | 'large';

interface IButtonProps {
  size?: ButtonSize;
  children?: React.ReactElement | string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: boolean;
}
