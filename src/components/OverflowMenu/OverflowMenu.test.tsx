import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from 'components/OverflowMenu/OverflowMenu.stories';
import OverflowMenu from 'components/OverflowMenu';

const { Primary, WithIcon } = composeStories(stories);

describe('Checkbox', () => {
  const renderComponent = (customProps: Partial<IOverflowMenuProps> = {}) => {
    const props: IOverflowMenuProps = {
      render: 'Example',
      children: undefined,
      ...customProps,
    };
    return render(<OverflowMenu {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a primary Button', () => {
    render(<Primary />);
    const labelElement = screen.getByText(/Primary/i);

    expect(labelElement).toBeInTheDocument();
  });

  it('should render a primary Button', () => {
    render(<WithIcon />);
    const iconElement = screen.getByRole('img');

    expect(iconElement).toBeInTheDocument();
  });

  it('should open overflow on click', async () => {
    renderComponent();
    const labelElement = screen.getByText(/Example/i);

    await userEvent.click(labelElement);

    const overflowElement = screen.getByTestId('overflow-menu-content');
    expect(labelElement).toBeInTheDocument();
    expect(overflowElement).toBeInTheDocument();
  });
});
