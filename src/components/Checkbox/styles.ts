import styled from 'styled-components';

import colors from 'styles/colors';

export const CheckboxInput = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  margin-left: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
`;

export const CheckboxContainer = styled.div<ICheckboxProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;

  ${CheckboxLabel} {
    color: ${({ primary }) => (primary ? colors.black.soft : colors.white.normal)};
  }
`;
