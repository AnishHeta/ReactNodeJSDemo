var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');

var list=["Anish"];

app.use(express.static('./../'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getList',function(req,res){
  res.send(list);
})

app.post('/updateList',function(req,res){
  list.push(req.body.value);
  res.send(list);
})

app.listen(8000, function() {
    console.log('server started on  8000');
});
