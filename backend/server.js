const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");

//Middleware
app.use(express.json);
app.use(cors);

//Routes

const port = process.env.PORT || 8000; //Anton's laptop doesnt work on 5000 :(

const start = async () => {
  try {
    await connectDB(process.env.MONGOURI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
