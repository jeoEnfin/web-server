var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuth: function(req, res, next) {
        console.log('private');
        next();
    },
    logger: function(req, res, next) {
        var date = new Date().toString();
        console.log('Request :'+ date + req.method+' '+req.originalUrl);
        next();
    },
};

//app.use(middleware.requireAuth);
app.use(middleware.logger);

app.get('/about',middleware.requireAuth, function(req, res) {
    res.send('About jeo');
  });

app.use(express.static(__dirname + '/public'));  

app.listen(3000, function() {
console.log('Listening on port '+PORT);
});