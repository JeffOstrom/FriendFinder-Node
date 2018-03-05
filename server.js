//NPM installs required/Dependencies
var express = require('express');
var bodyparser = require('body-parser');


var PORT = process.env.PORT || 3000; 
var app = express();

//Server structure to interpret data sent to it.
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vnd.api+json" }));

// ROUTE - Server to a series of "route" files.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Express Listener
app.listen(PORT, function(){
	console.log("APP Listening on PORT: ", + PORT);
});
