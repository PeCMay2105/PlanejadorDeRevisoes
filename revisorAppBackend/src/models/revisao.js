const dataBase = require('./conexao')

export const getRevisoes = async ()=>{
    const revisoes = await dataBase.execute("select * from tabelaRevisao");
    return revisoes;
    

}

