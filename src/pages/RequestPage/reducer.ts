export const requestFormReducer = (state: IRequestForm, action: IUserRegisterActiona) => {
  switch (action.type) {
    case 'description':
    case 'text':
    case 'type':
    case 'file':
      return { ...state, [action.type]: action.payload };
    default:
      return state;
  }
};

export const requestFormInitialState: IRequestForm = {
  description: -1,
  text: '',
  type: 1,
  file: null,
};
