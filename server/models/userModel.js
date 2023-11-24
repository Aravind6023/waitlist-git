const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    uniqueid: {
      type: String,
      required: [true, "Please provide the generated ID"]
    },
    username: {
      type: String,
      required: [true, "Please provide the username"]
    },
    email: {
      type: String,
      required: [true, "Please provide your email address"]
    },
    password: {
      type: String,
      required: [true, "Please provide your password"]
    },
    phonenumber: {
      type: Number,
      required: [true, "Please provide your phone number"]
    },
    shortid: {
        type: String,
        required: [true, "Please provide the short ID"],
        unique: true
      },
    position: {
      type: String
    },
    invites: {
        type : Number
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
