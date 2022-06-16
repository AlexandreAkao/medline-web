import styled from 'styled-components';

import { TableContainer } from 'components/Table/styles';
import colors from 'styles/colors';

export const EmployeePrescriptionContainer = styled.div`
  background-color: ${colors.white.lighter};
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: 50%;
  overflow: auto;
`;

export const EmployeePrescriptionMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 80%;

  ${TableContainer} {
    width: 100%;
  }
`;

export const EmployeePrescriptionTitle = styled.h1`
  font-size: 2.125rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;
