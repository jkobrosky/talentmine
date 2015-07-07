var mongoose = require('mongoose');

var trackSchema = mongoose.Schema({
	name: String,
	genre: String,
	artists: []
});

module.exports = mongoose.model('Track', trackSchema);