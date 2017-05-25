import { Router } from 'express';
import IEmpService from '../interfaces/IEmpService';
const passport = require('passport');


export default class EmpService implements IEmpService {
  router;
  prefix;

  constructor(prefix: string) {
    this.router = Router();
    this.prefix = prefix;
  }

  public route(verb: string, path: string, handler: any, auth: boolean = true): void {
    let args = [];

    args.push(path);
    
    if(auth) {
      args.push(passport.authenticate('jwt', { session: false }));
    }

    args.push(handler);

    this.router[verb](...args);
  }

  public get(path: string, handler: any, auth?: boolean): void {
    this.route('get', path, handler, auth);
  }

  public put(path: string, handler: any, auth?: boolean): void {
    this.route('put', path, handler, auth);
  }

  public post(path: string, handler: any, auth?: boolean): void {
    this.route('post', path, handler, auth);
  }

  public delete(path: string, handler: any, auth?: boolean): void {
    this.route('delete', path, handler, auth);
  }
}