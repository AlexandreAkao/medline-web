import { screen } from '@testing-library/react';

import { renderWithProvider } from 'utils/testWrapper';
import Register from 'pages/Register';

describe('Register', () => {
  const renderComponent = () => {
    return renderWithProvider(<Register />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    renderComponent();

    const titleElement = screen.getByText('Informe seus dados');
    const buttonElements = screen.getAllByRole('button');
    const inputElements = screen.getAllByRole('textbox');

    expect(titleElement).toBeInTheDocument();
    expect(inputElements).toHaveLength(13);
    expect(buttonElements).toHaveLength(3);
  });
});
