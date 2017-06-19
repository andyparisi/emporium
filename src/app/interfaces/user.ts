export interface IUser {
  isFetching?: boolean;
  count?: number;
  error?: boolean;
  message?: any;
  user?: any;
}

export interface IUserAction {
  type: string;
  payload?: {
    user?: any;
    token?: string;
    message?: any;
  };
}
