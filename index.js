// we can reference to Express module using "express" variable. When a module name is provided without path, require() function checks the node_modules folder for the dependency by default. "express" is function, not variable.

//------------------- Dependencies BLOCK ------------------------
// const sum = function(x,y) {return x + y;}
var express = require("express");

// create Express application and make reference to it.
var app = express();

//-------------------Constants BLOCK-----------------------------
const port = process.env.PORT || 3000;

//------------------- app.set BLOCK ---------BEFORE app.use-----------
// assign 2 settings, using app.set(SettingName, SettingValue):
// 'views' setting points to 'views' folder, containing pug file
app.set("views", "VIEWS");
// 'view engine' setting points to template engine
app.set("view engine", "pug");

//---------------------app.use BLOCK---------------------------
// we need to tell Express to use our public folder to serve static files.
app.use(express.static("PUBLIC"));

//-------------------Routes BLOCK-----------------------------------

const callbackOnGet = function (req, res) {
  //res.send("прЮвет волку");
  //res.sendfile("PUBLIC/Main.html");
  res.sendFile(__dirname + "/PUBLIC/Main.html");
};

const callbackOnGetPugFile = function (req, res) {
  // render our Pug template
  // res.render('PugFileName', { title: 'xxx', message: 'yyy' });

  const data = {
    titleText: "Kaweh",
    pugDefinition:
      "Pug (Jade) is template engine to replace placeholder in page",
    pugAlternatives1:
      "Pug alternative 1: EJS (easy to understand) plain javascript",
    pugAlternatives2: "Pug alternative 2: React is used as V in MVC",
    pugAlternatives3: "Pug alternative 3: Handlebars - easy for frontend",
    pugAlternatives4: "Other Pug alternatives: Typescript, Mustaches",
    expressAlternatives:
      "Express Alternatives: Koa, Sails.js (MVC-architecture),  Nest (Typescript)",
  };

  res.render("PugFile", data);
};

app.get("/", callbackOnGet);
app.get("/getPugFile", callbackOnGetPugFile);

// ----------------------- START SERVER -----------------------------

const callbackOnStartListen = function () {
  console.log(`Start listening on port ${port} ..... `);
};

// Listen for connections. Returns http.Server
app.listen(port, callbackOnStartListen);
