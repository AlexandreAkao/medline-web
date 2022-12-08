interface IHeaderItemProps extends IButtonProps {
  as?: 'button' | 'link' | 'span';
  href?: string;
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}
