interface IRequestForm {
  description: number;
  text: string;
  type: number;
  file: File | null;
}

type RequestStatusType = 'EM_ESPERA' | 'CONCLUIDO' | 'REJEITADO';

interface IRequest {
  id: number;
  createdAt: string;
  updatedAt: string;
  status: RequestStatusType;
  description: string;
  type: string;
  createdBy: IUser;
  text: string;
  file: null;
  attachment: IAttachment;
}
