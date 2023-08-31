const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blood-bank");
    console.log(
      `Connected to MongoDB Database ${mongoose.connection.host}`.bgRed.white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`);
  }
};

module.exports = connectDB;
