const express = require("express");
const cors = require("cors");
const { SerialPort, ReadlineParser } = require("serialport");
const app = express();
const port = 3001;
app.use(cors());

// Serial Port setup
const serialPort = new SerialPort({ path: "COM9", baudRate: 9600 }); // Update "COM3" to match your Arduino's port
const parser = serialPort.pipe(new ReadlineParser());

// Middleware
app.use(express.json());

// Handle incoming data from Arduino
parser.on("data", (data) => {
  console.log("Received from Arduino:", data);
});

// Endpoint to send data to Arduino
app.post("/send", (req, res) => {
  const { message } = req.body;
  if (message) {
    serialPort.write(message + "\n");
    res.status(200).send("Message sent to Arduino.");
  } else {
    res.status(400).send("No message provided.");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
