import { useState, useMemo } from 'react';

import LoaderContext from 'contexts/LoaderContext';

export function LoaderProvider({ children }: IChildren) {
  const [isLoading, setIsLoading] = useState(false);

  const loaderContextValue = useMemo<ILoaderContext>(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading],
  );

  return <LoaderContext.Provider value={loaderContextValue}>{children}</LoaderContext.Provider>;
}
