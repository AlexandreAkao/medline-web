import styled from 'styled-components';

import colors from 'styles/colors';
import { getColorAlpha } from 'utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelTitle = styled.span`
  color: ${colors.white.normal};
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 1rem;
`;

export const TextInputContainer = styled.div`
  border: 0;
  width: 100%;
  height: 44px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white.normal};

  svg {
    margin: 10px;
  }

  svg:first-child {
    border-right: 1px solid ${getColorAlpha(colors.grey.normal, 0.5)};
    padding-right: 10px;
    color: ${colors.primary};
  }
`;

export const TextInputStyled = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 1.1rem;
  padding: 0 16px;
  color: ${colors.black.soft};
  font-weight: 500;
  border-radius: 8px;

  ::placeholder {
    color: ${colors.grey.normal};
  }

  & + svg {
    color: ${colors.primary};
    cursor: pointer;
    padding: 2px;
  }
`;
