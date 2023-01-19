const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORDER_TABLE } = require('./order.model');
const { SELECTION_TABLE } = require('./selection.model');

const ORDER_SELECTION_TABLE = 'orders_selection';

const OrderSelectionSchema = {
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
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
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

class OrderSelection extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_SELECTION_TABLE,
      modelName: 'OrderSelection',
      timestamps: false
    }
  }
}

module.exports = { OrderSelection, OrderSelectionSchema, ORDER_SELECTION_TABLE };
