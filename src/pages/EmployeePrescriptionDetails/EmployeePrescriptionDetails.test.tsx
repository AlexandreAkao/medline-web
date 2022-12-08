import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { renderWithProvider } from 'utils/testWrapper';
import EmployeePrescriptionDetails from 'pages/EmployeePrescriptionDetails';
import { requestMock } from '__tests__/mocks/request.mock';
import api from 'service/api';

vi.mock('react-router-dom', async () => {
  const reactRouterDom = await vi.importActual('react-router-dom');

  return {
    ...(reactRouterDom as Record<string, unknown>),
    useParams: () => ({ id: '1' }),
  };
});

describe('EmployeePrescriptionDetails', () => {
  beforeEach(() => {
    vi.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: requestMock,
      }),
    );
  });

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
