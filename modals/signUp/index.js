const { mongoose } = require("../../db");

const signUpSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  otp: {
    type: Number,
  },
  status: {
    type: String,
    default: "Offline"
  },
});

const SignUpModel = mongoose.model("signUp", signUpSchema);

module.exports = SignUpModel;
