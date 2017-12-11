//html route setup
var Path = require('path');
// get FRIENDS array in JSON format 
module.exports = function(app)
{
	//Routes
	APP.get('/', function(req, res){

		res.sendFile((PATH.join(__dirname, "home.html")));

	});
	//survey route
	APP.get('/survey', function(req, res){
		res.sendFile((PATH.join(__dirname, "survey.html")));

	});
}

module.exports = test;