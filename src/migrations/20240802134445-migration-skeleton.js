'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'tb_lugares',
      {
        id: { type: Sequelize.DataTypes.UUID, defaultValue: Sequelize.fn('gen_random_uuid'), primaryKey: true },
        titulo: { type: Sequelize.DataTypes.STRING(50), allowNull: false, unique: true },
        descricao: { type: Sequelize.DataTypes.TEXT, allowNull: false },
        cidade: { type: Sequelize.DataTypes.STRING(30), allowNull: false },
        url_imagem: { type: Sequelize.DataTypes.STRING(200) },
        url_mapa: { type: Sequelize.DataTypes.STRING(200) },
        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE },
    },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_lugares');
  }
};
