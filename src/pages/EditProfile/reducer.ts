export const editUserFormReducer = (state: IEditUserRegister, action: IEditUserRegisterAction) => {
  switch (action.type) {
    case 'name':
    case 'password':
    case 'email':
      return { ...state, [action.type]: action.payload };
    default:
      return state;
  }
};

export const editUserFormInitialState = {
  name: '',
  password: '',
  email: '',
};
