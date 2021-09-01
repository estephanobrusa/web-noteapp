const express = require("express");
const expHbs = require("express-handlebars");
const sessions = require("express-session");
const path=require('path');
const flash=require('connect-flash');
const methodOverride =require('method-override')
const passport=require('passport');


const morgan = require("morgan");
const config = require("./config");

///init
require('./database/db');
require('./middleware/passport')
const app = express();

//set
app.set("port", config.port);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  expHbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middleware
//app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(sessions({
    secret: config.secret_session,
    resave: true,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//global
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
  });

//routes
app.use(require('./routes/user.routes'))
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))

//static
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
