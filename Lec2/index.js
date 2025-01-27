const http = require("http");
const server = http.createServer((request, response) => {
  if (req.url === "/") {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("Hello World!");
  } else if (req.url === "/home") {
  }
});

server.listen(3000, () => {
  console.log("Server started successfully on PORT 3000");
});
//server.close();
