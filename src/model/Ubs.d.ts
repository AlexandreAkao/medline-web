interface Address {
  id: number;
  createdAt: string;
  updatedAt: string;
  street: string;
  number: number;
  city: string;
  cep: null;
  state: string;
  district: string;
  complement: string;
}

interface IUbs {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  address: Address;
}

interface IUbsOptions {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  address: Address;
  value: string;
  label: string;
}
