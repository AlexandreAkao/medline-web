import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { renderWithProvider } from 'utils/testWrapper';
import EditProfile from 'pages/EditProfile';
import api from 'service/api';
import { userMock } from '__tests__/mocks/user.mock';

describe('EditProfile', () => {
  beforeEach(() => {
    vi.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: userMock,
      }),
    );
  });

  const renderComponent = () => {
    return renderWithProvider(<EditProfile />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();
    const titleElement = screen.getByRole('heading');
    const inputElements = screen.getAllByRole('textbox');
    const buttonElements = screen.getAllByRole('button');
    expect(titleElement).toHaveTextContent('Editar Perfil');
    expect(inputElements).toHaveLength(4);
    expect(buttonElements).toHaveLength(2);
  });
});
