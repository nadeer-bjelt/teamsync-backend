const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const departmentRoute = require('./department.route');
const taskRoute = require('./task.route');
const projectRoute = require('./project.route');
const employeeActivityRoute = require('./employeeActivity.route');
const config = require('../../config/config');

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
    path: '/departments',
    route: departmentRoute,
  },
  {
    path: '/tasks',
    route: taskRoute,
  },
  {
    path: '/projects',
    route: projectRoute,
  },
  {
    path: '/employeeActivity',
    route: employeeActivityRoute,
  },
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
