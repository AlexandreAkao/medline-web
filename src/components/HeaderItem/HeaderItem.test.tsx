import { screen } from '@testing-library/react';

import HeaderItem from 'components/HeaderItem';
import { renderWithRouter } from 'utils/testWrapper';

describe('HeaderItem', () => {
  const renderComponent = (customProps: Partial<IHeaderItemProps> = {}) => {
    const props: IHeaderItemProps = {
      as: 'button',
      children: undefined,
      ...customProps,
    };
    return renderWithRouter(<HeaderItem {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render as button', () => {
    renderComponent({ as: 'button' });
    const headerItem = screen.getByRole('button');
    expect(headerItem).toBeInTheDocument();
  });

  it('should render as link', () => {
    renderComponent({ as: 'link', href: '/' });
    const headerItem = screen.getByRole('link');
    expect(headerItem).toBeInTheDocument();
  });
});
