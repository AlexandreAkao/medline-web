import { userMock } from '__tests__/mocks/user.mock';
import { fileMock } from '__tests__/mocks/file.mock';

export const requestMock = {
  id: 2,
  createdAt: '2022-09-13T22:39:28.305+00:00',
  updatedAt: '2022-09-13T22:39:28.305+00:00',
  status: 'EM_ESPERA',
  description: 'BACITRACINA',
  type: 'RECEITA',
  createdBy: userMock,
  text: 'Receiitaaaa',
  file: null,
  attachment: fileMock,
};
