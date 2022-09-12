import styled from 'styled-components';

import { TextInputContainer } from 'components/TextInput/styles';
import colors from 'styles/colors';
import doctors from 'assets/images/doctors.svg';
import ScreenSizes from 'styles/screenSizes';

export const LoginContainer = styled.div`
  background-color: ${colors.primary.normal};
  height: 100%;
  overflow: auto;
`;

export const LoginContent = styled.div`
  display: flex;

  > * {
    flex: 1;
    justify-content: center;
  }
`;

export const LoginBackground = styled.div`
  background-image: url(${doctors});
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;

  @media (max-width: ${ScreenSizes.xLarge}) {
    display: none;
  }
`;

export const LoginTitle = styled.h1`
  color: ${colors.white.normal};
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 130px;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 100px 0 100px;

  @media (max-width: ${ScreenSizes.xLarge}) {
    margin: 50px 50px 0 50px;
  }

  @media (max-width: ${ScreenSizes.medium}) {
    margin: 10px 10px 0 10px;
  }
`;

export const LoginFormLogin = styled.div`
  width: 100%;

  ${TextInputContainer} {
    margin-bottom: 30px;
  }
`;

export const LoginForgotPassword = styled.span`
  color: ${colors.white.normal};
  font-size: 1.125rem;
  font-weight: 500;
`;

export const LoginRemember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 150px;
`;

export const LoginFormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
