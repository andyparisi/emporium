export interface IUser {
  isFetching?: boolean;
  isLoaded?: boolean;
  error?: boolean;
  message?: any;
  user?: any;
}

export interface IUserAction {
  type: string;
  payload?: {
    user?: any;
    message?: any;
  };
}
