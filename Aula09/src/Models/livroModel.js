
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/configDB');

const LivroModel = sequelize.define('livro', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    anoPublicacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: "Ano de publicação deve ser um número inteiro"
            },
            min: {
                args: [1450],
                msg: "Ano de publicação deve ser maior ou igual a 1450"
            },
            max: {
                args: [new Date().getFullYear()],
                msg: `Ano de publicação deve ser menor ou igual a ${new Date().getFullYear()}`
            }
        }
    },
    genero: {
        type: DataTypes.STRING(50), // Corrigido: BOOLEAN não faz sentido para "gênero"
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: {
                msg: "Preço deve ser um número decimal"
            },
            min: {
                args: [0],
                msg: "Preço deve ser maior ou igual a 0"
            }
        }
    }
}, {
    tableName: 'livro',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
});

module.exports = LivroModel;
