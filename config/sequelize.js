var Sequelize = require('sequelize');		// for databse

var sequelize = new Sequelize('dvd', 'student', 'ttrojan', {
		dialect : 'mysql', 
		host : 'itp460.usc.edu'
}); 


module.exports = sequelize; 