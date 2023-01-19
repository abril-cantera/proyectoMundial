const { Model, DataTypes, Sequelize } = require('sequelize');

const { SELECTION_TABLE } = require('./selection.model')

const PLAYER_TABLE = 'player';

const PlayerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  namePlayer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  selectionId: {
    field: 'selection_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SELECTION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Player extends Model {
  static associate(models) {
    this.belongsTo(models.Selection, { as: 'selection' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PLAYER_TABLE,
      modelName: 'Player',
      timestamps: false
    }
  }
}


module.exports = { PLAYER_TABLE, PlayerSchema, Player }
