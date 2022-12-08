type InputProps = import('react').InputHTMLAttributes<HTMLInputElement>;

interface ICheckboxProps extends InputProps {
  children?: React.ReactNode;
  primary?: boolean;
}
