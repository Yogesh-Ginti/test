const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const vastFile = path.join(__dirname, "vast.xml");

app.use(cors())
app.get("/", (req, res) => {
  res.send("VAST server is running!");
});

app.get("/vast", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://imasdk.googleapis.com");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.sendFile(vastFile);
});

app.listen(PORT, () => {
  console.log(`VAST server running at http://localhost:${PORT}/vast`);
});
