const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

// Replace with your HC-05 port (e.g., COM3 on Windows or /dev/tty.HC-05 on macOS/Linux)
const port = new SerialPort("COM3", { baudRate: 9600 });

// Add a line parser to handle incoming data
const parser = port.pipe(new Readline({ delimiter: "\r\n" }));

// Open the connection
port.on("open", () => {
  console.log("Serial Port Opened");
});

// Listen for data from Arduino
parser.on("data", (data) => {
  console.log("Received:", data);
});

// Send data to Arduino
setTimeout(() => {
  const message = "Hello from Node.js!";
  console.log("Sending:", message);
  port.write(message + "\n");
}, 2000);

// Handle errors
port.on("error", (err) => {
  console.error("Error:", err.message);
});
