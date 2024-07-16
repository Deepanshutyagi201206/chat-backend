const generateOtp = require("../../functions/generateOtp");
const { SignUpModel } = require("../../modals");

const logIn = async (req, res) => {
  try {
    const otp = generateOtp();

    const { phone } = req.body;

    const foundUser = await SignUpModel.findOne({ phone: phone }).exec();

    if (!foundUser?.phone) {
      throw { msg: "User doesn't exist" };
    }

    const user = await SignUpModel.findOneAndUpdate(
      { phone: phone },
      { otp: otp },
      {
        returnDocument: "after",
      }
    );

    return res.status(200).send({
      otp: user.otp,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = logIn;
