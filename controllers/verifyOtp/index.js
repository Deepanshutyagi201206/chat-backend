const generateToken = require("../../functions/generateToken");
const { SignUpModel, VerifyOtpModel } = require("../../modals");

const verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    const foundUser = await SignUpModel.findOne({ phone: phone }).exec();

    if (foundUser?.otp != otp) {
      throw { msg: "Otp doesn't match" };
    }

    const userId = foundUser._id.toString();

    await VerifyOtpModel.findOneAndUpdate(
      {
        phone: phone,
        userId: userId,
      },
      {
        otp: otp,
      },
      {
        upsert: true,
        returnDocument: "after",
      }
    );

    res.status(200).send({
      _id: userId,
      token: generateToken({
        phone: phone,
        _id: userId,
      }),
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = verifyOtp;
