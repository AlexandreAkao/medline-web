import { isEmpty } from 'ramda';

export const getUserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user') ?? '{}');

  return isEmpty(user) ? null : (user as IUser);
};

export const geToken = () => localStorage.getItem('token');
