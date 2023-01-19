const express = require('express');

const PlayerService = require('./../services/player.service');
const validatorHandler = require('../middlewares/validator.handler');
const { updatePlayerSchema, createPlayerSchema, getPlayerSchema } = require('./../schemas/player.schema');

const router = express.Router();
const service = new PlayerService();

router.get('/', async (req, res, next) => {
  try {
    const players = await service.find();
    res.json(players);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getPlayerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const players = await service.findOne(id);
      res.json(players);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPlayerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPlayer = await service.create(body);
      res.status(201).json(newPlayer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getPlayerSchema, 'params'),
  validatorHandler(updatePlayerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const players = await service.update(id, body);
      res.json(players);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getPlayerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

