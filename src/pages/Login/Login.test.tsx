import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { renderWithProvider } from 'utils/testWrapper';
import Login from 'pages/Login';
import api from 'service/api';

describe('Login', () => {
  const renderComponent = () => {
    return renderWithProvider(<Login />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();

    const titleElement = screen.getByText('Entre com seu acesso');
    const checkboxElement = screen.getByRole('checkbox');
    const buttonElements = screen.getAllByRole('button');
    const inputElements = screen.getAllByTestId('test-input');

    expect(titleElement).toBeInTheDocument();
    expect(inputElements).toHaveLength(2);
    expect(checkboxElement).toBeInTheDocument();
    expect(buttonElements).toHaveLength(3);
  });

  it('should send request when click on login button', async () => {
    const post = vi.spyOn(api, 'post').mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          idToken: 'any_token',
        },
      }),
    );
    vi.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {},
      }),
    );
    renderComponent();

    const username = 'any_username';
    const password = 'any_password';

    const inputElements = screen.getAllByTestId('test-input');
    const loginButton = screen.getByText('Login');

    await userEvent.type(inputElements[0], username);
    await userEvent.type(inputElements[1], password);

    await userEvent.click(loginButton);

    expect(post).toBeCalled();
  });

  it('should redirect to register page', async () => {
    const { history } = renderComponent();

    const registerElement = screen.getByText('Cadastrar');
    await userEvent.click(registerElement);

    expect(registerElement).toBeInTheDocument();

    expect(history.location.pathname).toBe('/register');
  });
});
