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

const messagesSchema = new mongoose.Schema({
  users: [{ type: String }, { type: String }],
  messages: [messageSchema]
});

const MessagesModel = mongoose.model("messages", messagesSchema);

module.exports = MessagesModel;

