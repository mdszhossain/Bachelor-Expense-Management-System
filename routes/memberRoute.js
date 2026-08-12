const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");
const wrapAsync = require("../utils/wrapAsync");
const { isAuthentication } = require("../middleware/isAuthentication");

router.get("/addMember", isAuthentication, wrapAsync(memberController.renderAddMemberPage));
router.post("/addMember", isAuthentication, wrapAsync(memberController.createMember));
router.get("/editMember/:id", isAuthentication, wrapAsync(memberController.renderEditMemberPage));
router.put("/editMember/:id", isAuthentication, wrapAsync(memberController.updateMember));
router.delete("/member/:id", isAuthentication, wrapAsync(memberController.deleteMember));

module.exports = router;
