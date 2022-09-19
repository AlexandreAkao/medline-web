interface IAddress {
  id: number;
  createdAt: string;
  updatedAt: string;
  street: string;
  number: number;
  city: string;
  cep: null | string;
  state: string;
  district: string;
  complement: null | string;
}
