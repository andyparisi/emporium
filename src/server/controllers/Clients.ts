import { Request, Response } from 'express';
import Client from '../models/Client';
import EmpService from './EmpService';


export default class Clients extends EmpService {
  constructor() {
    // Set the route prefix
    super("clients");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Client.find({}).exec((err, clients) => {
      res.json(clients);
    }) 
  }
}