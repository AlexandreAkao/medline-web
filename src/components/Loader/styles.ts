import styled, { keyframes } from 'styled-components';

import colors from 'styles/colors';
import zIndexPriority from 'styles/zIndexPriority';
import { getColorAlpha } from 'utils/colors';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  z-index: ${zIndexPriority.MAX};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${getColorAlpha(colors.black.soft, 0.6)};
`;

export const LoaderSpin = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  border: 15px solid ${colors.white.lighter};
  border-top: 15px solid ${colors.black.soft};
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;
