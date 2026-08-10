const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const dashboardController = require("../controllers/dashboardController");

router.get("/dashboard", wrapAsync(dashboardController.renderDashboardPage));

module.exports = router;