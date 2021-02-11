const { response } = require("express");
const express = require("express");
const Router = express.Router();
const bodyParser = require("body-parser");
const mysqlConnection = require("../connection");
const app = express();
app.use(bodyParser.json());
Router.post("/", (req, res)=>{
    console.log(req.body);
    var companyid = req.body.companyid;
    var productname = req.body.productname;
    var productid = req.body.productid;
    mysqlConnection.query("INSERT INTO product (companyid, productname, productid) values (?, ?, ?)",[companyid, productname, productid], (err, rows, fields)=>{
        if(!err){
            console.log("in query");
            res.send("inserted successfully");
        }
        else{
            console.log("no data");
            console.log(err);
        }
    });

});

Router.get("/", (req, res)=>{
    //console.log("in function");
    mysqlConnection.query("SELECT company.companyname, product.productname, product.productid from product join company on company.companyid = product.companyid", (err, rows, fields)=>{
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