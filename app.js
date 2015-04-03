var express = require('express');
var ejs = require('ejs');			// for easy html redering
var app = express(); 
var Dvd = require('./models/Dvd');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index', {
	});
});

app.get('/dvds', function(req, res) {
	Dvd.findAll({
		where: {
				title: {
					like: '%' + req.query.title + '%'
				},
				award: req.query.award
		}
	}).then(function(results) {
		res.render('dvds', {
			dvds: results, 
			title: req.query.title
		});					// view model 
	})
});

	
app.listen(3000, function() {
	console.log('Listening on localhost: 3000');
});