const { Model, DataTypes, Sequelize } = require('sequelize');

const { MATCH_TABLE } = require('./match.model');
const { SELECTION_TABLE } = require('./selection.model');

const MATCH_SELECTION_TABLE = 'match_selection';

const MatchSelectionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  goles: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  matchId: {
    field: 'match_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MATCH_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
  }
}

class MatchSelection extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MATCH_SELECTION_TABLE,
      modelName: 'MatchSelection',
      timestamps: false
    }
  }
}

module.exports = { MatchSelection, MatchSelectionSchema, MATCH_SELECTION_TABLE };
