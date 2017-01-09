var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var petRouter = require('./routes/petRouter');
var path = require('path');

app.set('port', (process.env.PORT || 3003));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/allpets', petRouter);
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    var pathToSend = path.join(__dirname, '../public/index.html');
    console.log('base url hit', pathToSend);
    res.sendFile(pathToSend);
}); //end base url

//---spin up server---//
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get("port"));
}); //end app.listen


mongoose.connect('mongodb://localhost:27017/petDirectory');
//connect to db
