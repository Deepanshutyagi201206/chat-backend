const { mongoose } = require("../../db");

const messageSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
  },
  userId: {
    type: String,
  },
  isSent: {
    type: Boolean,
    default: false
  },
  isDelivered: {
    type: Boolean,
    default: false
  },
  isRead: {
    type: Boolean,
    default: false
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
  messages: [messageSchema],
  newMessages: [messageSchema],

}, { timestamps: true })

const connectUserSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  connectedUser: [connectedUser]
});

const ConnectUserModel = mongoose.model("connectUser", connectUserSchema);

module.exports = ConnectUserModel;

