const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const dashboardController = require("../controllers/dashboardController");
const { isAuthentication } = require("../middleware/isAuthentication");

router.get(
  "/dashboard",
  isAuthentication,
  wrapAsync(dashboardController.renderDashboardPage),
);

module.exports = router;
