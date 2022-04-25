import styled, { css } from 'styled-components';

import colors from 'styles/colors';

const getButtonSize = (size: ButtonSize) => {
  const sizeMap = {
    small: '5px 20px',
    medium: '10px 40px',
    large: '10px 60px',
  };
  return sizeMap[size];
};

export const ButtonContainer = styled.button<Required<IButtonProps>>`
  border: 0;
  background-color: ${colors.primary};
  padding: ${({ size }) => getButtonSize(size)};
  border-radius: 20px;
  font-size: 1rem;
  transition: 0.2s ease all;
  color: ${colors.white.normal};
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);

  :hover {
    transition: 0.2s ease all;
    background-color: ${colors.primaryLight};
  }

  ${({ primary }) =>
    !primary &&
    css`
      color: ${colors.black.normal};
      background-color: ${colors.white.normal};

      :hover {
        background-color: ${colors.white.lighter};
      }
    `}
`;
