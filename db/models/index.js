const { Player, PlayerSchema } = require('./player.model');
const { Group, GroupSchema } = require('./group.model');
const { Selection, SelectionSchema } = require('./selection.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderSelection, OrderSelectionSchema } = require('./order-selection.model');

function setupModels(sequelize) {
  Player.init(PlayerSchema, Player.config(sequelize));
  Group.init(GroupSchema, Group.config(sequelize));
  Selection.init(SelectionSchema, Selection.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderSelection.init(OrderSelectionSchema, OrderSelection.config(sequelize));

  Player.associate(sequelize.models);
  Group.associate(sequelize.models);
  Selection.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
