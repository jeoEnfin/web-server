var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = 3000;


//app.use(middleware.requireAuth);
app.use(middleware.logger);

app.get('/about',middleware.requireAuth, function(req, res) {
    res.send('About jeo');
  });

app.use(express.static(__dirname + '/public'));  

app.listen(3000, function() {
console.log('Listening on port '+PORT);
});