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
  doctors: number;
  early_t: string;
  late_t: string;
}

interface IUbsOptions extends IUbs {
  value: string;
  label: string;
}
