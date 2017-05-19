import User from '../models/User';

// const Users = {
//   path: "users",
//   method: "GET",
//   handler: (req, res) => {
//     User.find({}).exec((err, users) => {
//       res.json(users);
//     }) 
//   }
// };

interface IUsers {
  path: string,
  method: string,
  middleware?: any
}

class Users implements IUsers {
  path: "users";
  method: "GET";
  
  getUsers() {
    User.find({}).exec((err: any, users: array) => {
      res.json(users);
    }) 
  }
}

export default [ Users ];