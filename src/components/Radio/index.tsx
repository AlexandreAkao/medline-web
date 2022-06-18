import { RadioContainer, RadioInput, RadioLabel } from 'components/Radio/styles';

function Radio({ id, children, primary, ...rest }: IRadioProps) {
  return (
    <RadioContainer primary={primary}>
      <RadioInput {...rest} type="radio" id={id} />
      <RadioLabel htmlFor={id}>{children}</RadioLabel>
    </RadioContainer>
  );
}

export default Radio;
