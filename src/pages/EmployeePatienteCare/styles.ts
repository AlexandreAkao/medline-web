import styled from 'styled-components';

import { TableContainer } from 'components/Table/styles';
import colors from 'styles/colors';

export const EmployeePatienteCareContainer = styled.div`
  background-color: ${colors.white.lighter};
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: 50%;
  overflow: auto;
`;

export const EmployeePatienteCareMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 80%;

  ${TableContainer} {
    width: 100%;

    svg {
      cursor: pointer;
    }
  }
`;

export const EmployeePatienteCareTitle = styled.h1`
  font-size: 2.125rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const EmployeePatienteCareModalContainer = styled.div`
  padding: 1.5rem;
  width: 70vw;

  > h2 {
    margin-bottom: 2rem;
  }
`;
