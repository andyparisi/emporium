import { ICounter } from 'interfaces/counter';
import { IStars } from 'interfaces/stars';

export interface IStore {
  counter: ICounter;
  stars: IStars;
};
