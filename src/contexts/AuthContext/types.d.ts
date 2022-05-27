interface IAuthContext {
  signed: boolean;
  user: IUser | null;
  handleLogin: (userData: IUserLogin) => Promise<void>;
  handleLogout: () => void;
}
