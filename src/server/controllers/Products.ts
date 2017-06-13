import { Request, Response } from 'express';
import Product from '../models/Product';
import EmpService from './EmpService';


export default class Products extends EmpService {
  constructor() {
    // Set the route prefix
    super("products");

    // Create the child routes
    this.get('/', this.getAll, false);
  }

  public getAll(req: Request, res: Response): void {
    Product.find({}).exec((err, products) => {
      res.json(products);
    }) 
  }
}