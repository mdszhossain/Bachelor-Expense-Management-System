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

// uses of essential middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// error handling middleware
app.use((req, res, next) => {
    throw new ExpressError(404, "Page Not Found");
})
app.use((error, req, res, next) => {
    const {status = 500, message = "Some Error"} = error;
    res.status(status).send(message);
});

// server listening
app.listen(PORT, () => {
  console.log("Server is Running: ", PORT);
});
