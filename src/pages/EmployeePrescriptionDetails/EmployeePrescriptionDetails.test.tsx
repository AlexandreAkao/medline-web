import { screen } from '@testing-library/react';

import { renderWithProvider } from 'utils/testWrapper';
import EmployeePrescriptionDetails from 'pages/EmployeePrescriptionDetails';

describe('EmployeePrescriptionDetails', () => {
  const renderComponent = () => {
    return renderWithProvider(<EmployeePrescriptionDetails />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();
    const titleElement = screen.getByText('Atestados e Receitas');

    expect(titleElement).toBeInTheDocument();
  });
});
