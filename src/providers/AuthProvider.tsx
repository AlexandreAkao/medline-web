import { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from 'contexts/AuthContext';
import { getUserInfo } from 'utils/authentication';
import api from 'service/api';
import { useLoader } from 'hooks/useLoader';

export function AuthProvider({ children }: IChildren) {
  const navigate = useNavigate();
  const { setIsLoading } = useLoader();
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const saveUserInfo = (userInfo: IUser) => {
    localStorage.setItem('user', JSON.stringify(userInfo));
    setUser(userInfo);
    setSigned(true);
  };

  const handleLogin = useCallback(
    async (userData: IUserLogin) => {
      try {
        setIsLoading(true);
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
            saveUserInfo(userInfo.data);
            if (userInfo.data.crm) {
              navigate('/employee/prescription');
            } else {
              navigate('/');
            }
          }
        }
      } finally {
        setIsLoading(false);
      }
    },
    [navigate, setIsLoading],
  );

  const handleLogout = useCallback(() => {
    setSigned(false);
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    navigate('/');
  }, [navigate]);

  const isEmployee = useMemo(() => {
    if (user?.crm) return true;

    if (user?.crm === undefined) return null;

    return false;
  }, [user?.crm]);

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
      saveUserInfo,
      isEmployee,
    }),
    [handleLogin, handleLogout, isEmployee, signed, user],
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
