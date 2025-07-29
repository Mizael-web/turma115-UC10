


const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const PrototipoModel = sequelize.define('Prototipo', {

    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,    
        allowNull: false,          
        validate: {          
          notEmpty: {
            msg: "O título deve ser preenchido",
          },
        },
      },
       

    },
    desricao: {
        type: DataTypes.STRING,     
        allowNull: false,          
        validate: {          
          notEmpty: {
            msg: "A descrição deve ser preenchida",
          },
        },
      },
    
      categoria: {
        type: DataTypes.STRING,    
        allowNull: false,           
        validate: {
          // Validação para aceitar somente uma das opções listadas
          isIn: {
            args: [["Inovacao", "Robotica", "Sustentabilidade"]],  // Categorias permitidas
            msg: "Categoria deve ser: Inovacao, Robotica ou Sustentabilidade.",
          },
        },
      
      expositorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'expositor', // Nome da tabela referenciada
            key: 'id'          // Chave primária da tabela referenciada
        }       

      }
},
    {
        tableName: 'prototipo',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    },

)

module.exports = PrototipoModel;