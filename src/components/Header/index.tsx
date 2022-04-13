import { Nav, LogoImg, NavItemsContainer } from 'components/Header/styles';

function Header({ icon, iconAlt, isAuthenticated, children }: IHeaderProps) {
  return (
    <Nav isAuthenticated={isAuthenticated} data-testid="test-navigation">
      <LogoImg src={icon} alt={iconAlt} />
      <NavItemsContainer data-testid="test-navigation-items">{children}</NavItemsContainer>
    </Nav>
  );
}

export default Header;
