const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("Global Middleware 1");
  console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${new Date()}`);
  next();
});

app.use((req, res, next) => {
  console.log("Global Middleware 2");
  next();
});

const checkUser = (req, res, next) => {
  console.log("Route Middleware");
  next();
};


app.get("/", checkUser, (req, res) => {
  res.send("Home Page");
});


app.get("/about", (req, res) => {
  res.send("About Page");
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});