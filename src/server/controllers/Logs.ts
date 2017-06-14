import { Request, Response } from 'express';
import Log from '../models/Log';
import EmpService from './EmpService';


export default class Logs extends EmpService {
  constructor() {
    // Set the route prefix
    super("logs");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Log.find({}).exec((err, logs) => {
      res.json(logs);
    }) 
  }
}