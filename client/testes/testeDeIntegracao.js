const Sequelize = require('sequelize');

(async ()=>{
    const gymDB = require('./IntegracaoDataBase');
    const tabela = require('./tabelaTeste')
    await gymDB.sync();
    
    tabela.create({
        Nome_da_materia:'Matemática',
        Conteudo:'Funções',
        intervalo:'2'
    })

    console.log( await tabela.findAll("revisoes"))
})()