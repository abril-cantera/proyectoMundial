const express = require('express');

const GroupService = require('./../services/group.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createGroupSchema, updateGroupSchema, getGroupSchema } = require('./../schemas/group.schema');

const router = express.Router();
const service = new GroupService();

router.get('/',
  async (req, res, next) => {
    try {
      const group = await service.find();
      res.json(group);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getGroupSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const group = await service.findOne(id);
      res.json(group);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createGroupSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newGroup = await service.create(body);
      res.status(201).json(newGroup);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getGroupSchema, 'params'),
  validatorHandler(updateGroupSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const group = await service.update(id, body);
      res.json(group);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getGroupSchema, 'params'),
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
