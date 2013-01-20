
/**
 * Module dependencies.
 */

var express = require('express')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();

require('./models/project');


app.configure(function(){
  app.set('port', process.env.PORT || 3123);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser({keepExtensions: true, uploadDir: __dirname + '/public/uploads'}));
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('public/javascripts', express.static(path.join(__dirname, 'public/javascripts')));
  app.use('public/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));
});

var routes = require('./routes');

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/project/:id', routes.project);
app.get('/users', user.list);
app.post('/admin/login', routes.admin.login);
app.get('/admin/authenticate', routes.admin.authenticate);
app.get('/admin', routes.admin.index);
app.post( '/admin/create', routes.admin.create );
app.get( '/admin/delete/:id', routes.admin.delete );
app.get( '/admin/delete_media/:id/:imgid', routes.admin.deleteMedia );
app.get( '/admin/delete_video/:id/:vidid', routes.admin.deleteVideo );
app.get( '/admin/edit/:id', routes.admin.edit );
app.post( '/admin/update/:id', routes.admin.update );
app.post( '/admin/media/:id', routes.admin.media);
app.post( '/admin/video/:id', routes.admin.video);
app.post( '/admin/projectsort/:id', routes.admin.projectsort);
app.post( '/admin/imgedit/:id', routes.admin.imgedit);
app.post( '/admin/videdit/:id', routes.admin.videdit);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
