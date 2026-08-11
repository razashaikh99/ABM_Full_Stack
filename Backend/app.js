const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("AlBayt Mart Backend is Running Successfully! 🚀");
});

app.use("/api/auth", authRoutes);

module.exports = app;