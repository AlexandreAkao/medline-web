import { vi } from 'vitest';

import { renderWithProvider } from 'utils/testWrapper';
import QueuePage from 'pages/QueuePage';
import { ubsList } from '__tests__/mocks/ubs.mock';
import api from 'service/api';

describe('QueuePage', () => {
  beforeEach(() => {
    vi.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: ubsList,
      }),
    );
  });

  const renderComponent = () => {
    return renderWithProvider(<QueuePage />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
