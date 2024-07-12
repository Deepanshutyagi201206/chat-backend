const { default: mongoose } = require("mongoose");

const url =
  "mongodb+srv://deepanshutyagi201206:Deep1234@cluster0.d5gikmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
      await mongoose.connect(url);
      
      console.log("Connected db")
  } catch (err) {
    console.log(err);
  }
};

connectDb();

module.exports = { mongoose };
