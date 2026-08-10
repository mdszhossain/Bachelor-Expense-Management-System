// requiring essential packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
const PORT = process.env.PORT || 8080;
const ejs = require("ejs");
const methodOverride = require("method-override");
const path = require("path");
const ExpressError = require("./utils/ExpressError");
const ejsEngine = require("ejs-mate");
const session = require("express-session");
const connectDB = require("./db/connectDB");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/userModel");

// uses of essential middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsEngine);
app.use(
  session({
    secret: "secretstring",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  }),
);

// using passport for authentication and authorization
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// database connection
connectDB();

// routers
const userRouter = require("./routes/userRoute");
const dashboardRouter = require("./routes/dashboarRoute");
const rentRouter = require("./routes/rentRoute");

app.use((req, res, next) => {
  res.locals.currentUser = req.user || null;
  if(req.user) {
    res.locals.fullname = req.user.fullname;
  }
  next();
});

// using routers
app.use("/bems", userRouter);
app.use("/bems", dashboardRouter);
app.use("/bems", rentRouter);

// error handling middleware
app.use((req, res, next) => {
  throw new ExpressError(404, "Page Not Found");
});
app.use((error, req, res, next) => {
  const { status = 500, message = "Some Error" } = error;
  res.status(status).send(message);
});

// server listening
app.listen(PORT, () => {
  console.log("Server is Running: ", PORT);
});
