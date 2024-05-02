var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var fs = require("fs");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(
	new LocalStrategy(
		{
			usernameField: "id",
			passwordField: "pw",
		},
		(username, password, done) => {
			console.log(username, password);
			try {
				const user = JSON.parse(
					fs.readFileSync(`./noupload/${username}.json`, "utf8")
				);
				if (user.id === username && bcrypt.compareSync(password, user.pwHash)) {
					return done(null, user);
				}
				return done(null, false, { message: "Incorrect" });
			} catch (err) {
				return done(err);
			}
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	try {
		const user = JSON.parse(fs.readFileSync(`./noupload/${id}.json`, "utf8"));
		done(null, user);
	} catch (err) {
		done(err);
	}
});

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

router.post("/signup", (req, res, next) => {
	const { id, pw, phone } = req.body;
	const pwHash = bcrypt.hashSync(pw, 10);
	fs.writeFileSync(
		`./noupload/${id}.json`,
		JSON.stringify({ id, pwHash, phone })
	);
	res.send("signup success");
});

router.get("/login", (req, res, next) => {
	const { id, pw } = req.query;
	passport.authenticate("local", (err, user, info) => {
		console.log(err, user, info);
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.send("login failed");
		}
		req.logIn(user, (err) => {
			if (err) {
				return next(err);
			}
			return req.logIn(user, (err) => {
				if (err) {
					return next(err);
				}
				return res.send("login success");
			});
		});
	})(req, res, next);
});

module.exports = router;

