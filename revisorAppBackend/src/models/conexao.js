const mysql = require('mysql2/promise');

const conection = mysql.createPool({
    host:process.env.MySQLhost,
    user:process.env.MySQLuser,
    password:process.env.MySQLpassword ,
    database:process.env.MySQLdatabase,
});
// porta do banco de dados = 3306
module.exports = conection;
