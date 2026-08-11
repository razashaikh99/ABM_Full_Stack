require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

const PORT = 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully 🚀");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed ❌", error.message);
  });