//NPM installs required 
var EXPRESS = require('express');
var BODYPARSER = require('body-parser');
var PATH = require('path');

var PORT = process.env.PORT || 3000; 
var APP = EXPRESS();

//Server structure to interpret data sent to it.
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.text());
APP.use(BODYPARSER.json({ type: "application/vnd.api+json" }));

//path to serve static files.
// NOTE: May need to change to your folder if different.
APP.use(EXPRESS.static(PATH.join(__dirname, '/app')));

// ROUTER - Below points our server to a series of "route" files.
// NOTE: EXAMPLES. Change your particular routes if different. 
require("./app/routing/api-routes.js")(APP);
require("./app/routing/html-routes.js")(APP);


//Express Listener
APP.listen(PORT, function(){
	console.log("Listening on port:", PORT);
});
