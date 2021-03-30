// we can reference to Express module using "express" variable. When a module name is provided without path, require() function checks the node_modules folder for the dependency by default. "express" is function, not variable.

// const sum = function(x,y) {return x + y;}
var express = require("express");

// create Express application and make reference to it.
var app = express();

// we need to tell Express to use our public folder to serve static files.
app.use(express.static("PUBLIC"));

// Listen for connections. Returns http.Server
//  server will listen port=3000
const port = process.env.port || 3000;

const callbackOnGet = function (req, res) {
  //res.send("прЮвет волку");
  //res.sendfile("PUBLIC/Main.html");
  res.sendFile(__dirname + '/PUBLIC/Main.html');
};

app.get("/", callbackOnGet);

// callback 0
const callbackOnStart = function () {
  console.log("Start listening on port 3000!");
};

app.listen(port, callbackOnStart);
