import { ButtonContainer } from 'components/Button/styles';

function Button({
  children,
  type = 'button',
  onClick = () => {},
  size = 'medium',
  primary = true,
  ...rest
}: IButtonProps) {
  return (
    <ButtonContainer {...rest} onClick={onClick} size={size} primary={primary} type={type}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
