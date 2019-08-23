var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// curl -X POST localhost:3000 -H "Content-Type: application/json" -d '{"color":"red"}'
// curl -X GET localhost:3000

var logged = {};

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(JSON.stringify(logged));
});

app.post('/', (req, res) => {
  if(req){
    var json = req.body;
    var color = json['color'];

    console.log(color);

    if(logged[color])
      logged[color]++;
    else
      logged[color] = 1;
  }
  res.send('OK');
});

app.delete('/', (req, res) => {
  logged = {};
  res.send('OK');
});

app.listen(3000);
