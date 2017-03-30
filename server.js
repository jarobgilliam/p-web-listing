var express = require('express');
var app = express();

app.use(express.static('client'));
app.use(express.static('/client/img'));

app.listen(3000, function() {
  console.log('Listening on 3000...');
});