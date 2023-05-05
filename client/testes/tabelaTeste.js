const Sequelize = require('sequelize');
const db = require('./IntegracaoDataBase');

const revisao = db.define("revisoes",{
    Nome_da_materia:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Conteudo:{
        type: Sequelize.DataTypes.STRING
    },
    intervalo:{
        type:Sequelize.DataTypes.SMALLINT
    }
});

module.exports = revisao;


