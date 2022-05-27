import { Props } from 'react-burger-menu';

type MenuTypes =
  | 'slide'
  | 'stack'
  | 'elastic'
  | 'bubble'
  | 'push'
  | 'pushRotate'
  | 'scaleDown'
  | 'scaleRotate'
  | 'fallDown'
  | 'reveal';

export interface IMenuBurgerProps extends Props {
  type?: MenuTypes;
  children: React.ReactNode;
}
