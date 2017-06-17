import { ICounter } from 'interfaces/counter';
import { IStars } from 'interfaces/stars';
import { IUser } from 'interfaces/user';

export interface IStore {
  counter: ICounter;
  stars: IStars;
  user: IUser;
};
