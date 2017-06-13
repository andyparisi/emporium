import { Request, Response } from 'express';
import Employee from '../models/Employee';
import EmpService from './EmpService';


export default class Employees extends EmpService {
  constructor() {
    // Set the route prefix
    super("employees");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Employee.find({}).exec((err, employees) => {
      res.json(employees);
    }) 
  }
}