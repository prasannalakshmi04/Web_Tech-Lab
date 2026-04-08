const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.write("Welcome to Node.js Server");
  } else if (req.url === "/about") {
    res.write("This is About Page");
  } else {
    res.write("Page not found");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});