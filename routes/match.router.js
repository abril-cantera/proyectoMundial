const express = require('express');

const MatchService = require('../services/match.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getMatchSchema,
  createMatchSchema,
  addItemSchema,
} = require('../schemas/match.schema');

const router = express.Router();
const service = new MatchService();

router.get('/',
  async (req, res, next) => {
    try {
      const match = await service.find();
      res.json(match);
    } catch (error) {
      next(error);
    }
  });

router.get(
  '/:id',
  validatorHandler(getMatchSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const match = await service.findOne(id);
      res.json(match);
    } catch (error) {
      next(error);
    }
  }
);


router.post(
  '/',
  validatorHandler(createMatchSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMatch = await service.create(body);
      res.status(201).json(newMatch);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getMatchSchema, 'params'),
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


router.delete('/:id',
  validatorHandler(getMatchSchema, 'params'),
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
