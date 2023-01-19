const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class GroupService {

  constructor() {
  }
  async create(data) {
    const newGroup = await models.Group.create(data);
    return newGroup;
  }

  async find() {
    const group = await models.Group.findAll();
    return group;
  }

  async findOne(id) {
    const group = await models.Group.findByPk(id, {
      include: ['products']
    });
    return group;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = GroupService;
