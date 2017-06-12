import { Request, Response } from 'express';
import Appointment from '../models/Appointment';
import EmpService from './EmpService';


export default class Appointments extends EmpService {
  constructor() {
    // Set the route prefix
    super("appointments");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Appointment.find({}).exec((err, appointments) => {
      res.json(appointments);
    }) 
  }
}