const express = require("express");
const router = express.Router();
const rentController = require("../controllers/rentController");
const wrapAsync = require("../utils/wrapAsync");

router.get("/addRent", wrapAsync(rentController.renderAddRentPage));
router.post("/addRent", wrapAsync(rentController.createRent));
router.get("/rent/:id/edit", wrapAsync(rentController.renderEditRentPage));
router.put("/rent/:id", wrapAsync(rentController.updateRent));
router.delete("/rent/:id", wrapAsync(rentController.deleteRent));

module.exports = router;