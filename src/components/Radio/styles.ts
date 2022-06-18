import styled from 'styled-components';

import colors from 'styles/colors';

export const RadioInput = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
`;

export const RadioContainer = styled.div<IRadioProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;

  ${RadioLabel} {
    color: ${({ primary }) => (primary ? colors.black.soft : colors.white.normal)};
  }
`;
