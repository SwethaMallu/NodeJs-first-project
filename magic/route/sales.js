const express = require("express");
const Router = express.Router();
const bodyParser = require("body-parser");
const mysqlConnection = require("../connection");
console.log("in page");
const app = express();
app.use(bodyParser.json());
Router.put("/", (req, res)=>{
    var totalsales = req.body.totalsales;
    var productid = req.body.productid;
    mysqlConnection.query("UPDATE sales set sales.totalsales = ? where sales.productid = ?",[totalsales,productid], (err, rows, fields)=>{
        if(!err){

            res.send("updated successfully");
        }
        else{
            console.log("no data");
            console.log(err);
        }
    });

});

Router.get("/", (req, res)=>{
    console.log("in function");
    mysqlConnection.query("SELECT product.productname, product.productid, sales.totalsales from product join sales on product.productid = sales.productid", (err, rows, fields)=>{
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