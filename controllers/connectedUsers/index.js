const { ConnectUserModel } = require("../../modals");

const connectedUsers = async (req, res) => {
  try {
    const user = await ConnectUserModel.findById(req.params.id);

    return res.status(200).send({
      users: user?.connectedUser,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = connectedUsers;
