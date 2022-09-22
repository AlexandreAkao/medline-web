import { useContext } from 'react';
import { isEmpty } from 'ramda';

import LoaderContext from 'contexts/LoaderContext';

export const useLoader = (): ILoaderContext => {
  const context = useContext(LoaderContext);

  if (isEmpty(context)) {
    throw new Error('Your component must be wrapped in a LoaderProvider');
  }

  return context;
};
