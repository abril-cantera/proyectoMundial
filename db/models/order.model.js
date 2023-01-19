const { Model, DataTypes, Sequelize } = require('sequelize');
const { GROUP_TABLE } = require('./group.model');

const ORDER_TABLE = 'orders';

const OrderSchema = {
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


class Order extends Model {

  static associate(models) {
    this.belongsTo(models.Group, {
      as: 'group',
    });
    this.belongsToMany(models.Selection, {
      as: 'items',
      through: models.OrderSelection,
      foreignKey: 'orderId',
      otherKey: 'selectionId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = { Order, OrderSchema, ORDER_TABLE };
