import styled from 'styled-components';

import colors from 'styles/colors';
import { HeaderItemContainer } from 'components/HeaderItem/styles';

export const HeaderMenuBurgerTitle = styled.h1`
  font-size: 2rem;
  color: ${colors.white.normal};
  border-bottom: 4px solid ${colors.black.soft};
  padding-bottom: 8px;
  margin-bottom: 2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const HeaderMenuBurgerContainer = styled.div`
  ${HeaderItemContainer} {
    a,
    button {
      justify-content: flex-start;
      font-size: 1.5rem;
      svg {
        margin-right: 3rem;
      }
    }
  }
`;

export const OverflowMenuTitle = styled.h1`
  font-size: 1.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 1.6rem;
  color: ${colors.black.soft};
`;

export const OverflowMenuNavigation = styled.nav`
  border-top: 2px solid ${colors.black.soft};
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  ${HeaderItemContainer} {
    padding: 1rem;
    a {
      padding: 0;
      color: ${colors.grey.normal};
      justify-content: flex-start;

      :hover {
        span {
          color: ${colors.primary};
        }
        svg {
          fill: ${colors.primary};
        }
      }

      span {
        margin-left: 20px;
      }
    }
  }
`;

export const OverflowMenuNavigationItem = styled.div`
  padding: 1rem;
  color: ${colors.grey.normal};
  display: flex;
  align-items: center;
  transition: 1s ease all;
  font-size: 1.1rem;

  :hover {
    span {
      color: ${colors.primary};
    }
    svg {
      fill: ${colors.primary};
    }
  }

  span {
    margin-left: 20px;
  }
`;
