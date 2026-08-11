const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("AlBayt Mart Backend is Running Successfully! 🚀");
});

module.exports = app;