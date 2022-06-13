import { screen } from '@testing-library/react';

import { renderWithProvider } from 'utils/testWrapper';
import PrescriptionPage from 'pages/PrescriptionPage';

describe('PrescriptionPage', () => {
  const renderComponent = () => {
    return renderWithProvider(<PrescriptionPage />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();
    const titleElement = screen.getByRole('heading');
    expect(titleElement).toHaveTextContent('Atestados e Receitas');
  });
});
