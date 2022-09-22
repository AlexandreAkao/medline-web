import { renderHook } from '@testing-library/react-hooks';

import { LoaderProvider } from 'providers/LoaderProvider';
import { useLoader } from 'hooks/useLoader';
import { RouterProviders } from 'utils/testWrapper';

const createWrapper = ({ children }: IChildren) => (
  <RouterProviders>
    <LoaderProvider>{children}</LoaderProvider>
  </RouterProviders>
);

describe('useAuth', () => {
  const renderCustomHook = () =>
    renderHook(() => useLoader(), {
      wrapper: createWrapper,
    });

  it('should throw an error when not wrapper a LoaderProvider', () => {
    const { result } = renderHook(() => useLoader());
    expect(result.error).toEqual(new Error('Your component must be wrapped in a LoaderProvider'));
  });

  it('should render successfully when wrapper a LoaderProvider', () => {
    const { result } = renderCustomHook();
    expect(Object.keys(result.current)).toEqual(expect.arrayContaining(['isLoading', 'setIsLoading']));
    expect(result.error).toBeUndefined();
  });
});
