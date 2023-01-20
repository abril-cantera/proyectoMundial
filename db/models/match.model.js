const { Model, DataTypes, Sequelize } = require('sequelize');
const { GROUP_TABLE } = require('./group.model');

const MATCH_TABLE = 'match';

const MatchSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
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
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}


class Match extends Model {

  static associate(models) {
    this.belongsTo(models.Group, {
      as: 'group',
    });
    this.belongsToMany(models.Selection, {
      as: 'items',
      through: models.MatchSelection,
      foreignKey: 'matchId',
      otherKey: 'selectionId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MATCH_TABLE,
      modelName: 'Match',
      timestamps: false
    }
  }
}

module.exports = { Match, MatchSchema, MATCH_TABLE };
