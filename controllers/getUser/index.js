const { SignUpModel } = require("../../modals");

const getUser = async (req, res) => {
  try {
    const user = await SignUpModel.findById(req.params.id);

    return res.status(200).send({
      user: user,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = getUser;
