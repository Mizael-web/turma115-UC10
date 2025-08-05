const { DataTypes } = require('sequelize');
const sequelize = require('../config/configDb');

const LivroModel = sequelize.define('Livro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 255], // Minimum 2 characters
    },
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano_publicacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
    },
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0.01, // Price must be greater than zero
    },
  },
});

module.exports = LivroModel;
