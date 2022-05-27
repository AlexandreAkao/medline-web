import { createContext } from 'react';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default AuthContext;
