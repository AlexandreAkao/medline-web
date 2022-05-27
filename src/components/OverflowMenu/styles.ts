import styled from 'styled-components';

import colors from 'styles/colors';
import zIndexPriority from 'styles/zIndexPriority';

export const OverflowMenuContainer = styled.div`
  display: inline;
  position: relative;
  cursor: pointer;
`;

export const OverflowMenuContent = styled.div<IOverflowMenuPosition>`
  z-index: ${zIndexPriority.ALMOST_MAX};
  position: absolute;
  background-color: ${colors.white.normal};
  color: black;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
  border: 1px solid ${colors.white.lighter};
  border-radius: 4px;
  width: clamp(200px, 300px, 350px);

  ${({ positionX, positionY }) => ({
    [positionX]: 0,
    [positionY]: 0,
  })}
`;
