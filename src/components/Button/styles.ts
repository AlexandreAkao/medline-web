import styled, { css } from 'styled-components';

import colors from 'styles/colors';

const getButtonSize = (size?: ButtonSize) => {
  switch (size) {
    case 'small':
      return '5px 20px';
    case 'medium':
      return '10px 40px';
    case 'large':
      return '10px 60px';
    default:
      return '0';
  }
};

export const ButtonContainer = styled.button<IButtonProps>`
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

  ${({ primary }) =>
    !primary &&
    css`
      color: ${colors.black.normal};
      background-color: ${colors.white.normal};
    `}

  :hover {
    transition: 0.2s ease all;
    background-color: ${colors.primaryLight};
  }
`;
