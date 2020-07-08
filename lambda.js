const awsServerlessExpress = require("aws-serverless-express");
const express = require("express");
 
const app = express();
 
app.get("/user", (req, res) => {
  res.json({
    message: "user route"
  });
});
 
app.get("/catalog", (req, res) => {
  res.json({
    message: "catalog route"
  });
});
 
const server = awsServerlessExpress.createServer(app);
 
exports.handler = (event, context) => { 
  awsServerlessExpress.proxy(server, event, context);
};