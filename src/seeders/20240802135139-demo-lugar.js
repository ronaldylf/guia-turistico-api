'use strict';


/**

{
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        titulo: { type: DataTypes.STRING(50), allowNull: false, unique: true },
        descricao: { type: DataTypes.TEXT, allowNull: false },
        cidade: { type: DataTypes.STRING(30), allowNull: false },
        url_imagem: { type: DataTypes.STRING(200) },
        url_mapa: { type: DataTypes.STRING(200) }
    },

 */


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.bulkInsert('tb_lugares', [
      {
        titulo: "Praça Maria Aragão",
        descricao: `O Memorial Maria Aragão é um museu dedicado a preservar um acervo em homenagem à medica e ativista política maranhense Maria Aragão, localizado na cidade de São Luís. Foi projetado por Oscar Niemeyer e faz parte de um complexo que inclui a Praça Maria Aragão, um anfiteatro e um prédio de apoio.
        Foi a primeira obra de Niemeyer projetada para o Norte e Nordeste do Brasil.`,
        cidade: "cidade do lugar 1",
        url_imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/76/12/cf/memorial-maria-aragao.jpg",
        url_mapa: "https://www.google.com/maps/place/Pra%C3%A7a+Maria+Arag%C3%A3o+-+Centro,+S%C3%A3o+Lu%C3%ADs+-+MA,+65000-000/@-2.5236781,-44.297062,17z/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tb_lugares', null, {});
  }
};
