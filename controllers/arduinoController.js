const { SerialPort, ReadlineParser } = require("serialport");

const serialPort = new SerialPort({ path: "COM8", baudRate: 9600 });
const parser = serialPort.pipe(new ReadlineParser());

let latestReading = null;

parser.on("data", (data) => {
  console.log("Data from Arduino:", data);
  latestReading = data.trim();
});
serialPort.on("error", (err) => {
  console.error("Error with the serial port:", err.message);
});

exports.measure = async (req, res) => {
  try {
    serialPort.write("MEASURE\n", (err) => {
      if (err) {
        console.error("Error writing to Arduino:", err.message);
        return res
          .status(500)
          .json({ error: "Failed to communicate with Arduino" });
      }
      console.log("Measure command sent to Arduino");
      setTimeout(() => {
        if (latestReading && !latestReading.includes("ERROR")) {
          console.log("Sending glucose level to browser:", latestReading);
          res.json({ status: "success", glucoseLevel: latestReading });
          latestReading = null;
        } else {
          res
            .status(500)
            .json({ error: "No valid reading received from Arduino" });
        }
      }, 3000);
    });
  } catch (err) {
    res.status(400).json({ status: "error", error: err });
  }
};
// exports.getData = async (req, res) => {
//   const { message } = req.body;
//   if (message) {
//     // serialPort.write(message + "\n");
//     // console.log(message);
//     res.status(200).send("Message sent to Arduino.");
//   } else {
//     res.status(400).send("No message provided.");
//   }
// };
// exports.writeData = async (req, res) => {
//   const { message } = req.body;
//   if (message) {
//     console.log(message);

//     serialPort.write(message + "\n");
//     res.status(200).send("Message sent to Arduino.");
//   } else {
//     res.status(400).send("No message provided.");
//   }
// };
