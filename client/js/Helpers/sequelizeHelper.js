 class sequelizeHelper{

     sequelize = require('sequelize');
     BancoDeDados = require('../Models/DBModel.js');
     
     constructor(){
        (async()=>{
            this.BancoDeDados.define("RevisoesD",{
                Nome_da_Matéria:{
                    type:this.sequelize.DataTypes.STRING,
                    allowNull:false
                },
                Conteudo:{
                    type:this.sequelize.DataTypes.STRING,
                    allowNull:false
                },
                Intervalo:{
                    type:this.sequelize.DataTypes.INTEGER,
                    allowNull: false
                },
                UltimaRevisao:{
                    type: this.sequelize.DataTypes.DATE
                }

            })
        })

        
     }
     
}



