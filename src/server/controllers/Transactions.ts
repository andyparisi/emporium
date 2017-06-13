import { Request, Response } from 'express';
import Transaction from '../models/Transaction';
import EmpService from './EmpService';


export default class Transactions extends EmpService {
  constructor() {
    // Set the route prefix
    super("transactions");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Transaction.find({}).exec((err, transactions) => {
      res.json(transactions);
    }) 
  }
}