const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrderService {

  constructor() {
  }

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderSelection.create(data);
    return newItem;
  }


  async find() {
    const options = {
      include: ['selection'],
      where: {}
    }
    const match = await models.Group.findAll(options);
    return match;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        // {
        //   association: 'group',
        //   include: ['selection']
        // },
        'items'
      ]
    });
    return order;
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

module.exports = OrderService;
