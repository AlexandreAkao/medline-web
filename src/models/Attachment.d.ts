interface IAttachment {
  id: number;
  createdAt: string;
  updatedAt: string;
  key: string;
  name: string;
  createdBy: IUser;
  belongsTo: IUser;
}
