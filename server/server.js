
const express = require("express");
var morgan = require("morgan");
const app = express();
const PORT = 4000;
const cors = require("cors");


app.use(morgan("dev"));

// cors als Middleware 
app.use(cors());

require("dotenv").config();

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//End Poinsts
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/offer", require("./routes/offer"));

//server start
app.listen(PORT, () => {
  console.log(`The app listening on Port ${PORT}`);
});



//const authMiddleware = require("./middlewares/auth");
//const authRole = require("./middlewares/admin");
//test
//app.get("/", authMiddleware, async (req, res) => {
//  res.status(200).json({ message: " API" });
//});