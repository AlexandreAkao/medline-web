import { useNavigate } from 'react-router-dom';

import { Nav, LogoImg, NavItemsContainer } from 'components/Header/styles';

function Header({ icon, iconAlt, isAuthenticated, children }: IHeaderProps) {
  const navigate = useNavigate();

  const handleClickIcon = () => {
    navigate('/');
  };

  return (
    <Nav isAuthenticated={isAuthenticated} data-testid="test-navigation">
      <LogoImg src={icon} alt={iconAlt} onClick={handleClickIcon} />
      <NavItemsContainer data-testid="test-navigation-items">{children}</NavItemsContainer>
    </Nav>
  );
}

export default Header;
