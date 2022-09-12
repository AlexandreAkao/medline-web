import styled from 'styled-components';

import colors from 'styles/colors';
import { Container } from 'components/TextInput/styles';
import { ButtonContainer } from 'components/Button/styles';

export const EditProfileContainer = styled.main`
  background-color: ${colors.primary.normal};
  height: 100%;
  overflow: auto;
`;

export const EditProfileSection = styled.section`
  margin: 5rem auto 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Container} {
    margin: 1rem 0;
  }

  ${ButtonContainer} {
    margin-top: 2rem;
  }
`;

export const EditProfileTitle = styled.h1`
  font-size: 2rem;
  color: ${colors.white.normal};
`;
