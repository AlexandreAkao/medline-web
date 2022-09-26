import styled, { createGlobalStyle } from 'styled-components';

import colors from 'styles/colors';
import { getColorAlpha } from 'utils/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.primary.lighter};
  }
`;

export const NotFoundContainer = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NotFoundTitle = styled.h1`
  font-size: 15rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background-image: linear-gradient(90deg, ${colors.primary.light}, ${colors.primary.darker});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  ::after {
    background: none;
    display: inline-block;
    content: 'Oops!';
    left: 0;
    position: absolute;
    text-shadow: -4px 4px 3px ${getColorAlpha(colors.black.soft, 0.5)};
    top: 0;
    z-index: -1;
  }
`;

export const NotFoundSubTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const NotFoundMessage = styled.span`
  font-size: 1.25rem;
  width: 35%;
  text-align: center;
  margin-bottom: 1.5rem;
`;
