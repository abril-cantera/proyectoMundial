const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class MatchService {

  constructor() {
  }

  async create(data) {
    const newMatch = await models.Match.create(data);
    return newMatch;
  }

  async addItem(data) {
    const newItem = await models.MatchSelection.create(data);
    return newItem;
  }


  async find() {
    const options = {
      include: ['group', 'items'],
      where: {}
    }
    const match = await models.Match.findAll(options);
    return match;
  }

  async findOne(id) {
    const match = await models.Match.findByPk(id, {
      include: [
        'items'
      ]
    });
    return match;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }


  async delete(id) {
    const match = await this.findOne(id);
    await match.destroy();
    return { id };
  }

}

module.exports = MatchService;
