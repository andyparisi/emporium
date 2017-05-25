import { Request, Response } from 'express';
import User from '../models/User';
import EmpService from './EmpService';
import { AUTH_SECRET } from 'secrets';
const jwt = require('jsonwebtoken');
const passport = require('passport');


export default class Users extends EmpService {
  constructor() {
    // Set the route prefix
    super("users");

    // Create the child routes
    this.get('/', this.getAll);
    this.get('/:userId', this.getOne);
    this.post('/login', this.login, false);
  }

  public getAll(req: Request, res: Response): void {
    User.find({}).exec((err, users) => {
      res.json(users);
    }) 
  }

  public getOne(req: Request, res: Response): void {
    User.findOne({})
    .exec((err, user) => {
      res.json(user);
    });
  }

  public login(req: Request, res: Response): void {
    User.findOne({})
    .exec((err, user) => {
      let token = jwt.sign({
        user: user
      }, AUTH_SECRET);
      res.json(token);
    });
  }
}