const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const departmentRoute = require('./department.route');
<<<<<<< HEAD
const taskRoute = require('./task.route');
=======
const projectRoute = require('./project.route');
>>>>>>> e26ed0f8dfe97cb248ba7748571de1fcd5507e92
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
<<<<<<< HEAD
    path: '/tasks',
    route: taskRoute,
=======
    path: '/projects',
    route: projectRoute,
>>>>>>> e26ed0f8dfe97cb248ba7748571de1fcd5507e92
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
