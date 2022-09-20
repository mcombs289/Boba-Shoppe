const express = require("express");
const app = express();

const products = [
  {
    name: "boba",
    flavor: "coconut",
    size: "small",
  },
  {
    name: "boba",
    flavor: "chocolate",
    size: "medium",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/login", (req, res) => {
  // Authenticate User
});

app.listen(3000);
