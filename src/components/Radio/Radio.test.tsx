import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/Radio/Radio.stories';
import Radio from 'components/Radio';
import colors from 'styles/colors';

const { Primary, Secondary } = composeStories(stories);

describe('Radio', () => {
  const renderComponent = (customProps: Partial<IRadioProps> = {}) => {
    const props: IRadioProps = {
      children: 'radio-test',
      id: 'radio-test-id',
      ...customProps,
    };
    return render(<Radio {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a primary radio button', () => {
    render(<Primary />);
    const labelElement = screen.getByText(/Primary/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle({
      color: colors.black.soft,
    });
  });

  it('should render a secondary radio button', () => {
    render(<Secondary />);
    const labelElement = screen.getByText(/Secondary/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle({
      color: colors.white.normal,
    });
  });

  it('should trigger function on change radio value', async () => {
    const onChange = vi.fn();
    renderComponent({ onChange });

    const radioElement = screen.getByRole('radio');
    const labelElement = screen.getByText(/Radio-test/i);

    expect(labelElement).toBeInTheDocument();
    expect(radioElement).toBeInTheDocument();
    expect(radioElement).not.toBeChecked();

    await userEvent.click(radioElement);
    expect(radioElement).toBeChecked();
    expect(onChange).toBeCalled();
  });
});
