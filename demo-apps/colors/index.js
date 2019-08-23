var express = require('express');
var app = express();
var request = require('request');

const color = process.env.COLOR || 'red';
const log_backend = process.env.LOG_BACKEND || 'logger-backend:3000';

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>colors</title>
  </head>
  <body style="background-color: ${color}">
  </body>
</html>`;


app.get('/', (req, res) => {
  res.send(html);
  log();
});

function log(){
  // log locally
  console.log("new request");

  // log to remote backend
  request.post(`http://${log_backend}`, {
    json: {
      color:`${color}`
    }
  }, (error) => {
    if (error) {
      console.error(error);
      return ;
    }
  });
}

app.listen(3000);
