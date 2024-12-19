const express = require("express");
const readingsRouter = require("./routes/ReadingsRoutes");
const userRouter = require("./routes/UserRoutes");
const arduinoRouter = require("./routes/ArduinoRoutes");
const { SerialPort, ReadlineParser } = require("serialport");
const cors = require("cors");

const app = express();

app.use(cors());
// Serial Port setup
const serialPort = new SerialPort({ path: "COM9", baudRate: 9600 }); // Update "COM3" to match your Arduino's port
const parser = serialPort.pipe(new ReadlineParser());
// body parserer
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Handle incoming data from Arduino
parser.on("data", (data) => {
  console.log("Received from Arduino:", data);
});

app.use("/api/v1/arduino", arduinoRouter);
app.use("/api/v1/readings", readingsRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
