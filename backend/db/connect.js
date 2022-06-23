// const { application, Router } = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const Router = require("./../routes/routes.js")
const app = express();

const uri = process.env.MONGO_URI;
console.log(uri);

const connectDB = (uri) => {
  return mongoose.connect(uri),
  {
   useNewUrlParser: true,
   useUnifiedTopology: true
   };
};

module.exports = connectDB;



// mongoose.connect(
//   uri, 
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }
//   );
    
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

// app.use(Router);
// app.listen(3000, () => {
//   console.log("Server is running at port 3000");
// })


// const username = "SHA2"
// const password = "SHA2"
// const cluster = "cluster0.9qrjsk4"
// const dbname = "Orbital"