const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSignUpModel = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      text: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
      text: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);
module.exports = mongoose.model("signup", UserSignUpModel);
