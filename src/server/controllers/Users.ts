import { Router, Request, Response, NextFunction } from 'express';
import User from '../models/User';
import IEmpService from '../interfaces/IEmpService';


export class Users implements IEmpService {
  router;
  path = "users";
  
  constructor() {
    this.router = Router();
    // Create the routes
    this.router.get('/', this.getAll);
    this.router.get('/any', this.getOne);
    this.router.get('/heyz', this.hey);
  }

  public getAll(req: Request, res: Response): void {
    User.find({}).exec((err, users) => {
      res.json(users);
    }) 
  }

  public getOne(req: Request, res: Response): void {
    User.find({}).exec((err, users) => {
      res.json(users[0]);
    })
  }

  public hey(req: Request, res: Response): void {
    res.send("sup bro");
  }
}


const { router, path } = new Users();
export { router, path };