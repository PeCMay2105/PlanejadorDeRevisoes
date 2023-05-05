const Sequelize = require('sequelize');
const sequelize = new Sequelize('gymdb2','root','Pecm3563#',{
    host:'localhost',
    dialect:'mysql',

});

try{
    sequelize.authenticate().then(response =>{
        console.log("conexão bem sucedida")
    })
}catch(erro){
console.log("Não foi possível se conectar");
}



module.exports = sequelize;
