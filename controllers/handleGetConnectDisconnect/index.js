const { ConnectDisconnectModel } = require("../../modals");

const getConnectDiconnect = async (req, res) => {

  try {
    const connectDisconnect = await ConnectDisconnectModel.find()

    return res.status(200).send({
      connectDisconnect: connectDisconnect
    })
  }
  catch (err) {
    return res.status(400).send(err)
  }


}

module.exports = getConnectDiconnect;


