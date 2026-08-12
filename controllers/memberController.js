const Member = require("../models/memberModel");
const ExpressError = require("../utils/ExpressError");

module.exports.renderAddMemberPage = async (req, res) => {
  res.render("addMember.ejs");
};

module.exports.createMember = async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).render("error.ejs", {
      status: 400,
      message: "Name and phone are required",
      returnTo: "/bems/addMembers",
    });
  }
  await Member.create({ name, phone });
  res.redirect("/bems/dashboard");
};

module.exports.renderEditMemberPage = async (req, res) => {
  const { id } = req.params;
  const member = await Member.findById(id).lean();
  if (!member) throw new ExpressError(404, "Member not found");
  res.render("editMember.ejs", { member });
};

module.exports.updateMember = async (req, res) => {
  const { id } = req.params;
  const { name, phone } = req.body;
  await Member.findByIdAndUpdate(id, { name, phone }, { runValidators: true });
  res.redirect("/bems/dashboard");
};

module.exports.deleteMember = async (req, res) => {
  const { id } = req.params;
  await Member.findByIdAndDelete(id);
  res.redirect("/bems/dashboard");
};
