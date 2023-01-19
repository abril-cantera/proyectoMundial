const Joi = require('joi');

const id = Joi.number().integer();
const nameGroup = Joi.string().min(3).max(15);

const createGroupSchema = Joi.object({
  nameGroup: nameGroup.required(),
});

const updateGroupSchema = Joi.object({
  nameGroup: nameGroup,
});

const getGroupSchema = Joi.object({
  id: id.required(),
});

module.exports = { createGroupSchema, updateGroupSchema, getGroupSchema }
