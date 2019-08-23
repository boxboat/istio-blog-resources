var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

const log_backend = process.env.LOG_BACKEND || 'logger-backend:3000';

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/data', (req, res) => {
  request.get(`http://${log_backend}`, (error, resp, body) =>{
    if (error) {
      console.error(error);
      res.send(error);
    } else {
      res.send(body);
    }
  });
});

app.delete('/data', (req, res) => {
  request.delete(`http://${log_backend}`, (error, resp, body) =>{
    if (error) {
      console.error(error);
      res.send(error);
    } else {
      res.send(body);
    }
  });
});

app.listen(3000);
