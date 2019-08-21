var express = require("express");
var path = require("path");
var colors = require("colors");

var app = express();
let PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log(colors.rainbow("App listening on server http://localhost:" + PORT));
});