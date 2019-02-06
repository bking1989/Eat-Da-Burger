// Require the Express package
var express = require("express");

// Define our PORT
var PORT = process.env.PORT || 8080;

// Set up our Express application
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import our routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start up our virtual server
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});