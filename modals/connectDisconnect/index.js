const { mongoose } = require("../../db");

const connectDisconnect = new mongoose.Schema({
  _id: {
    type: String
  },
  status: {
    type: String
  },
});

const ConnectDisconnectModel = mongoose.model("connectDisconnect", connectDisconnect);

module.exports = ConnectDisconnectModel;
