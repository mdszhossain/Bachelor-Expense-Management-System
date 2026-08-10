const express = require("express");
const router = express.Router();
const rentController = require("../controllers/rentController");
const wrapAsync = require("../utils/wrapAsync");

router.get("/addRent", wrapAsync(rentController.renderAddRentPage));

module.exports = router;