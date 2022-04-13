type ButtonSize = 'small' | 'medium' | 'large';

interface IButtonProps {
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: boolean;
}
