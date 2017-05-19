const globby = require('globby');
const path = require('path');

// const Users = require('./controllers/Users')
import Users from './controllers/Users'

export default app => {
  Users.forEach(p => {
    console.log(p);
    const c = require(p);
    c.forEach(r => {
      const { path, handler, middleware } = r;
      let { method } = r;
      let args = [];
      method = method.toLowerCase();

      // Apply middleware
      if(middleware != null) {
        args.push(middleware);
      }

      // Add the route handler
      args.push((req, res) => {
        handler(req, res);
      });

      app.route(`/api/${path}`)[method](...args);
    });
  });
};