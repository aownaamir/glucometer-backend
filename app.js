const express = require("express");
const readingsRouter = require("./routes/ReadingsRoutes");
const userRouter = require("./routes/UserRoutes");

const app = express();

// body parserer
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/v1/readings", readingsRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
