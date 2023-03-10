const { Model, DataTypes } = require('sequelize');

const GROUP_TABLE = 'group';

const GroupSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nameGroup: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}


class Group extends Model {

  static associate(models) {
    this.hasMany(models.Selection, {
      as: 'selection',
      foreignKey: 'groupId'
    });
    this.hasMany(models.Match, {
      as: 'match',
      foreignKey: 'groupId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GROUP_TABLE,
      modelName: 'Group',
      timestamps: false
    }
  }
}

module.exports = { Group, GroupSchema, GROUP_TABLE };


