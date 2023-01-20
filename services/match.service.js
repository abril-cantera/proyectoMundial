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


  // async removeItem(id) {
  //   const Item = await models.MatchSelection.findOne(id);
  //   return Item;
  // }

  async find() {
    const options = {
      include: ['selection'],
      where: {}
    }
    const match = await models.Group.findAll(options);
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

  // async delete(id) {
  //   const orders = await this.Order.filter((item) => item.id === id)
  //   await orders.destroy();
  //   return { id };
  // }

  async delete(id) {
    const match = await this.findOne(id);
    await match.destroy();
    return { id };
  }

}

module.exports = MatchService;
