const Joi = require('joi');

const id = Joi.number().integer();
const nameEquipment = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const groupId = Joi.number().integer();


const createSelectionSchema = Joi.object({
  nameEquipment: nameEquipment.required(),
  image: image.required(),
  groupId: groupId.required(),
});

const updateSelectionSchema = Joi.object({
  nameEquipment: nameEquipment,
  image: image,
  groupId: groupId,
});

const getSelectionSchema = Joi.object({
  id: id.required(),
});

const querySelectionSchema = Joi.object({
  nameEquipment
});

module.exports = { createSelectionSchema, updateSelectionSchema, getSelectionSchema, querySelectionSchema }
