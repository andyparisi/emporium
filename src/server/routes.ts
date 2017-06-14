import Users from './controllers/Users'
import Locations from './controllers/Locations'
import Clients from './controllers/Clients'
import Appointments from './controllers/Appointments'
import Services from './controllers/Services'
import Promotions from './controllers/Promotions'
import Employees from './controllers/Employees'
import Transactions from './controllers/Transactions'
import Products from './controllers/Products'
import Logs from './controllers/Logs'

export default app => {
    const routes = [
      Users,
      Locations,
      Clients,
      Appointments,
      Services,
      Promotions,
      Employees,
      Transactions,
      Products,
      Logs
    ];

  routes.forEach(C => {
    const c = new C();
    app.use(`/api/${c.prefix}`, c.router);
  });
}