type ButtonProps = import('react').InputHTMLAttributes<HTMLButtonElement>;

type ButtonSize = 'small' | 'medium' | 'large';

interface IButtonProps extends Omit<ButtonProps, 'size'> {
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: boolean;
  type?: 'submit' | 'reset' | 'button';
}
