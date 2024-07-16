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
} = require("../controllers");
var router = express.Router();

router.post("/sign-up", signUp);
router.post("/log-in", logIn);
router.post("/verify-otp", verifyOtp);
router.get("/connected-users/:id", connectedUsers);
router.get("/connected-user/:firstUserId/:secondUserId", connectedUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.get("/connect-disconnect", getConnectDiconnect);

module.exports = router;
