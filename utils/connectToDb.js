// db.js

const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true, // To parse connection strings
      useUnifiedTopology: true, // To use the new connection management engine
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if connection fails
  }
}

module.exports = connectToDatabase;
