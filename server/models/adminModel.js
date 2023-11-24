const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    uniqueid: {
      type: String,
      required:  [true, "Please provide the Unique Id"]
    },
    username: {
      type: String,
      required: [true, "Please provide the username"]
    },
    email: {
        type: String,
        required: [true, "Please provide the username"]
    },
    password: {
      type: String,
      required: [true, "Please provide your password"]
    }
  }
);

module.exports = mongoose.model("Admin", adminSchema);
