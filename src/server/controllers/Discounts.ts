import { Request, Response } from 'express';
import Discount from '../models/Discount';
import EmpService from './EmpService';


export default class Discounts extends EmpService {
  constructor() {
    // Set the route prefix
    super("services");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Discount.find({}).exec((err, discounts) => {
      res.json(discounts);
    }) 
  }
}