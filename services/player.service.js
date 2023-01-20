const boom = require('@hapi/boom');
// const bcrypt = require('bcrypt');

const { models } = require('../libs/sequelize');

class PlayerService {
  constructor() { }

  async create(data) {
    const newPlayer = await models.Player.create({
      ...data,
    });
    return newPlayer;
  }

  async find() {
    const rta = await models.Player.findAll({
      include: ['selection']
    });
    return rta;
  }

  async findOne(id) {
    const player = await models.Player.findByPk(id);
    return player;
  }

  async update(id, changes) {
    const player = await this.findOne(id);
    const rta = await player.update(changes);
    return rta;
  }

  async delete(id) {
    const player = await this.findOne(id);
    await player.destroy();
    return { id };
  }
}

module.exports = PlayerService;
