import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/TextInput/TextInput.stories';
import TextInput from 'components/TextInput';

const { WithIcon, WithoutIcon, WithLabel, MaxLength, Password, Date, Cpf } =
  composeStories(stories);

describe('TextInput', () => {
  const renderComponent = (customProps: Partial<ITextInputProps> = {}) => {
    const props: ITextInputProps = {
      placeholder: 'any_placeholder',
      ...customProps,
    };
    return render(<TextInput {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a text input with icon', () => {
    render(<WithIcon />);
    const iconElement = screen.getByRole('img');
    const labelElement = screen.queryByTestId('test-input-label');

    expect(iconElement).toBeInTheDocument();
    expect(labelElement).not.toBeInTheDocument();
  });

  it('should render a text input without icon', () => {
    render(<WithoutIcon />);
    const iconElement = screen.queryByRole('img');
    const labelElement = screen.queryByTestId('test-input-label');

    expect(iconElement).not.toBeInTheDocument();
    expect(labelElement).not.toBeInTheDocument();
  });

  it('should render a text input with label', () => {
    render(<WithLabel />);
    const labelElement = screen.getByTestId('test-input-label');
    const labelText = screen.getByText('Nome');

    expect(labelElement).toBeInTheDocument();
    expect(labelText).toBeInTheDocument();
  });

  it('should render a text input with max length', async () => {
    render(<MaxLength />);
    const labelElement = screen.queryByTestId('test-input-label');
    const labelText = screen.queryByText('Nome');
    const inputElement = screen.getByTestId('test-input');

    await userEvent.type(inputElement, 'any text with more than 20 characters');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('any text with more t');
    expect(labelElement).not.toBeInTheDocument();
    expect(labelText).not.toBeInTheDocument();
  });

  it('should render a text input as password', async () => {
    render(<Password />);
    const inputElement = screen.getByTestId('test-input');
    const eyeIconElement = screen.getByTestId('test-eye-icon');

    await userEvent.type(inputElement, 'any password');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('any password');
    expect(inputElement).toHaveAttribute('type', 'password');

    await userEvent.click(eyeIconElement);

    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('should render a text input as date', async () => {
    render(<Date />);
    const inputElement = screen.getByTestId('test-input');

    await userEvent.click(inputElement);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveDisplayValue('__/__/____');

    await userEvent.type(inputElement, 'aaaaaaa', {
      skipClick: true,
    });

    expect(inputElement).toHaveValue('__/__/____');

    await userEvent.type(inputElement, '999999999999999999', {
      skipClick: true,
    });

    expect(inputElement).toHaveValue('99/99/9999');
  });

  it('should render a text input as CPF', async () => {
    render(<Cpf />);
    const inputElement = screen.getByTestId('test-input');

    await userEvent.click(inputElement);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveDisplayValue('___.___.___-__');

    await userEvent.type(inputElement, 'aaaaaaa', {
      skipClick: true,
    });

    expect(inputElement).toHaveValue('___.___.___-__');

    await userEvent.type(inputElement, '999999999999999999', {
      skipClick: true,
    });

    expect(inputElement).toHaveValue('999.999.999-99');
  });

  it('should trigger function on change', async () => {
    const onChange = vi.fn();
    renderComponent({ onChange });
    const inputElement = screen.getByTestId('test-input');

    await userEvent.type(inputElement, 'any text');

    expect(inputElement).toHaveValue('any text');
    expect(onChange).toBeCalled();
  });
});
