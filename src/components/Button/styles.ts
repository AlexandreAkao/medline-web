import styled, { css } from 'styled-components';

import colors from 'styles/colors';

const getButtonSize = (size: ButtonSize = 'medium') => {
  const sizeMap = {
    small: '0.3125rem 1.25rem',
    medium: '0.625rem 2.5rem',
    large: '0.625rem 3.75rem',
  };
  return sizeMap[size];
};

export const ButtonContainer = styled.button<IButtonProps>`
  border: 0;
  background-color: ${colors.primary.normal};
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
    background-color: ${colors.primary.light};
  }

  :active {
    transition: 0.2s ease all;
    background-color: ${colors.primary.darkest};
  }

  :disabled {
    background-color: ${colors.primary.darker};
    cursor: auto;
  }

  ${({ primary }) =>
    !primary &&
    css`
      color: ${colors.black.normal};
      background-color: ${colors.white.normal};

      :hover {
        background-color: ${colors.white.lighter};
      }

      :active {
        background-color: ${colors.white.light};
      }

      :disabled {
        background-color: ${colors.white.lighter};
      }
    `}
`;
