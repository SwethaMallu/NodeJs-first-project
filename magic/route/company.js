const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
//console.log("in page");
Router.get("/", (req, res)=>{
    //console.log("in function");
    mysqlConnection.query("SELECT customers.customername, company.companyid, company.companyname from company join customers on company.customerid = customers.id", (err, rows, fields)=>{
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