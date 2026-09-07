const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const vastFile = path.join(__dirname, "vast.xml");

app.use(cors({
  origin: "https://imasdk.googleapis.com",
  credentials: true
}));
app.get("/", (req, res) => {
  res.send("VAST server is running!");
});

app.get("/vast", (req, res) => {
  res.sendFile(vastFile);
});

app.listen(PORT, () => {
  console.log(`VAST server running at http://localhost:${PORT}/vast`);
});
