var express = require("express");
var path = require("path");
var colors = require("colors");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
  });

  app.listen(PORT, function() {
    console.log(colors.rainbow("App listening on PORT " + PORT));
  });