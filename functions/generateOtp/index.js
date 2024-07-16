const generateOtp = () => {
  return Math.floor(Math.random() * 1000) + 1000;
};

module.exports = generateOtp;
