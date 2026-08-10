const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentSchema = new Schema({
  month: { type: String, required },
  rent: { type: Number, required },
  utilityBill: { type: Number, required },
});

const Rent = mongoose.model("Rent", rentSchema);
module.exports = Rent;
