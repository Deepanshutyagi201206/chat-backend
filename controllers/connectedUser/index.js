const { ConnectUserModel } = require("../../modals");

const connectedUser = async (req, res) => {
  try {
    const user = await ConnectUserModel.findById(req.params.firstUserId);

    if (user) {
      const connectedUser = user.connectedUser.id(req.params.secondUserId)

      return res.status(200).send({
        user: connectedUser,
      });
    }
    else{
      return res.status(200).send({
        user: null,
      });
    }

  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = connectedUser;
