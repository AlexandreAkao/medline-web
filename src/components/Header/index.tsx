import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Nav, LogoImg, NavItemsContainer } from 'components/Header/styles';
import MedlineLogo from 'assets/images/medline-logo.svg';
import ScreenSizes from 'styles/screenSizes';
import MenuBurger from 'components/MenuBurger';

function Header({
  icon = MedlineLogo,
  iconAlt = 'Medline Logo',
  isAuthenticated,
  children,
}: IHeaderProps) {
  const isTablet = useMediaQuery({ query: `(max-width: ${ScreenSizes.medium})` });
  const navigate = useNavigate();

  const handleClickIcon = () => {
    navigate('/');
  };

  return (
    <Nav isAuthenticated={isAuthenticated} data-testid="test-navigation">
      <LogoImg src={icon} alt={iconAlt} onClick={handleClickIcon} />
      {isTablet ? (
        <MenuBurger>{children}</MenuBurger>
      ) : (
        <NavItemsContainer data-testid="test-navigation-items">{children}</NavItemsContainer>
      )}
    </Nav>
  );
}

export default Header;
