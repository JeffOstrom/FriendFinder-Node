//html route setup
var Path = require("path");
// get FRIENDS array in JSON format 

module.exports = function(app) {

//Routes
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};


 