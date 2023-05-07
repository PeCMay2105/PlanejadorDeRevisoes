
 class DBModel{

    constructor(){

        this.Sequelize = require('sequelize')
        this.mySQL = require('mysql2')

        sequelize = new Sequelize('gymdb2','root','Pecm3563#',{
           host: "localhost",
           dialect: "mysql"
       })

    }

    async autentica(){
        try{
            this.sequelize.authenticate().then(retorno => {
                console.log(retorno);
                console.log("conexão com o banco de dados bem sucedida")
            })
        }catch(erro){
            console.log(erro);
            console.log("Não foi possível se conectar ao servidor")
        }
    }

    async adicionaRevisao(revisao){
        let conexao = this.mySQL.createConnection({
            host: 'localhost',
            user:'root',
            password:'Pecm3563#'
        })

         try{conexao.query(`use gymdb2`).then(()=> conexao.query(`insert into revisoes (Nome_da_Materia,Conteudo,Ultima_Revisao,intervalo) values(${revisao.materia},${revisao.conteudo},${revisao.data},${revisao.intervalo})`))}catch(erro){
            console.log(erro)
         }
         
    }
    async retornaNegociacao(){

    }
    
    

}
