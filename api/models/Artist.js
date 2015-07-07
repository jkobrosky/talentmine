var mongoose = require('mongoose');

var artistSchema = mongoose.Schema({
	name: String,
	tracks: []
});