const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
//console.log("in page");
Router.get("/", (req, res)=>{
    //console.log("in function");
    mysqlConnection.query("SELECT * from customers", (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log("no data");
            console.log(err);
        }
    });

});

module.exports = Router;