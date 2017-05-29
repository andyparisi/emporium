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
    this.post('/register', this.register, false);
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
    const { email, password } = req.body;
    if(!email || !password) {
      return res.status(400).json({
        message: "Email and password required"
      });
    }

    User.findOne({
      email: req.body.email
    })
    .exec((err, user) => {
      if(err) {
        res.status(500).json({
          message: err
        });
      }

      if(!user) {
        res.status(400).json({
          message: "User not found"
        });
      }
      // Compare password
      else {
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (err) {
            return res.status(500).json({
              message: err
            });
          }

          if(isMatch) {
            let token = jwt.sign({
              user: user
            }, AUTH_SECRET, {
              expiresIn: "7 days"
            });
            res.json(token);
          }
          else {
            res.status(401).json({
              message: "Authentication failed. Passwords did not match."
            });
          }
        })
      }
    });
  }

  public register(req: Request, res: Response): void {
    const { email, password, firstName, lastName } = req.body;
    if(!email || !password || !firstName || !lastName) {
      res.status(400).json({
        message: "Email, password, first name and last name are required"
      });
    }
    else {
      let user = new User({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      });

      // Save the new user
      user.save(err => {
        if(err) {
          return res.status(400).json({
            message: "Email address already exists"
          });
        }

        res.json({
          message: "User successfully created"
        });
      });
    }
  }
}