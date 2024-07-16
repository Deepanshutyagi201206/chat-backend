const { SignUpModel } = require("../../modals");

const getUsers = async (req, res) => {
  try {
    const users = await SignUpModel.find();

    return res.status(200).send({
      users: users,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = getUsers;
