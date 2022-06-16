import { screen } from '@testing-library/react';

import { renderWithProvider } from 'utils/testWrapper';
import EmployeePrescription from 'pages/EmployeePrescription';

describe('EmployeePrescription', () => {
  const renderComponent = () => {
    return renderWithProvider(<EmployeePrescription />);
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
