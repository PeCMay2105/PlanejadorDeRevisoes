const sequelize = require('../../testes/IntegracaoDataBase');

class DB{
    choosenDB = "";
    Sequelize = require('sequelize')
    sequelize = new this.Sequelize('gymdb2','root','Pecm3563#',{
        host: "localhost",
        dialect: "mysql"
    })

    constructor(){
        try{
            this.sequelize.authenticate().then(retorno => {
                console.log(retorno);
                console.log("conexão com o banco de dados bem sucedida")
            })
        }catch(erro){
            console.log(erro);
            console.log("Não foi possível se conectar ao servidor")
        }
        module.exports = this.sequelize
    }

    


   
    


}