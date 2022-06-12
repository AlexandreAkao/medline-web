import { screen } from '@testing-library/react';

import { renderWithProvider } from 'utils/testWrapper';
import EditProfile from 'pages/EditProfile';

describe('EditProfile', () => {
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
