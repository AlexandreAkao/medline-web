import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { renderWithProvider } from 'utils/testWrapper';
import PrescriptionPage from 'pages/PrescriptionPage';
import api from 'service/api';
import { requestMock } from '__tests__/mocks/request.mock';
import { paginationMock } from '__tests__/mocks/pagination.mock';

describe('PrescriptionPage', () => {
  beforeEach(() => {
    vi.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: paginationMock([requestMock]),
      }),
    );
  });

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
