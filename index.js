const express = require("express");
const env = require("dotenv");
env.config();
const app = express();

app.listen(5000, () => {
  console.log("Server started...");
});
