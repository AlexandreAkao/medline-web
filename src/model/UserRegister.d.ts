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
