const Sequelize = require('sequelize');

(async ()=>{
    const gymDB = require('./IntegracaoDataBase');
    const tabela = require('./tabelaTeste')
    await gymDB.sync();
    
    /* tabela.create({
        Nome_da_materia:'Matemática',
        Conteudo:'Funções',
        intervalo:'2'
    }) */

    let retornoTabela = await tabela.findAll();
    let objetoFormatado = {
        "Materia": "teste",
        "conteudo": undefined,
        "intervalo": undefined
    }

    console.log(retornoTabela[0].Nome_da_materia)
    let arrayRetornoFormatado = retornoTabela.map(object => {
        objetoFormatado.Materia = object.Nome_da_Materia;
        objetoFormatado.conteudo = object.Conteudo;
        objetoFormatado.intervalo = object.intervalo;
    })
    console.log(arrayRetornoFormatado)


})()