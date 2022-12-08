type UserRegisterTypes =
  | 'name'
  | 'password'
  | 'email'
  | 'birthdate'
  | 'cpf'
  | 'rg'
  | 'cep'
  | 'street'
  | 'number'
  | 'city'
  | 'state'
  | 'district';

interface IUserRegisterAction {
  type: UserRegisterTypes;
  payload: string;
}
