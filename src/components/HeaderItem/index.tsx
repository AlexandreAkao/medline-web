import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import { HeaderItemContainer } from 'components/HeaderItem/styles';

function HeaderItem({ as = 'link', children, href = '', ...buttonProps }: IHeaderItemProps) {
  const Item = useMemo(() => {
    const itemsMap = {
      button: <Button {...buttonProps}>{children}</Button>,
      link: <Link to={href}>{children}</Link>,
    };
    return itemsMap[as];
  }, [as, buttonProps, children, href]);

  return <HeaderItemContainer>{Item}</HeaderItemContainer>;
}

export default HeaderItem;
