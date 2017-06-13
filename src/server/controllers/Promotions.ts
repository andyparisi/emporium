import { Request, Response } from 'express';
import Promotion from '../models/Promotion';
import EmpService from './EmpService';


export default class Promotions extends EmpService {
  constructor() {
    // Set the route prefix
    super("services");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Promotion.find({}).exec((err, promotions) => {
      res.json(promotions);
    }) 
  }
}