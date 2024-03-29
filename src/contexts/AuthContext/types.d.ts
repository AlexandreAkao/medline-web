interface IAuthContext {
  signed: boolean;
  user: IUser | null;
  handleLogin: (userData: IUserLogin) => Promise<void>;
  handleLogout: () => void;
  saveUserInfo: (user: IUser) => void;
  isEmployee: boolean | null;
}
