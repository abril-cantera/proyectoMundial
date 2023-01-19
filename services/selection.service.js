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
    const selection = this.selection.find(item => item.id === id);
    if (!selection) {
      throw boom.notFound('selection not found');
    }
    if (selection.isBlock) {
      throw boom.conflict('selection is block');
    }
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
    const index = this.selection.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('selection not found');
    }
    this.selection.splice(index, 1);
    return { id };
  }

}

module.exports = SelectionService;
