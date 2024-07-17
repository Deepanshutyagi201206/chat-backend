const connectedUser = require("./connectedUser");
const connectedUsers = require("./connectedUsers");
const getUser = require("./getUser");
const getUsers = require("./getUsers");
const getConnectDiconnect = require("./handleGetConnectDisconnect");
const logIn = require("./logIn");
const signUp = require("./signUp");
const updateConnectedUser = require("./updateConnectedUser");
const verifyOtp = require("./verifyOtp");

module.exports = {
  logIn,
  signUp,
  verifyOtp,
  connectedUsers,
  connectedUser,
  getUsers,
  getUser,
  getConnectDiconnect,
  updateConnectedUser
};
