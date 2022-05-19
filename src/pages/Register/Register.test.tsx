import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { renderWithRouter } from 'utils/testWrapper';
import Register from 'pages/Register';
// import api from 'service/api';

// TODO add new test to send request
vi.mock('service/api', () => ({
  post: () => {},
}));

describe('Login', () => {
  const renderComponent = () => {
    return renderWithRouter(<Register />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();

    const titleElement = screen.getByText('Informe seus dados');
    // const checkboxElement = screen.getByRole('checkbox');
    // const buttonElements = screen.getAllByRole('button');
    // const inputElements = screen.getAllByTestId('test-input');

    expect(titleElement).toBeInTheDocument();
    // expect(inputElements).toHaveLength(2);
    // expect(checkboxElement).toBeInTheDocument();
    // expect(buttonElements).toHaveLength(2);
  });

  // it('should send request when click on login button', async () => {
  //   const post = vi.spyOn(api, 'post');
  //   renderComponent();

  //   const username = 'any_username';
  //   const password = 'any_password';

  //   const inputElements = screen.getAllByTestId('test-input');
  //   const loginButton = screen.getByText('Login');

  //   await userEvent.type(inputElements[0], username);
  //   await userEvent.type(inputElements[1], password);

  //   await userEvent.click(loginButton);

  //   expect(post).toBeCalled();
  // });
});
