import * as Users from './controllers/Users'

export default app => {
  const routes = [Users];

  routes.forEach(r => {
    app.use(`/api/${r.path}`, r.router);
  });
}