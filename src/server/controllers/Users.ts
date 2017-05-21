import { Router, Request, Response, NextFunction } from 'express';
import User from '../models/User';
import IEmpService from '../interfaces/IEmpService';


export class Users implements IEmpService {
  router;
  public path = "users";
  
  constructor() {
    this.router = Router();
    // Create the routes
    this.router.get('/', this.getAll);
    this.router.get('/any', this.getOne);
  }

  public getAll(req: Request, res: Response) {
    User.find({}).exec((err, users) => {
      res.json(users);
    }) 
  }

  public getOne(req: Request, res: Response) {
    User.find({}).exec((err, users) => {
      res.json(users[0]);
    })
  }
}

const { router } = new Users();
export default router;