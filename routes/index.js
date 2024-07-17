var express = require("express");
const {
  signUp,
  logIn,
  verifyOtp,
  connectedUsers,
  connectedUser,
  getUsers,
  getUser,
  getConnectDiconnect,
  updateConnectedUser,
} = require("../controllers");
var router = express.Router();

router.post("/sign-up", signUp);
router.post("/log-in", logIn);
router.post("/verify-otp", verifyOtp);
router.get("/connected-users/:id", connectedUsers);
router.get("/connected-user/:firstUserId/:secondUserId", connectedUser);
router.put("/connected-user/:firstUserId/:secondUserId", updateConnectedUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.get("/connect-disconnect", getConnectDiconnect);

module.exports = router;
