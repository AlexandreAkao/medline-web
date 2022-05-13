import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from 'utils/testWrapper';
import LandingPage from 'pages/LandingPage';

describe('LandingPage', () => {
  const renderComponent = () => {
    return renderWithRouter(<LandingPage />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();

    const switchElement = screen.getByRole('combobox');
    const HeaderElement = screen.getByTestId('test-navigation');
    const heading = screen.getAllByRole('heading');

    expect(heading).toHaveLength(2);
    expect(switchElement).toBeInTheDocument();
    expect(HeaderElement).toBeInTheDocument();
  });

  it('should redirect to login page', async () => {
    const { history } = renderComponent();

    const loginElement = screen.getByText('Entrar');
    await userEvent.click(loginElement);

    expect(loginElement).toBeInTheDocument();

    expect(history.location.pathname).toBe('/login');
  });
});
