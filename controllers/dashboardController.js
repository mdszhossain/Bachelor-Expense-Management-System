const Rent = require("../models/rentModel");
const Member = require("../models/memberModel");

module.exports.renderDashboardPage = async (req, res) => {
    const rents = await Rent.find({}).sort({ month: -1 }).lean();
    const members = await Member.find({}).sort({ name: 1 }).lean();
    // compute simple aggregates
    const monthsTracked = rents.length;
    const totalRent = rents.reduce((s, r) => s + (r.rent || 0), 0);
    const totalUtility = rents.reduce((s, r) => s + (r.utilityBill || 0), 0);
    const totalMembers = members.length;
    res.render("dashboard.ejs", { rents, monthsTracked, totalRent, totalUtility, members, totalMembers });
};