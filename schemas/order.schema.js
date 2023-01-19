const Joi = require('joi');

const id = Joi.number().integer();
const groupId = Joi.number().integer();
const orderId = Joi.number().integer();
const selectionId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const getOrderSchema = Joi.object({
  id: id.required(),
});

const createOrderSchema = Joi.object({
  groupId: groupId.required(),
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  selectionId: selectionId.required(),
  amount: amount.required(),
});

module.exports = { getOrderSchema, createOrderSchema, addItemSchema };
