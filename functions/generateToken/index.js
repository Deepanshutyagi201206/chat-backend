var jwt = require("jsonwebtoken");

const generateToken = ({ phone, _id }) => {
  var token = jwt.sign({ phone: phone, _id: _id }, "shhhhh");
  return token;
};

module.exports = generateToken;
