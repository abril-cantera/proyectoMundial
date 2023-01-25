const Joi = require('joi');

const id = Joi.number().integer();
const groupId = Joi.number().integer();
const matchId = Joi.number().integer();
const selectionId = Joi.number().integer();
const goles = Joi.number().integer();

const getMatchSchema = Joi.object({
  id: id.required(),
});

const createMatchSchema = Joi.object({
  groupId: groupId.required(),
});

const addItemSchema = Joi.object({
  matchId: matchId.required(),
  selectionId: selectionId.required(),
  goles: goles.required(),
});

// const removeItemSchema = Joi.object({
//   orderId: orderId.required(),
//   selectionId: selectionId.required(),
// });

module.exports = { getMatchSchema, createMatchSchema, addItemSchema };
