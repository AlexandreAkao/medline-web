type RequestFormTypes = 'description' | 'text' | 'type' | 'file';

interface IUserRegisterActiona {
  type: RequestFormTypes;
  payload: string | number | File;
}
