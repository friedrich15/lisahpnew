var mongoose = require( 'mongoose' );
var Project  = mongoose.model( 'Project' );
var Media = mongoose.model( 'Media' );

exports.index = function(req, res){
  Project.find().sort("position").exec( function ( err, projects, count ){
    res.render( 'index', {
        title : 'Lisa Truttmann',
        projects : projects
    });
  });
};

exports.project = function(req, res){
  Project.find().sort("position").exec(function ( err, projects ){
    var currentProject = projects.filter(function(projects) { return projects._id == req.params.id; })[0];
    res.render( 'project', {
        title   : currentProject.name + ' : Lisa Truttmann',
        projects : projects,
        currentProject : currentProject
    });
  });

};

exports.admin = require('./admin');
