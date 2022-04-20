import { CheckboxContainer, CheckboxInput, CheckboxLabel } from 'components/Checkbox/styles';

function Checkbox({ id, children, primary, ...rest }: ICheckboxProps) {
  return (
    <CheckboxContainer primary={primary}>
      <CheckboxInput {...rest} type="checkbox" name="" id={id} />
      <CheckboxLabel htmlFor={id}>{children}</CheckboxLabel>
    </CheckboxContainer>
  );
}

export default Checkbox;
