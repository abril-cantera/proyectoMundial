const { Model, DataTypes } = require('sequelize');

const { GROUP_TABLE } = require('./group.model');

const SELECTION_TABLE = 'selection';

const SelectionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nameEquipment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  groupId: {
    field: 'group_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GROUP_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}


class Selection extends Model {

  static associate(models) {
    this.belongsTo(models.Group, { as: 'group' });
    this.hasMany(models.Player, {
      as: 'player',
      foreignKey: 'selectionId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SELECTION_TABLE,
      modelName: 'Selection',
      timestamps: false
    }
  }
}

module.exports = { Selection, SelectionSchema, SELECTION_TABLE };
