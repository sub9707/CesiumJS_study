const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
