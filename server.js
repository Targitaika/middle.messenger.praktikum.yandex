require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.static("static"));

app.listen(PORT, function () {
  console.log(`Send static to port:${PORT}`);
});
