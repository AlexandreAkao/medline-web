interface IUbs {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  address: IAddress;
  doctors: number;
  early_t?: string;
  late_t?: string;
}

interface IUbsOptions extends IUbs {
  value: string;
  label: string;
}
