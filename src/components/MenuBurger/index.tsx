import ReactBurgerMenu from 'react-burger-menu';

import { IMenuBurgerProps } from 'components/MenuBurger/types';
import { MenuBurgerContainer } from 'components/MenuBurger/styles';

function MenuBurger({
  type = 'slide',
  right = true,
  noOverlay = true,
  children,
  ...rest
}: IMenuBurgerProps) {
  const Menu = ReactBurgerMenu[type];

  return (
    <MenuBurgerContainer>
      {Menu && (
        <Menu right={right} noOverlay={noOverlay} {...rest}>
          {children}
        </Menu>
      )}
    </MenuBurgerContainer>
  );
}

export default MenuBurger;
