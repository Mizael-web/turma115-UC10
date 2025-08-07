
// src/modules/livro/models/livroModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/configDB');

const Livro = sequelize.define('livro', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: {
        args: [2, 100],
        msg: 'Título deve ter pelo menos 2 caracteres'
      },
      notEmpty: {
        msg: 'Título não pode estar vazio'
      },
      is: {
        args: /^[a-zA-Z0-9\sÀ-ú.,'-]+$/i,
        msg: 'Título inválido'
      }
    }
  },
  autor: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Autor não pode estar vazio'
      },
      is: {
        args: /^[a-zA-Z0-9\sÀ-ú.,'-]+$/i,
        msg: 'Autor inválido'
      }
    }
  },
  ano_publicacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'Ano de publicação deve ser um número'
      },
      min: {
        args: 1450,
        msg: 'Ano de publicação inválido'
      },
      max: {
        args: new Date().getFullYear(),
        msg: 'Ano de publicação inválido'
      }
    }
  },
  genero: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isIn: {
        args: [['Fantasia', 'Drama', 'Aventura', 'Terror', 'Romance']],
        msg: 'Gênero inválido'
      }
    }
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: {
        msg: 'Preço deve ser um número'
      },
      min: {
        args: [0.01],
        msg: 'Preço deve ser maior que zero'
      }
    }
  }
}, {
  tableName: 'livro',
  timestamps: false
});

module.exports = Livro;
