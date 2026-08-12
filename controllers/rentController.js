const Rent = require("../models/rentModel");
const ExpressError = require("../utils/ExpressError");

module.exports.renderAddRentPage = async (req, res) => {
    res.render("addRent.ejs");
};

module.exports.createRent = async (req, res) => {
    const { month, rent, utilityBill } = req.body;
    const rentValue = Number(rent) || 0;
    const utilityValue = Number(utilityBill) || 0;
    // Prevent duplicate month entries
    const existing = await Rent.findOne({ month });
    if (existing) {
        return res.status(400).render("error.ejs", {
            status: 400,
            message: `Rent entry for ${month} already exists.`,
            returnTo: "/bems/addRent",
        });
    }
    await Rent.create({ month, rent: rentValue, utilityBill: utilityValue });
    res.redirect("/bems/dashboard");
};

module.exports.renderEditRentPage = async (req, res) => {
    const { id } = req.params;
    const rent = await Rent.findById(id).lean();
    if (!rent) throw new ExpressError(404, "Rent entry not found");
    res.render("editRent.ejs", { rent });
};

module.exports.updateRent = async (req, res) => {
    const { id } = req.params;
    const { month, rent, utilityBill } = req.body;
    const rentValue = Number(rent) || 0;
    const utilityValue = Number(utilityBill) || 0;
    // check for duplicate month on other record
    const existing = await Rent.findOne({ month });
    if (existing && existing._id.toString() !== id) {
        return res.status(400).render("error.ejs", {
            status: 400,
            message: `Another rent entry for ${month} already exists.`,
            returnTo: "/bems/dashboard",
        });
    }
    await Rent.findByIdAndUpdate(id, { month, rent: rentValue, utilityBill: utilityValue }, { runValidators: true });
    res.redirect("/bems/dashboard");
};

module.exports.deleteRent = async (req, res) => {
    const { id } = req.params;
    await Rent.findByIdAndDelete(id);
    res.redirect("/bems/dashboard");
};