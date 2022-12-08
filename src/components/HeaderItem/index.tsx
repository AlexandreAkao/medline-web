import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import { HeaderItemContainer } from 'components/HeaderItem/styles';

function HeaderItem({ as = 'link', children, href = '', onClick, ...buttonProps }: IHeaderItemProps) {
  const Item = useMemo(() => {
    const itemsMap = {
      button: (
        <Button onClick={onClick} {...buttonProps}>
          {children}
        </Button>
      ),
      link: (
        <Link to={href} onClick={onClick}>
          {children}
        </Link>
      ),
      span: <span>{children}</span>,
    };
    return itemsMap[as];
  }, [as, buttonProps, children, href, onClick]);

  return <HeaderItemContainer>{Item}</HeaderItemContainer>;
}

export default HeaderItem;
