const { ConnectUserModel } = require("../../modals");

const updateConnectedUser = async (req, res) => {
  try {
    const user = await ConnectUserModel.findOneAndUpdate({ "_id": req.params.firstUserId, "connectedUser._id": req.params.secondUserId }, {
      "$set": {
        "connectedUser.$.newMessages": []
      }
    }, { returnDocument: "after" });

    return res.status(200).send({ user: user });

  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = updateConnectedUser;
