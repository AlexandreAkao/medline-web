type EditUserRegisterTypes = 'name' | 'password' | 'email';

interface IEditUserRegisterAction {
  type: EditUserRegisterTypes;
  payload: string;
}
