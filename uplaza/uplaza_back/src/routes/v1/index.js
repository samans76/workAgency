const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const servicesRoute = require('./services.route')
const cityRoute = require('./province.route')
const config = require('../../config/config');
const providersRoute = require('./providers.route')
const rolesRoute = require('./roles.route')
const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path:'/services',
    route: servicesRoute
  },
  {
    path:'/city',
    route:cityRoute
  },
  {
    path:'/providers',
    route:providersRoute
  },
  {
    path:'/roles',
    route:rolesRoute
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
