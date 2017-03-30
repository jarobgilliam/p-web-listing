var express = require('express');
var app = express();

app.use('/client', express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
  console.log('Listening on 3000...');
});