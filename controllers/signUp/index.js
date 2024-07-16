const generateOtp = require("../../functions/generateOtp");
const { SignUpModel } = require("../../modals");

const signUp = async (req, res) => {
  try {
    const otp = generateOtp();
    const { phone } = req.body;

    const foundUser = await SignUpModel.findOne({ phone: phone }).exec();

    if (foundUser?.phone) {
      throw { msg: "User already exist" };
    }

    const user = await SignUpModel.create({ ...req.body, otp: otp });

    return res.status(200).send({
      otp: user.otp,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = signUp;
