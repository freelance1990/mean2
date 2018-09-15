var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/client/dist/client/'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});
 
app.listen(3000);