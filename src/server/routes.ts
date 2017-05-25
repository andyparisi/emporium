import Users from './controllers/Users'

export default app => {
  const routes = [Users];

  routes.forEach(C => {
    const c = new C();
    app.use(`/api/${c.prefix}`, c.router);
  });
}