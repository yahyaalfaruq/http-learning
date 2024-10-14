const http = require("http");

var routes = {
  "/api/profile": function profile(request, response) {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify({ name: "Yahya" }));
  },
};

http
  .createServer(function (request, response) {
    if (request.url in routes) {
      return routes[request.url](request, response);
    }

    if (request.method === "POST") {
      let body = "";

      request.on("data", (chunk) => {
        body += chunk.toString();
      });

      request.on("end", () => {
        response.writeHead(200, { "Content-type": "application/json" });
        response.end();
      });
    }
  })
  .listen(5000);
