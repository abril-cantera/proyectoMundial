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
    const group = await models.Group.findAll({
      include: ['selection']
    });
    return group;
  }

  async findOne(id) {
    const group = await models.Group.findByPk(id, {
      include: ['selection']
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
    const group = await this.findOne(id);
    await group.destroy();
    return { id };
  }

}

module.exports = GroupService;
