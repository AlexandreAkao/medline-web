import { screen } from '@testing-library/react';

import { renderWithProvider } from 'utils/testWrapper';
import EmployeePatienteCare from 'pages/EmployeePatienteCare';

describe('EmployeePatienteCare', () => {
  const renderComponent = () => {
    return renderWithProvider(<EmployeePatienteCare />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();
    const titleElement = screen.getByRole('heading');

    expect(titleElement).toHaveTextContent('Atendimento');
  });
});
