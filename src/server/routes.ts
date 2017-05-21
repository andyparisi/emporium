import Users from './controllers/Users'

export default app => {
  app.use('/api/users', Users);
  // const routes = [Users];

  // routes.forEach(r => {
  //   const { path, handler } = r;
  //   let { method } = r;
  //   let args = [];
  //   method = method.toLowerCase();

  //   // Apply middleware
  //   // if(middleware != null) {
  //   //   args.push(middleware);
  //   // }

  //   // Add the route handler
  //   args.push((req, res) => {
  //     handler(req, res);
  //   });

  //  app.route(`/api/${path}`)[method](...args);
};