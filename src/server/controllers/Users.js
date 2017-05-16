import User from '../models/User';
const Users = {
  path: "users",
  method: "GET",
  handler: (req, res) => {
    User.find({}).exec((err, users) => {
      res.json(users);
    }) 
  }
};

export default [ Users ];