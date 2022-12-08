import styled from 'styled-components';

import colors from 'styles/colors';
import doctors from 'assets/images/doctors-blur.png';
import { ButtonContainer } from 'components/Button/styles';
import { DropdownContainer } from 'components/Dropdown/styles';

export const QueuePageContainer = styled.main`
  background-color: ${colors.primary.normal};
  height: 100%;
  overflow: auto;
  background-image: url(${doctors});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000px;
`;

export const QueuePageSection = styled.section`
  margin: 5rem 10rem 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${DropdownContainer} {
    margin-bottom: 2rem;
  }
`;

export const QueuePageInfoContainer = styled.div`
  width: 90%;
  background-color: ${colors.white.normal};
  font-size: 2rem;
  color: ${colors.grey.normal};
  text-align: center;
  border-radius: 15px;
  padding: 15px;
  margin: 2rem 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const QueuePageButtonsContainer = styled.div`
  margin-top: 12rem;
  display: flex;
  justify-content: space-around;
  width: 100%;

  ${ButtonContainer} {
    padding: 1rem 4rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const QueuePageOnQueueTitle = styled.div`
  background-color: ${colors.white.normal};
  font-size: 3rem;
  padding: 1.5rem;
  width: 60%;
  text-align: center;
  border-radius: 4rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.grey.normal};

  svg {
    margin-right: 1rem;
  }
`;
