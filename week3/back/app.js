var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var passport = require("passport");
const session = require("express-session");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const logger = require("./logs");

var app = express();
app.use((req, res, next) => {
	logger.info("middleware");
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;

