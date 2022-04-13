import { ButtonContainer } from 'components/Button/styles';

function Button({ children, onClick, size = 'medium', primary = true }: IButtonProps) {
  return (
    <ButtonContainer onClick={onClick} size={size} primary={primary}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
