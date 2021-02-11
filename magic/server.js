const express = require('express');
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const CustomerRoutes = require("./route/customer");
const CompanyRoutes = require("./route/company");
const ProductRoutes = require("./route/products");
const SalesRoutes = require("./route/sales");
var app = express();
app.use(bodyParser.json());

app.use("/customer", CustomerRoutes);
app.use("/company", CompanyRoutes);
app.use("/products", ProductRoutes);
app.use("/sales", SalesRoutes);


app.listen(3000, () => console.log("listening on port 3000"));