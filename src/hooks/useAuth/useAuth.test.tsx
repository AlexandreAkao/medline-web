import { renderHook } from '@testing-library/react-hooks';

import { AuthProvider } from 'providers/AuthProvider';
import { useAuth } from 'hooks/useAuth';
import { RouterProviders } from 'utils/testWrapper';

const createWrapper = ({ children }: IChildren) => (
  <RouterProviders>
    <AuthProvider>{children}</AuthProvider>
  </RouterProviders>
);

describe('useAuth', () => {
  const renderCustomHook = () =>
    renderHook(() => useAuth(), {
      wrapper: createWrapper,
    });

  it('should throw an error when not wrapper a AuthProvider', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.error).toEqual(new Error('Your component must be wrapped in a AuthProvider'));
  });

  it('should render successfully when wrapper a AuthProvider', () => {
    const { result } = renderCustomHook();
    expect(Object.keys(result.current)).toEqual(
      expect.arrayContaining(['handleLogin', 'handleLogout', 'user', 'signed']),
    );
    expect(result.error).toBeUndefined();
  });
});
