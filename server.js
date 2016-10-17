/* se declara todo lo que se va a usar en la aplicacion */
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 7000;
var database = require("./config/database.js");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


/* configuracion de la app */
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({"extended":"true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(methodOverride());



/* conexion a la base de datos */
mongoose.connect(database.url);

require("./app/routes")(app);


app.listen(port);
console.log("App en puerto "+port);