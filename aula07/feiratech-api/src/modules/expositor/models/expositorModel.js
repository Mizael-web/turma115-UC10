
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../config/configDb');

const ExpositorModel = sequelize.define('Expositor', {

    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,    
        allowNull: false,          
        unique: true,              // Deve ser único no banco (não pode repetir)
        validate: {
          // Validação para garantir formato válido de email
          isEmail: { msg: "Email inválido" },
        },
      },
    
    instituicao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},

    {
        tableName: 'expositor',
        createdAt: 'criado_em',
        updatedAt: 'atualizado_em'
    },

)

module.exports = ExpositorModel;