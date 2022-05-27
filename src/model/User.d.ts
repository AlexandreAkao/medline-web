interface IUserRegisterAddress {
  cep: string;
  street: string;
  number: string;
  city: string;
  state: string;
  district: string;
}

interface IUserRegister {
  name: string;
  password: string;
  email: string;
  birthdate: string;
  cpf: string;
  rg: string;
  address: IUserRegisterAddress;
}

interface IUserAddress {
  id: number;
  createdAt: string;
  updatedAt: string;
  street: string;
  number: number;
  city: string;
  cep: string;
  state: string;
  district: string;
  complement: null;
}

interface IUser {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  address: IUserAddress;
  email: string;
  birthdate: string;
  cpf: string;
  rg: string;
  crm: string;
  type: string;
}

interface IUserLogin {
  email: string;
  password: string;
}
