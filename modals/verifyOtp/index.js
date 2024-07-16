const { mongoose } = require("../../db");
const { ObjectId } = mongoose.Schema.Types;

const verifyOtpSchema = new mongoose.Schema({
  phone: {
    type: Number,
  },
  otp: {
    type: Number,
  },
  userId: {
    type: String,
  },
});

const VerifyOtpModel = mongoose.model("verifyOtp", verifyOtpSchema);

module.exports = VerifyOtpModel;
