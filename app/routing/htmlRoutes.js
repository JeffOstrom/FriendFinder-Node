//html route setup

function test(APP){

	APP.get('/', function(req, res){

		res.sendFile((PATH.join(__dirname, "home.html")));

	});

	APP.get('/survey', function(req, res){
		res.sendFile((PATH.join(__dirname, "survey.html")));

	});
}

module.exports = test;