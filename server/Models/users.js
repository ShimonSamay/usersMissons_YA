const mongoose = require("mongoose");
const scheme = mongoose.Schema;

const Users = new scheme(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    age: {
      type: Number,
      required: true,
    },

    password: {
      type: String,
      required: true,
    }, 
    gender: {
      type: String,
      required: true,
    }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", Users);
