import Users from './controllers/Users'
import Locations from './controllers/Locations'
import Clients from './controllers/Clients'
import Appointments from './controllers/Appointments'

export default app => {
    const routes = [Users, Locations, Clients, Appointments];

  routes.forEach(C => {
    const c = new C();
    app.use(`/api/${c.prefix}`, c.router);
  });
}