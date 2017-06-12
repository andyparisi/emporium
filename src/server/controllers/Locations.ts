import { Request, Response } from 'express';
import Location from '../models/Location';
import EmpService from './EmpService';


export default class Locations extends EmpService {
  constructor() {
    // Set the route prefix
    super("locations");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Location.find({}).exec((err, locations) => {
      res.json(locations);
    }) 
  }
}