import styled from 'styled-components';

import { ButtonContainer } from 'components/Button/styles';
import colors from 'styles/colors';

export const EmployeePrescriptionDetailsContainer = styled.div`
  background-color: ${colors.white.lighter};
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: 50%;
  overflow: auto;
`;

export const EmployeePrescriptionDetailsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 80%;
`;

export const EmployeePrescriptionDetailsTitle = styled.h1`
  font-size: 2.125rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const EmployeePrescriptionDetailsInformation = styled.main`
  border-radius: 1rem;
  background-color: ${colors.white.normal};
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const EmployeePrescriptionDetailsInformationData = styled.div`
  background-color: ${colors.primaryLighter};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    font-weight: 600;
  }
`;

export const EmployeePrescriptionDetailsInformationDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    margin-top: 1rem;
    font-weight: 500;
  }

  span {
    border-top: 1px solid ${colors.black.soft};
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 1rem;
    padding: 1rem 0 20rem 0;
  }
`;

export const EmployeePrescriptionDetailsVizualizer = styled.button`
  margin-top: 2rem;

  text-decoration: underline;
  color: ${colors.blue.normal};
  font-size: 1.125rem;
  :hover {
    color: ${colors.blue.light};
  }
`;

export const EmployeePrescriptionDetailsButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${ButtonContainer} {
    padding: 1.25rem 2rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;
