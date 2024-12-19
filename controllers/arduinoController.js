exports.getData = async (req, res) => {
  const { message } = req.body;
  if (message) {
    // serialPort.write(message + "\n");
    console.log(message);
    res.status(200).send("Message sent to Arduino.");
  } else {
    res.status(400).send("No message provided.");
  }
};
exports.writeData = async (req, res) => {
  const { message } = req.body;
  if (message) {
    serialPort.write(message + "\n");
    res.status(200).send("Message sent to Arduino.");
  } else {
    res.status(400).send("No message provided.");
  }
};
