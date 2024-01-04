const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required:[true, "Email is Required"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  dateofbirth: {
    type:String,
    required: true,
  },
  address: {
    type:String,
    required: true,
  },
  gender: {
    type:String,
    required: true,
  },
  bio: {
    type:String,
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
