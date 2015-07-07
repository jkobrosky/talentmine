var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Track = require('./api/models/Track');

mongoose.connect('mongodb://localhost/talentmine');

var app = express();

app.use(bodyParser.json());

var port = 8888;

// Tracks
app.get('/api/tracks', function(req, res) {
	Track.find({}).exec().then(function(tracks) {
		return res.json(tracks);
	})
});

app.get('/api/tracks/:track_id', function(req, res) {
	Track.findOne({ _id: req.params.track_id })
	.exec().then(function(track) {
		if(!track) {
			return res.status(404).end();
		} else {
			return res.json(track);
		}
	})
});

app.post('/api/tracks', function(req, res) {
	Track.create({
		name: req.body.name,
		genre: req.body.genre
	}, function(err, new_track) {
		if(err){
			return res.status(500).json(err);
		} else {
			return res.json(new_track);
		}
	});
});

app.put('/api/tracks/:track_id', function(req, res) {

});

// Artists
app.get('/api/artists', function(req, res) {
	return res.json([]);
});


app.get('/api/artists/:artist_id', function(req, res) {
	return res.json({ name: req.params.artist_id });
});

app.post('/api/artists', function(req, res) {

});

// Labels
app.get('/api/labels', function(req, res) {
	return res.json([]);
});

app.get('/api/labels/:label_id', function(req, res) {
	return res.json({ name: req.params.label_id });
});

app.post('/api/labels', function(req, res) {

});

app.listen(port);