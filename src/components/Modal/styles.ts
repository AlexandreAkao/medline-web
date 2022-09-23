import styled, { keyframes } from 'styled-components';

import colors from 'styles/colors';
import zIndexPriority from 'styles/zIndexPriority';
import { getColorAlpha } from 'utils/colors';

const showModal = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const ModalContainer = styled.div`
  z-index: ${zIndexPriority.ALMOST_MAX};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${getColorAlpha(colors.black.soft, 0.6)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div<IModalStyles>`
  background-color: ${colors.white.normal};
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  animation: ${showModal} 0.3s ease-in-out;

  ${({ customStyles }) => customStyles}
`;
