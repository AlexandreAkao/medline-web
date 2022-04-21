import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/Switch/Switch.stories';
import Switch from 'components/Switch';

const { MaxWidth, MediumWidth, SmallWidth } = composeStories(stories);

describe('Switch', () => {
  const renderComponent = (customProps: Partial<ISwitchProps> = {}) => {
    const props: ISwitchProps = {
      optionLeft: { label: 'left', value: 'left' },
      optionRight: { label: 'right', value: 'right' },
      ...customProps,
    };
    return render(<Switch {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a switch with max width', () => {
    render(<MaxWidth />);
    const leftElement = screen.getByText(/Atestado/i);
    const rightElement = screen.getByText(/Receita/i);

    expect(leftElement).toBeInTheDocument();
    expect(rightElement).toBeInTheDocument();
  });

  it('should render a switch with medium width', () => {
    render(<MediumWidth />);

    const mainElement = screen.getByRole('main');
    const leftElement = screen.getByText(/Atestado/i);
    const rightElement = screen.getByText(/Receita/i);

    expect(leftElement).toBeInTheDocument();
    expect(rightElement).toBeInTheDocument();
    expect(mainElement).toHaveStyle({
      width: '50vw',
    });
  });

  it('should render a switch with small width', () => {
    render(<SmallWidth />);

    const mainElement = screen.getByRole('main');
    const leftElement = screen.getByText(/Atestado/i);
    const rightElement = screen.getByText(/Receita/i);

    expect(leftElement).toBeInTheDocument();
    expect(rightElement).toBeInTheDocument();
    expect(mainElement).toHaveStyle({
      width: '20vw',
    });
  });

  it('should render a switch with small width', () => {
    render(<SmallWidth />);

    const mainElement = screen.getByRole('main');
    const leftElement = screen.getByText(/Atestado/i);
    const rightElement = screen.getByText(/Receita/i);

    expect(leftElement).toBeInTheDocument();
    expect(rightElement).toBeInTheDocument();
    expect(mainElement).toHaveStyle({
      width: '20vw',
    });
  });

  it('should trigger on change when clicked', async () => {
    const onChange = vi.fn();
    renderComponent({ onChange });

    const switchElement = screen.getByTestId('test-switch');
    const leftElement = screen.getByText(/left/i);
    const rightElement = screen.getByText(/right/i);

    await userEvent.click(switchElement);

    expect(leftElement).toBeInTheDocument();
    expect(rightElement).toBeInTheDocument();
    expect(switchElement).toBeChecked();
    expect(onChange).toHaveBeenCalledWith({ label: 'right', value: 'right' });

    await userEvent.click(switchElement);

    expect(onChange).toHaveBeenCalledWith({ label: 'left', value: 'left' });
  });
});
