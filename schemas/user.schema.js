const Joi = require('joi');

const id = Joi.number().integer();
const namePlayer = Joi.string().min(3).max(20);
const position = Joi.string().min(2).max(15);
const number = Joi.number().integer().min(1).max(2);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const productsId = Joi.number().integer();

const createUserSchema = Joi.object({
  namePlayer: namePlayer.required(),
  position: position.required(),
  number: position.required(),
  description: description.required(),
  image: image.required(),
  productsId: productsId.required(),
});

const updateUserSchema = Joi.object({
  namePlayer: namePlayer,
  position: position,
  number: number,
  image: image,
  description: description,
  productsId
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
