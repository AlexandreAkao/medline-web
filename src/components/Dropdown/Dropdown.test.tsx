import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/Dropdown/Dropdown.stories';
import Dropdown from 'components/Dropdown';

const { WithOption, WithoutOption, WithoutButton, WithoutIcon } = composeStories(stories);

describe('Dropdown', () => {
  const renderComponent = (customProps: Partial<IDropdownProps> = {}) => {
    const props: IDropdownProps = {
      options: [],
      placeholder: 'Selecione uma opção',
      ...customProps,
    };
    return render(<Dropdown {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a Dropdown with option', async () => {
    render(<WithOption />);
    const buttonElement = screen.getByText(/Procurar/i);
    const iconElement = screen.getByRole('img');
    const selectElement = screen.getByRole('combobox');
    const placeholder = screen.getByText(/Escolha uma unidade de saúde/i);

    await userEvent.click(selectElement);

    const firstOption = screen.getByText('option 1');

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(firstOption).toBeInTheDocument();
    expect(placeholder).toBeTruthy();
  });

  describe('should render a dropdown without', () => {
    it('option', async () => {
      render(<WithoutOption />);
      const buttonElement = screen.getByText(/Procurar/i);
      const iconElement = screen.getByRole('img');
      const selectElement = screen.getByRole('combobox');
      const placeholder = screen.getByText(/Escolha uma unidade de saúde/i);

      await userEvent.click(selectElement);
      const noOption = screen.getByText(/Nenhuma opção encontrada/i);

      const firstOption = screen.queryByText('option 1');

      expect(buttonElement).toBeInTheDocument();
      expect(iconElement).toBeInTheDocument();
      expect(selectElement).toBeInTheDocument();
      expect(noOption).toBeInTheDocument();
      expect(firstOption).not.toBeInTheDocument();
      expect(placeholder).toBeTruthy();
    });

    it('button', async () => {
      render(<WithoutButton />);
      const buttonElement = screen.queryByText(/Procurar/i);
      const iconElement = screen.getByRole('img');
      const selectElement = screen.getByRole('combobox');
      const placeholder = screen.getByText(/Escolha uma unidade de saúde/i);

      expect(buttonElement).not.toBeInTheDocument();
      expect(iconElement).toBeInTheDocument();
      expect(selectElement).toBeInTheDocument();
      expect(placeholder).toBeTruthy();
    });

    it('icon', async () => {
      render(<WithoutIcon />);
      const buttonElement = screen.queryByText(/Procurar/i);
      const iconElement = screen.queryByRole('img');
      const selectElement = screen.getByRole('combobox');
      const placeholder = screen.getByText(/Escolha uma unidade de saúde/i);

      expect(buttonElement).toBeInTheDocument();
      expect(iconElement).not.toBeInTheDocument();
      expect(selectElement).toBeInTheDocument();
      expect(placeholder).toBeTruthy();
    });
  });

  it('should call onSelect when select an option', async () => {
    const onSelect = vi.fn();
    renderComponent({ onSelect, options: [{ label: 'option 1', value: 'option 1' }] });

    const selectElement = screen.getByRole('combobox');

    await userEvent.click(selectElement);

    const firstOption = screen.getByText('option 1');
    await userEvent.click(firstOption);

    expect(onSelect).toBeCalled();
  });

  it('should call onClick when clicked on button', async () => {
    const onClick = vi.fn();
    renderComponent({
      options: [{ label: 'option 1', value: 'option 1' }],
      buttonConfig: {
        children: 'any_text',
        onClick,
      },
    });

    const buttonElement = screen.getByRole('button');
    const selectElement = screen.getByRole('combobox');

    await userEvent.click(selectElement);

    const firstOption = screen.getByText('option 1');

    await userEvent.click(firstOption);
    await userEvent.click(buttonElement);

    expect(onClick).toBeCalledWith(expect.anything(), { label: 'option 1', value: 'option 1' });
  });
});
