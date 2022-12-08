import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/Checkbox/Checkbox.stories';
import Checkbox from 'components/Checkbox';
import colors from 'styles/colors';

const { Primary, Secondary } = composeStories(stories);

describe('Checkbox', () => {
  const renderComponent = (customProps: Partial<ICheckboxProps> = {}) => {
    const props: ICheckboxProps = {
      children: 'checkbox-test',
      id: 'checkbox-test-id',
      ...customProps,
    };
    return render(<Checkbox {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a primary checkbox', () => {
    render(<Primary />);
    const labelElement = screen.getByText(/Primary/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle({
      color: colors.black.soft,
    });
  });

  it('should render a secondary checkbox', () => {
    render(<Secondary />);
    const labelElement = screen.getByText(/Secondary/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle({
      color: colors.white.normal,
    });
  });

  it('should trigger function on change checkbox value', async () => {
    const onChange = vi.fn();
    renderComponent({ onChange });

    const checkboxElement = screen.getByRole('checkbox');
    const labelElement = screen.getByText(/checkbox-test/i);

    expect(labelElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();

    await userEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
    expect(onChange).toBeCalled();

    await userEvent.click(labelElement);
    expect(checkboxElement).not.toBeChecked();
    expect(onChange).toBeCalled();
  });
});
