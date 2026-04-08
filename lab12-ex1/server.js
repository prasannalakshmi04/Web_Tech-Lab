const http = require("http"); // import module

// create server
const server = http.createServer((req, res) => {

  // set header
  res.setHeader("Content-Type", "text/plain");

  // handle request
  if (req.url === "/") {
    res.write("Welcome to Node.js Server");
  } else if (req.url === "/about") {
    res.write("This is About Page");
  } else {
    res.write("Page not found");
  }

  // end response
  res.end();
});

// run server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});