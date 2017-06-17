export interface IUser {
  isFetching?: boolean;
  count?: number;
  error?: boolean;
  message?: any;
  email?: string;
  firstName?: string;
  lastName?: string;
  _id?: string;
}

export interface IUserAction {
  type: string;
  payload?: {
    user?: any;
    token?: string;
    message?: any;
  };
}
