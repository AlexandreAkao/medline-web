import styled from 'styled-components';

import colors from 'styles/colors';
import { ButtonContainer } from 'components/Button/styles';

export const RequestContainer = styled.main`
  background-color: ${colors.primary.normal};
  height: 100%;
  overflow: auto;
`;

export const RequestForm = styled.form`
  display: flex;
  height: calc(100% - 80px);
  flex-direction: column;
  align-items: center;
`;

export const RequestFieldsContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const RequestDescriptionContainer = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

export const RequestDescriptionTitle = styled.h2`
  color: ${colors.white.normal};
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RequestDescription = styled.textarea`
  height: 100px;
  border-radius: 8px;
  flex: 1;
  resize: none;
  padding: 16px;
  font-size: 1.125rem;
`;

export const RequestOptionContainer = styled.div`
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

export const RequestFormDescriptionTitle = styled.h5`
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
  justify-content: center;
  width: 100%;
  margin-top: 3rem;

  ${ButtonContainer} {
    display: flex;
    align-items: center;
    margin: 0 1rem;

    svg {
      margin-right: 0.5rem;
    }
  }
`;
