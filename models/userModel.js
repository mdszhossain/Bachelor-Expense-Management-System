const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { default: passportLocalMongoose } = require("passport-local-mongoose");

const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
