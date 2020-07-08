const awsServerlessExpress = require("aws-serverless-express");
const express = require("express");
 
const app = express();
 
app.get("/sum", (req, res) => {

  let a = req.query.a
  let b = req.query.b

  const result = parseFloat(a) + parseFloat(b)

  res.json({
    result: result
  });
});
 

 
const server = awsServerlessExpress.createServer(app);
 
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};