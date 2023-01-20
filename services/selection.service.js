const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class SelectionService {

  constructor() {
    this.selection = [];
  }

  async create(data) {
    const newSelection = await models.Selection.create(data);
    return newSelection;
  }

  async find(query) {
    const options = {
      include: ['group'],
      where: {}
    }
    const { nameEquipment } = query;
    if (nameEquipment) {
      options.where.nameEquipment = nameEquipment;
    }
    const selection = await models.Selection.findAll(options);
    return selection;
  }



  async findOne(id) {
    const selection = await models.Selection.findByPk(id, {
      include: ['player']
    });
    return selection;
  }

  async update(id, changes) {
    const index = this.selection.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('selection not found');
    }
    const selection = this.selection[index];
    this.selection[index] = {
      ...selection,
      ...changes
    };
    return this.selection[index];
  }

  async delete(id) {
    const selection = await this.findOne(id);
    await selection.destroy();
    return { id };
  }

}

module.exports = SelectionService;
