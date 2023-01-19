const express = require('express');

const selectionRouter = require('./selection.router');
const groupRouter = require('./group.router');
const playerRouter = require('./player.router');
const orderRouter = require('./orders.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/selection', selectionRouter);
  router.use('/group', groupRouter);
  router.use('/player', playerRouter);
  router.use('/orders', orderRouter);
}

module.exports = routerApi;
