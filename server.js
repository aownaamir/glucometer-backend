const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");

dotenv.config({ path: "./config.env" });
// const { ServerApiVersion } = require("mongodb");

const mongoURI = process.env.MONGO_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if connection fails
  }
}
connectToDatabase();
/////////////////////////

////////////////////////

const port = 3000;
const server = app.listen(port, () => {
  console.log("App Running");
});
