import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Nav, LogoImg, NavItemsContainer } from 'components/Header/styles';
import MedlineLogo from 'assets/images/medline-logo.svg';
import ScreenSizes from 'styles/screenSizes';
import MenuBurger from 'components/MenuBurger';
import { useAuth } from 'hooks/useAuth';

function Header({ icon = MedlineLogo, iconAlt = 'Medline Logo', isAuthenticated, children }: IHeaderProps) {
  const { isEmployee } = useAuth();
  const isTablet = useMediaQuery({ query: `(max-width: ${ScreenSizes.medium})` });

  return (
    <Nav isAuthenticated={isAuthenticated} data-testid="test-navigation">
      <Link to={isEmployee ? '/employee/patiente-care' : '/'} id="header-logo">
        <LogoImg src={icon} alt={iconAlt} />
      </Link>
      {isTablet ? (
        <MenuBurger>{children}</MenuBurger>
      ) : (
        <NavItemsContainer data-testid="test-navigation-items">{children}</NavItemsContainer>
      )}
    </Nav>
  );
}

export default Header;
