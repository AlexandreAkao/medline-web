import { render } from '@testing-library/react';
import { vi } from 'vitest';

import App from 'App';
import { LoaderProvider } from 'providers/LoaderProvider';
import api from 'service/api';
import { ubsList } from '__tests__/mocks/ubs.mock';

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(api, 'get').mockImplementation(() =>
      Promise.resolve({
        data: ubsList,
      }),
    );
  });

  const renderComponent = () => {
    return render(
      <LoaderProvider>
        <App />
      </LoaderProvider>,
    );
  };

  beforeEach(() => {});

  it('should render App correctly', () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });
});
