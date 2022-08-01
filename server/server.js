const express = require("express");
var morgan = require("morgan");
const app = express();
const PORT = 4000;
const cors = require("cors");
const authMiddleware = require("./middlewares/auth");
const authRole = require("./middlewares/admin");
app.use(morgan("dev"));

app.use(cors());

require("dotenv").config();

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/offer", require("./routes/offer"));
//app.use("/api/v1/user" )
app.get("/", authMiddleware, async (req, res) => {
  res.status(200).json({ message: " API" });
});

app.listen(PORT, () => {
  console.log(`The app listening on Port ${PORT}`);
});
