const mongoose = require("mongoose");
const UserSchema = require("../models/UserSchema");

module.exports = mongoose.model("User", UserSchema, "users");
