var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));


app.listen(3000, function() {
  console.log('Listening on 3000...');
});