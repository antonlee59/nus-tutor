require("dotenv").config();
require('express-async-errors')

const express = require("express");
const app = express();
const cors = require("cors");

const authRouter = require("./routes/auth");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const connectDB = require("./db/connect");

//Middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//Set the thing to whatever it is the PORT or 8000 by default
const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log("Server is running...");
    });
  } catch (error) {
    console.error(error);
  }
};
start();
