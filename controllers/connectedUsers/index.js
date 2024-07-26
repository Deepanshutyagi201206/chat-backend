const { ConnectUserModel } = require("../../modals");

const connectedUsers = async (req, res) => {
  try {
    const user = await ConnectUserModel.findById(req.params.id);

    const connectedUsers = user?.connectedUser.sort((a, b) => b.updatedAt - a.updatedAt)

    return res.status(200).send({
      users: connectedUsers,
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = connectedUsers;
