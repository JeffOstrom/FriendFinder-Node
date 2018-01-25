//NPM installs required/Dependencies
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 3000; 
var app = EXPRESS();

//Server structure to interpret data sent to it.
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vnd.api+json" }));

//path to serve static files.
app.use(express.static(PATH.join(__dirname, '/app')));

// ROUTE - Server to a series of "route" files.
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

//Express Listener
app.listen(PORT, function(){
	console.log("Listening on PORT: ", + PORT);
});
