var express = require('express');
var app = express();

var bodyparser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');
app.use(logger('dev'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(methodOverride());
app.use(cors());

//ejs,views,public 사용
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

var hwanie = require('./router/hwanie')(app);
app.use('/hwanie',hwanie);

app.get('/',function(req,res){
	res.send('health test');
});

app.listen(9000, function(){
    console.log("connected server!!")
});