var mongoose = require('mongoose');

var Comment = new mongoose.Schema({
  // the passport-local-mongoose module will automatically
  // create a username and other fields for the hash, etc.
  // feel free to add additional fields below
  username: String,
  created_at: Date,
  updated_at: Date,
  text: String

});

module.exports = mongoose.model('Comment', Comment);