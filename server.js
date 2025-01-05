const express = require("express");
const app = express();
const port = 3000;

app.get("/ping", (req, res) => {
  res.send("first API endpoint created.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/ping`);
});

//milestone3 completed.
