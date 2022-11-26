const express = require("express");
const app = express();
const port = 5000;

app.get("/names", (req, res) => {
  res.send("Kabir!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
