export interface IUser {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

export interface IUserNoPassword {
  id: number;
  name: string;
  email: string;
  CreatedAt: Date;
  UpdatedAt: Date
}