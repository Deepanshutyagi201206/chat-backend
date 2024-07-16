const { mongoose } = require("../../db");

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  date: {
    type: Date,
  },
  userId: {
    type: String,
  },
});

const connectedUser = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  _id: {
    type: String,
  },
  messages: [messageSchema]
})

const connectUserSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  connectedUser: [connectedUser]
});

const ConnectUserModel = mongoose.model("connectUser", connectUserSchema);

module.exports = ConnectUserModel;
