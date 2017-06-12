import Users from './controllers/Users'
import Locations from './controllers/Locations'
import Clients from './controllers/Clients'
import Appointments from './controllers/Appointments'
import Services from './controllers/Services'
import Discounts from './controllers/Discounts'

export default app => {
    const routes = [
      Users,
      Locations,
      Clients,
      Appointments,
      Services,
      Discounts
    ];

  routes.forEach(C => {
    const c = new C();
    app.use(`/api/${c.prefix}`, c.router);
  });
}