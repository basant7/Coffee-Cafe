var express = require('express');
const router = express.Router();
var path = require('path')


var index = require('./routes/index');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded());

app.use('/', index);



app.listen(3000,()=>{
    console.log("Listening on port")
}) 