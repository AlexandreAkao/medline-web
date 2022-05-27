export const userFormReducer = (state: IUserRegister, action: IUserRegisterAction) => {
  switch (action.type) {
    case 'name':
    case 'password':
    case 'email':
    case 'cpf':
    case 'rg':
      return { ...state, [action.type]: action.payload };
    case 'birthdate':
      return { ...state, [action.type]: action.payload.split('/').reverse().join('-') };
    case 'cep':
    case 'street':
    case 'number':
    case 'city':
    case 'state':
    case 'district':
      return { ...state, address: { ...state.address, [action.type]: action.payload } };
    default:
      return state;
  }
};

export const userFormInitialState = {
  name: '',
  password: '',
  email: '',
  birthdate: '',
  cpf: '',
  rg: '',
  address: {
    cep: '',
    city: '',
    district: '',
    number: '',
    state: '',
    street: '',
  },
};
