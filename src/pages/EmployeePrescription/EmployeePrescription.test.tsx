import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { renderWithProvider } from 'utils/testWrapper';
import EmployeePrescription from 'pages/EmployeePrescription';
import api from 'service/api';
import { paginationMock } from '__tests__/mocks/pagination.mock';
import { requestMock } from '__tests__/mocks/request.mock';

describe('EmployeePrescription', () => {
  beforeEach(() => {
    vi.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: paginationMock([requestMock]),
      }),
    );
  });

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
