const express = require("express");
const env = require("dotenv");
env.config();

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
  console.log("Server started..." + PORT);
});
