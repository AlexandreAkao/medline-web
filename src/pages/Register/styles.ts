import styled from 'styled-components';

import colors from 'styles/colors';
import doctors from 'assets/images/doctors.svg';
import ScreenSizes from 'styles/screenSizes';

export const RegisterContainer = styled.div`
  background-color: ${colors.primary.normal};
  height: 100%;
  overflow: auto;
`;

export const RegisterContent = styled.div`
  display: flex;

  > * {
    flex: 1;
    justify-content: center;
  }

  @media (max-width: ${ScreenSizes.xLarge}) {
    flex-direction: column;

    > * {
      flex: auto;
      justify-content: center;
    }
  }
`;

export const RegisterBackground = styled.div`
  background-image: url(${doctors});
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;

  @media (max-width: ${ScreenSizes.xLarge}) {
    height: 300px;
    background-size: contain;
    display: none;
  }
`;

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px 32px 32px;
  gap: 10px;
`;

export const RegisterFormTittle = styled.h1`
  color: ${colors.white.normal};
  font-weight: 400;
  font-size: 3rem;
  margin-bottom: 10px;
`;

export const RegisterFormRow = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`;

export const AddressFormTitle = styled.h1`
  color: ${colors.white.normal};
  font-size: 1.5rem;
  position: relative;
  margin-bottom: 20px;

  ::after {
    margin-left: 8px;
    top: 15px;
    content: '';
    position: absolute;
    width: 78%;
    height: 1px;
    background-color: ${colors.white.normal};
  }
`;

export const AddressFormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
  gap: 10px;
`;

export const AddressFormButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
