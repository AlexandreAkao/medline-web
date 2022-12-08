import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import MenuBurger from 'components/MenuBurger';
import { IMenuBurgerProps } from 'components/MenuBurger/types';

describe('MenuBurger', () => {
  const renderComponent = (customProps: Partial<IMenuBurgerProps> = {}) => {
    const props: IMenuBurgerProps = {
      children: undefined,
      ...customProps,
    };
    return render(<MenuBurger {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should open and close MenuBurger', async () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();
    renderComponent({ onOpen, onClose });

    const menu = screen.getByRole('button');
    await userEvent.click(menu);

    const crossClose = screen.getByText('Close Menu');
    await userEvent.click(crossClose);

    expect(onOpen).toBeCalled();
    expect(onClose).toBeCalled();
  });
});
