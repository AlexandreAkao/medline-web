import { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from 'contexts/AuthContext';
import { getUserInfo } from 'utils/authentication';
import api from 'service/api';

export function AuthProvider({ children }: IChildren) {
  const navigate = useNavigate();
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const handleLogin = useCallback(
    async (userData: IUserLogin) => {
      const userResponse = await api.post<ILogin>('login', userData);

      if (userResponse.status === 200) {
        const { idToken, refreshToken } = userResponse.data;
        localStorage.setItem('token', idToken);
        localStorage.setItem('refresh_token', refreshToken);

        const userInfo = await api.get<IUser>('user/info', {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        if (userInfo.status === 200) {
          localStorage.setItem('user', JSON.stringify(userInfo.data));
          setUser(userInfo.data);
          setSigned(true);
          navigate('/');
        }
      }
    },
    [navigate],
  );

  const handleLogout = useCallback(() => {
    setSigned(false);
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    const userLocalStorage = getUserInfo();

    setSigned(!!userLocalStorage);
    if (userLocalStorage) {
      setUser(userLocalStorage);
    }
  }, []);

  const authContextValue = useMemo<IAuthContext>(
    () => ({
      signed,
      user,
      handleLogin,
      handleLogout,
    }),
    [handleLogin, handleLogout, signed, user],
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
