const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentSchema = new Schema({
  month: { type: String, required: true, unique: true },
  rent: { type: Number, required: true },
  utilityBill: { type: Number, required: true },
});

const Rent = mongoose.model("Rent", rentSchema);
module.exports = Rent;
