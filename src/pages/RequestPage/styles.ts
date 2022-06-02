import styled from 'styled-components';

import Button from 'components/Button';
import colors from 'styles/colors';
import { ButtonContainer } from 'components/Button/styles';

export const RequestContainer = styled.div`
  background-color: ${colors.primary};
  height: 100%;
  overflow: auto;
`;

export const RequestMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 80px);
`;

export const RequestHelp = styled.span`
  color: ${colors.white.normal};
  font-size: 2rem;
  flex: 1;
  padding: 5rem;
`;

export const RequestForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  flex: 1;
  height: 100%;
`;

export const RequestFormTitle = styled.h2`
  color: ${colors.white.normal};
  margin-bottom: 4rem;
`;

export const RequestFormDescription = styled.div`
  background: ${colors.white.normal};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  margin: 2rem 0;
`;

export const RequestFormDescriptionTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const RequestFormDescriptionSubTitle = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

export const RequestFormDescriptionCheckboxs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;
`;

export const RequestFormButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  ${ButtonContainer} {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;
