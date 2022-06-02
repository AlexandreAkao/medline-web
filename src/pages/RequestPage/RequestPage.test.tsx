import { renderWithProvider } from 'utils/testWrapper';
import RequestPage from 'pages/RequestPage';

describe('RequestPage', () => {
  const renderComponent = () => {
    return renderWithProvider(<RequestPage />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
