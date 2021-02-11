const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "company",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("connection successful");
    }
    else
    {
        console.log(err);
    }
});

module.exports = mysqlConnection;