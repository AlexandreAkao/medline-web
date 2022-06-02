import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProvider } from 'utils/testWrapper';
import Register from 'pages/Register';

describe('Register', () => {
  const renderComponent = () => {
    return renderWithProvider(<Register />, { route: ['/', '/register'] });
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();

    const titleElement = screen.getByText('Informe seus dados');
    const buttonElements = screen.getAllByRole('button');
    const inputElements = screen.getAllByRole('textbox');

    expect(titleElement).toBeInTheDocument();
    expect(inputElements).toHaveLength(13);
    expect(buttonElements).toHaveLength(3);
  });

  it('should redirect to previus page', async () => {
    const { history } = renderComponent();

    expect(history.location.pathname).toBe('/register');

    const backElement = screen.getByText('Voltar');
    await userEvent.click(backElement);

    expect(backElement).toBeInTheDocument();

    expect(history.location.pathname).toBe('/');
  });
});
