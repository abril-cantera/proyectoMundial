const { Player, PlayerSchema } = require('./player.model');
const { Group, GroupSchema } = require('./group.model');
const { Selection, SelectionSchema } = require('./selection.model');
const { Match, MatchSchema } = require('./match.model');
const { MatchSelection, MatchSelectionSchema } = require('./match-selection.model');

function setupModels(sequelize) {
  Player.init(PlayerSchema, Player.config(sequelize));
  Group.init(GroupSchema, Group.config(sequelize));
  Selection.init(SelectionSchema, Selection.config(sequelize));
  Match.init(MatchSchema, Match.config(sequelize));
  MatchSelection.init(MatchSelectionSchema, MatchSelection.config(sequelize));

  Player.associate(sequelize.models);
  Group.associate(sequelize.models);
  Selection.associate(sequelize.models);
  Match.associate(sequelize.models);
}

module.exports = setupModels;
