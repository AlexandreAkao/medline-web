import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { renderWithProvider } from 'utils/testWrapper';
import NotFound from 'pages/NotFound';
import * as useAuthHook from 'hooks/useAuth';

describe('NotFound', () => {
  const renderComponent = () => {
    return renderWithProvider(<NotFound />, { route: ['/any-wrong-url'] });
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();

    const titleElement = screen.getByText('Oops!');
    const subTitleElement = screen.getByText('404 - Página não encontrada');
    const messageElement = screen.getByRole('article');
    const buttonElement = screen.getByRole('button');

    expect(titleElement).toBeInTheDocument();
    expect(subTitleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  describe('should redirect to home page', () => {
    it('when is patiente', async () => {
      vi.spyOn(useAuthHook, 'useAuth').mockImplementation(
        () =>
          ({
            isEmployee: false,
          } as IAuthContext),
      );

      const { history } = renderComponent();

      expect(history.location.pathname).toBe('/any-wrong-url');

      const buttonElement = screen.getByRole('button');
      await userEvent.click(buttonElement);

      expect(buttonElement).toBeInTheDocument();

      expect(history.location.pathname).toBe('/');
    });

    it('when is employee', async () => {
      vi.spyOn(useAuthHook, 'useAuth').mockImplementation(
        () =>
          ({
            isEmployee: true,
          } as IAuthContext),
      );

      const { history } = renderComponent();

      expect(history.location.pathname).toBe('/any-wrong-url');

      const buttonElement = screen.getByRole('button');
      await userEvent.click(buttonElement);

      expect(buttonElement).toBeInTheDocument();

      expect(history.location.pathname).toBe('/employee/patiente-care');
    });
  });
});
