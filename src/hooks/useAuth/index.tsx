import { useContext } from 'react';
import { isEmpty } from 'ramda';

import AuthContext from 'contexts/AuthContext';

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (isEmpty(context)) {
    throw new Error('Your component must be wrapped in a AuthProvider');
  }

  return context;
};
