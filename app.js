const express = require("express");
const readingsRouter = require("./routes/ReadingsRoutes");
const userRouter = require("./routes/UserRoutes");
const arduinoRouter = require("./routes/ArduinoRoutes");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/v1/arduino", arduinoRouter);
app.use("/api/v1/readings", readingsRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
