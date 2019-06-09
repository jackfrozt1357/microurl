const mongoose = require('mongoose');
const shortid = require('shortid');
const urlSchema = mongoose.Schema(
  {
    url :{
      type : String,
      reuired : true
    },
    _id :{
      type :String,
      default: shortid.generate
    }
  }
);


module.exports = mongoose.model('Url',urlSchema);
