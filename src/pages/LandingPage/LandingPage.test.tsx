import { screen } from '@testing-library/react';

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
});
