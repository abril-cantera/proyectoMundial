const Joi = require('joi');

const id = Joi.number().integer();
const groupId = Joi.number().integer();
const orderId = Joi.number().integer();
const productsId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const getOrderSchema = Joi.object({
  id: id.required(),
});

const createOrderSchema = Joi.object({
  groupId: groupId.required(),
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productsId: productsId.required(),
  amount: amount.required(),
});

module.exports = { getOrderSchema, createOrderSchema, addItemSchema };
