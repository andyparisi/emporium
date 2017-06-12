import { Request, Response } from 'express';
import Service from '../models/Service';
import EmpService from './EmpService';


export default class Services extends EmpService {
  constructor() {
    // Set the route prefix
    super("services");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Service.find({}).exec((err, services) => {
      res.json(services);
    }) 
  }
}