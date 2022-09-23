import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { renderWithProvider } from 'utils/testWrapper';
import EmployeePatienteCare from 'pages/EmployeePatienteCare';
import api from 'service/api';

describe('EmployeePatienteCare', () => {
  beforeEach(() => {
    vi.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: [],
      }),
    );
  });

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
