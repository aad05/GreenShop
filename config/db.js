const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_SERVER_URL);
    console.log(
      `MongoDB succesfully connected to ${conn.connection.host} on port ${process.env.MONGO_SERVER_URL}`
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
