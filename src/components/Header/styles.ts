import styled from 'styled-components';

import { HeaderItemContainer } from 'components/HeaderItem/styles';
import colors from 'styles/colors';
import zIndexPriority from 'styles/zIndexPriority';
import ScreenSizes from 'styles/screenSizes';

export const Nav = styled.header<Pick<IHeaderProps, 'isAuthenticated'>>`
  width: 100%;
  height: 80px;
  box-shadow: ${({ isAuthenticated }) =>
    isAuthenticated ? '0px 4px 10px 1px rgba(0, 0, 0, 0.25);' : null};
  z-index: ${zIndexPriority.VERY_HIGH};
  background-color: ${colors.primary.normal};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  @media (max-width: ${ScreenSizes.medium}) {
    box-shadow: none;
  }
`;

export const LogoImg = styled.img`
  cursor: pointer;
  height: 65%;
`;

export const NavItemsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  ${HeaderItemContainer} {
    padding: 0 16px;
  }
`;
