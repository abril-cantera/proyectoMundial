const express = require('express');

const productsRouter = require('./products.router');
const groupRouter = require('./group.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/group', groupRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/auth', authRouter);
  router.use('/profile', profileRouter);
}

module.exports = routerApi;
