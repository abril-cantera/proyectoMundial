const express = require('express');

const SelectionService = require('./../services/selection.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createSelectionSchema, updateSelectionSchema, getSelectionSchema, querySelectionSchema } = require('./../schemas/selection.schema');

const router = express.Router();
const service = new SelectionService();

router.get('/',
  validatorHandler(querySelectionSchema, 'query'),
  async (req, res, next) => {
    try {
      const selection = await service.find(req.query);
      res.json(selection);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHandler(getSelectionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const selection = await service.findOne(id);
      res.json(selection);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createSelectionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newSelection = await service.create(body);
      res.status(201).json(newSelection);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getSelectionSchema, 'params'),
  validatorHandler(updateSelectionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const selection = await service.update(id, body);
      res.json(selection);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getSelectionSchema, 'params'),
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
