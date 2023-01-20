'use strict';

const { GROUP_TABLE } = require('./../models/group.model');
const { SELECTION_TABLE } = require('./../models/selection.model');
const { PLAYER_TABLE } = require('./../models/player.model');
const { MATCH_TABLE } = require('./../models/match.model');
const { MATCH_SELECTION_TABLE } = require('./../models/match-selection.model');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(GROUP_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      nameGroup: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    });
    await queryInterface.createTable(SELECTION_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      nameEquipment: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      groupId: {
        field: 'group_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: GROUP_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
    await queryInterface.createTable(PLAYER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      namePlayer: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      position: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      number: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      selectionId: {
        field: 'selection_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: SELECTION_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    });
    await queryInterface.createTable(MATCH_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      groupId: {
        field: 'group_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: GROUP_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(MATCH_SELECTION_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      goles: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      matchId: {
        field: 'match_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
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
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: SELECTION_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(MATCH_SELECTION_TABLE);
    await queryInterface.dropTable(MATCH_TABLE);
    await queryInterface.dropTable(SELECTION_TABLE);
    await queryInterface.dropTable(GROUP_TABLE);
    await queryInterface.dropTable(PLAYER_TABLE);
  }
};
