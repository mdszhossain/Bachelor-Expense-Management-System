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

app.listen(PORT, () => {
  console.log("Server is Running: ", PORT);
});
