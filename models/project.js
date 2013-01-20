var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    mediaSchema = new Schema({
      name          : String,
      originalName  : String,
      fileSize      : Number,
      description   : String,
      position      : Number

    });

    videoSchema = new Schema({
      name        : String,
      url         : String,
      description : String
    })

    Project = new Schema({
      position            : Number, 
      name                : String,
      description         : String,
      translation         : String,
      descriptionSource   : String,
      translationSource   : String,
      descriptionVersion  : [String],
      translationVersion  : [String],
      category            : Boolean, 
      media               : [mediaSchema],
      video               : [videoSchema],
      visible             : Boolean
    });

mongoose.model('Project', Project);
mongoose.model('Media', mediaSchema);
mongoose.model('Video', videoSchema);

mongoose.connect('mongodb://localhost/lisatruttmann');