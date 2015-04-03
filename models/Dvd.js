var Sequelize = require('sequelize');		// for databse

var sequelize = require('./../config/sequelize');

var Dvd = sequelize.define('dvds', {
	title: {
		field: 'title',
		type: Sequelize.STRING
	},

	award: {
		field: 'award',
		type: Sequelize.STRING
	}
}, {
	timestamps: false
});

module.exports = Dvd; 		// make available 