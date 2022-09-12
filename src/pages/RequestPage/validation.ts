import { isEmpty, isNil } from 'ramda';

export const isFormValid = (form: IRequestForm) => {
  const values = Object.values(form);

  // eslint-disable-next-line no-restricted-syntax
  for (const value of values) {
    if (isEmpty(value) || isNil(value)) return false;
  }

  return true;
};
